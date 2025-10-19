import axios from "axios";
import { useEffect, useState } from "react";
import { FileText, Music, Video, Image, File, Download, Eye, Trash2, Search } from "lucide-react";
import Swal from "sweetalert2";
import Loader from "./Loader";

const Uploads = () => {
  const [files, setFiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
    const [load, setload] = useState(false)
const handleswan = (fileId) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You really want to delete this file?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      const token = localStorage.getItem("token");
        setload(true)
      axios.delete(`http://localhost:3000/api/deletefile/${fileId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        if (res.data.status === 1) {
          // Remove from local state
          setFiles(files.filter(f => f._id !== fileId));
                
          // Success alert
          Swal.fire({
            
            title: "Deleted!",
            text: "Your file has been deleted successfully.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
          });
         
        } else {
          Swal.fire({
            title: "Error",
            text: res.data.message || "Failed to delete file.",
            icon: "error"
          });
        }
      })
      .catch((error) => {
        console.error("Delete failed:", error);
        Swal.fire({
          title: "Error",
          text: "Something went wrong while deleting the file.",
          icon: "error"
        });
      }) .finally(() => {
    setload(false); // Always hide loader after operation
  });
    }
  });
};


  useEffect(() => {
      const token = localStorage.getItem('token'); // Add this line

    axios.get('http://localhost:3000/api/getuplouds',{
       headers: {
      'Authorization': `Bearer ${token}`
    }
    })
      .then((res) => {
        console.log(res.data.files);
        setFiles(res.data.files);
      })
      .catch((error) => {
        console.error("Error fetching files:", error);
      });
  }, []);

  // Get file icon based on type
  const getFileIcon = (fileName) => {
    if (!fileName) return <File className="text-secondary" size={40} />;
    const ext = fileName.split('.').pop().toLowerCase();
    
    if (['mp3', 'wav', 'ogg', 'flac'].includes(ext)) {
      return <Music className="text-purple-600" size={40} />;
    }
    if (['mp4', 'avi', 'mov', 'mkv', 'webm'].includes(ext)) {
      return <Video className="text-danger" size={40} />;
    }
    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) {
      return <Image className="text-success" size={40} />;
    }
    if (['pdf'].includes(ext)) {
      return <FileText className="text-danger" size={40} />;
    }
    if (['doc', 'docx', 'txt'].includes(ext)) {
      return <FileText className="text-primary" size={40} />;
    }
    return <File className="text-secondary" size={40} />;
  };

  // Get file type for filtering
  const getFileType = (fileName) => {
    if (!fileName) return 'other';
    const ext = fileName.split('.').pop().toLowerCase();
    if (['mp3', 'wav', 'ogg', 'flac'].includes(ext)) return 'audio';
    if (['mp4', 'avi', 'mov', 'mkv', 'webm'].includes(ext)) return 'video';
    if (['jpg', 'jpeg', 'png', 'gif', 'svg', 'webp'].includes(ext)) return 'image';
    if (['pdf', 'doc', 'docx', 'txt'].includes(ext)) return 'document';
    return 'other';
  };

  // Format file size
  const formatFileSize = (bytes) => {
    if (!bytes) return 'Unknown size';
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  // Filter files
  const filteredFiles = files.filter(file => {
    const matchesSearch = file.originalname?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'all' || getFileType(file.originalname) === filterType;
    return matchesSearch && matchesType;
  });

  const handleDownload = async (url, fileName) => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = fileName; // Keeps the .pdf extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error('Download failed:', error);
    // Fallback
    window.open(url, '_blank');
  }
};
  const handleView = (url) => {
    window.open(url, '_blank');
  };

 const handleDelete = (fileId) => {
     handleswan(fileId)
};

  return (<>
    {load && <Loader/>}
    <div className="min-vh-100 bg-light py-4">
      <div className="container">
        {/* Header */}
        <div className="mb-4">
          <h2 className="display-6 fw-bold mb-3">My Files</h2>
          <p className="text-muted">Manage and organize your uploaded files</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-8">
                <div className="input-group">
                  <span className="input-group-text bg-white border-end-0">
                    <Search size={20} className="text-muted" />
                  </span>
                  <input
                    type="text"
                    className="form-control border-start-0"
                    placeholder="Search files..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-4">
                <select 
                  className="form-select"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                >
                  <option value="all">All Files</option>
                  <option value="audio">Audio</option>
                  <option value="video">Video</option>
                  <option value="image">Images</option>
                  <option value="document">Documents</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Files Count */}
        <div className="mb-3">
          <span className="badge bg-primary">{filteredFiles.length} files</span>
        </div>

        {/* Files Grid */}
        {filteredFiles.length === 0 ? (
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center py-5">
              <File size={64} className="text-muted mb-3" />
              <h5 className="text-muted">No files found</h5>
              <p className="text-muted small">Try adjusting your search or filter</p>
            </div>
          </div>
        ) : (
          <div className="row g-3">
            {filteredFiles.map((item, index) => (
              <div key={item._id || index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="card border-0 shadow-sm h-100 hover-card">
                  <div className="card-body d-flex flex-column">
                    {/* File Icon */}
                    <div className="text-center mb-3 py-3 bg-light rounded-3">
                      {getFileIcon(item.originalname)}
                    </div>

                    {/* File Name */}
                    <h6 className="fw-bold mb-2 text-truncate" title={item.originalname}>
                      {item.originalname}
                    </h6>

                    {/* File Info */}
                    <div className="small text-muted mb-3">
                      <div>{getFileType(item.originalname).toUpperCase()}</div>
                      {item.size && <div>{formatFileSize(item.size)}</div>}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto">
                      <div className="btn-group w-100" role="group">
                        <button 
                          className="btn btn-sm btn-outline-primary"
                          onClick={() => handleView(item.URL)}
                          title="View"
                        >
                          <Eye size={16} />
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-success"
                          onClick={() => handleDownload(item.URL, item.originalname)}
                          title="Download"
                        >
                          <Download size={16} />
                        </button>
                        <button 
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleDelete(item._id)}
                          title="Delete"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .hover-card {
          transition: all 0.3s ease;
        }
        .hover-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
        }
      `}</style>
    </div>
    </>
  );
};

export default Uploads;