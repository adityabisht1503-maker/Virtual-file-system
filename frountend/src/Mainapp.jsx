import React, { useState } from 'react';
import { Upload, File, X, Cloud, Check } from 'lucide-react';
import axios from 'axios';
import Loader from './Loader';
import Files from './Files.jsx';
import { toast } from 'react-toastify';
export default function Mainapp() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
   const [load, setload] = useState(false)
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file first');
      return;
    }
 setload(true)
    // Your backend upload logic will go here
    const formData = new FormData();
    formData.append('file', selectedFile);
        const token = localStorage.getItem('token');

    axios.post(`http://localhost:3000/api/uploudfile`,formData,{
       headers: {
      'Authorization': `Bearer ${token}`
    }
    }
       ).then((res) => {
        toast.success("uploaded successfully")
      setload(false);  // ✅ Hide loader AFTER success
    })
    .catch((error) => {
      console.error("Upload failed:", error);
      setload(false);  // ✅ Hide loader even if error
    });
     
    
 
   
    // Example: await axios.post('/api/upload', formData);
  };
  
  

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
  };

  return (
    <>
   
    {load && <Loader/>}
    <div className="min-vh-100 bg-light">
      <Files />
      <div className="container py-5">
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Header */}
            <div className="text-center mb-5">
              <Cloud className="text-primary mb-3" size={64} />
              <h1 className="display-5 fw-bold mb-3">Upload Your Files</h1>
              <p className="lead text-muted">
                Drag and drop or click to select files from your device
              </p>
            </div>

            {/* Upload Card */}
            <div className="card border-0 shadow-lg">
              <div className="card-body p-5">
                {/* Drag & Drop Area */}
                <div
                  className={`border-2 border-dashed rounded-4 p-5 text-center mb-4 ${
                    isDragging ? 'border-primary bg-primary bg-opacity-10' : 'border-secondary'
                  }`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{ 
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    minHeight: '300px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  {!selectedFile ? (
                    <>
                      <Upload 
                        className={`mb-3 ${isDragging ? 'text-primary' : 'text-secondary'}`} 
                        size={64} 
                      />
                      <h4 className="fw-bold mb-2">
                        {isDragging ? 'Drop your file here' : 'Drag & Drop your file'}
                      </h4>
                      <p className="text-muted mb-4">or</p>
                      
                      <label htmlFor="fileInput" className="btn btn-primary btn-lg px-5">
                        Browse Files
                      </label>
                      <input
                        id="fileInput"
                        type="file"
                        className="d-none"
                        onChange={handleFileSelect}
                      />
                      
                      <p className="text-muted small mt-4 mb-0">
                        Support for all file types • Max file size: 100MB
                      </p>
                    </>
                  ) : (
                    <div className="w-100">
                      <div className="bg-success bg-opacity-10 rounded-3 p-4 mb-3">
                        <Check className="text-success mb-2" size={48} />
                        <h5 className="fw-bold text-success mb-0">File Selected!</h5>
                      </div>
                      
                      {/* Selected File Info */}
                      <div className="bg-light rounded-3 p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="bg-primary bg-opacity-10 rounded-3 p-3">
                            <File className="text-primary" size={32} />
                          </div>
                          <div className="text-start">
                            <h6 className="fw-bold mb-1">{selectedFile.name}</h6>
                            <p className="text-muted small mb-0">
                              {formatFileSize(selectedFile.size)}
                            </p>
                          </div>
                        </div>
                        
                        <button
                          type="button"
                          className="btn btn-outline-danger btn-sm"
                          onClick={removeFile}
                        >
                          <X size={18} />
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Upload Button */}
                {selectedFile && (
                  <div className="d-grid gap-2">
                    <button 
                      type="button"
                      className="btn btn-primary btn-lg py-3"
                      onClick={handleUpload}
                    >
                      <Upload className="me-2" size={20} style={{display: 'inline'}} />
                      Upload to Cloud
                    </button>
                    
                    <button 
                      type="button" 
                      className="btn btn-outline-secondary"
                      onClick={removeFile}
                    >
                      Choose Different File
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Info Cards */}
            <div className="row g-3 mt-4">
              <div className="col-md-4">
                <div className="card border-0 bg-primary bg-opacity-10 h-100">
                  <div className="card-body text-center">
                    <h6 className="fw-bold text-primary">Fast Upload</h6>
                    <p className="small text-muted mb-0">Lightning speed transfers</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 bg-success bg-opacity-10 h-100">
                  <div className="card-body text-center">
                    <h6 className="fw-bold text-success">Secure Storage</h6>
                    <p className="small text-muted mb-0">End-to-end encryption</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 bg-warning bg-opacity-10 h-100">
                  <div className="card-body text-center">
                    <h6 className="fw-bold text-warning">Auto Backup</h6>
                    <p className="small text-muted mb-0">Never lose your files</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}