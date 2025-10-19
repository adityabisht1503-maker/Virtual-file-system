const mongoose = require('mongoose');


const musicSchema = new mongoose.Schema({
    URL: {
        type: String,
        required: true
    },
    originalname: {
        type: String,
        required: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Add this line
  size: { type: Number },
  uploadedAt: { type: Date, default: Date.now }
});

const upFiles = mongoose.model('files', musicSchema);

module.exports = {upFiles};
