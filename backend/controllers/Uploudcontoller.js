
require('dotenv').config(); 
const multer = require('multer')
const fs = require("fs");
const { upFiles } = require('../model/Uploudmodel');
const cloudinary = require('cloudinary').v2;


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUD_KEY, 
  api_secret:  process.env.CLOUD_SECREAT,
});


const uploud = multer({ dest: 'temp/' });
const insertfie = async (req, res) => {
  try {
    const { file } = req;
        const userId = req.user.id; // Get from auth middleware

    if (!file) return res.status(400).json({ message: "no file uploaded" });

    // Move this AFTER you have the file
    const fileExtension = file.originalname.split('.').pop().toLowerCase();
    const mediaExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg', 'mp4', 'avi', 'mov', 'mp3', 'wav'];

    const result = await cloudinary.uploader.upload(file.path, {
      folder: "allfiles",
      resource_type: mediaExtensions.includes(fileExtension) ? "auto" : "raw", // Fixed typo: fileextension -> fileExtension
    });

    fs.unlinkSync(file.path);

    // Save to database
    const newfile = new upFiles({
      URL: result.secure_url,
      originalname: file.originalname,
          userId: userId, // Add userId here
      size: result.bytes
    });
    await newfile.save();

    // Send response AFTER saving to database
    res.status(200).json({ 
      message: "file uploaded successfully", 
      data: result 
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ // Fixed: res.send(500) -> res.status(500)
      message: "file upload failed", 
      error: error.message || error 
    });
  }
};

    const getuplouds = async (req,res) => {
      try {
          const userId = req.user.id; 
           const files = await upFiles.find({ userId: userId }).sort({ uploadedAt: -1 });

        res.status(200).json({ message: "Files retrieved successfully",  files });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Failed to retrieve files", error: error.message || error });
      }
    }
    const deletefile = async (req, res) => {
  try {
    const { id } = req.params; // File ID from URL
    const userId = req.user.id; // Get from auth middleware

    // Find the file in database
    const file = await upFiles.findOne({ _id: id, userId: userId });

    if (!file) {
      return res.status(404).json({ 
        status: 0,
        message: "File not found or unauthorized" 
      });
    }

    // Extract public_id from Cloudinary URL
    // URL format: https://res.cloudinary.com/xxx/image/upload/v123456/allfiles/filename.ext
    const urlParts = file.URL.split('/');
    const uploadIndex = urlParts.indexOf('upload');
    
    // Get everything after 'upload/v123456/' (folder + filename without extension)
    const publicIdWithExt = urlParts.slice(uploadIndex + 2).join('/');
    
    // Remove file extension to get public_id
    const publicId = publicIdWithExt.substring(0, publicIdWithExt.lastIndexOf('.')) || publicIdWithExt;

    // Determine resource_type from URL
    let resourceType = 'raw';
    if (file.URL.includes('/image/upload/')) {
      resourceType = 'image';
    } else if (file.URL.includes('/video/upload/')) {
      resourceType = 'video';
    } else if (file.URL.includes('/raw/upload/')) {
      resourceType = 'raw';
    }

    // Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId, { 
      resource_type: resourceType 
    });

    // Delete from MongoDB
    await upFiles.findByIdAndDelete(id);

    res.status(200).json({ 
      status: 1,
      message: "File deleted successfully" 
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ 
      status: 0,
      message: "File deletion failed", 
      error: error.message || error 
    });
  }
};

module.exports = { insertfie, uploud, getuplouds, deletefile };

    