import React from 'react';
import { Cloud, Shield, Zap, Upload, FolderOpen, Share2, ArrowRight, Check } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Home() {
  const {isLoggedin,user}= useSelector((state)=>state.auth)
const navigate = useNavigate()
  const handleclick = () => {
  if (isLoggedin) {
    navigate('/Mainapp');
  } else {
    navigate('/login');
  }
}
  return (
    <div className="min-vh-100">
      {/* Hero Section */}
      <section className="bg-light py-5">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <span className="badge bg-primary mb-3 px-3 py-2">
                <Zap className="me-2" size={16} style={{display: 'inline'}} />
                Fast, Secure, Reliable Cloud Storage
              </span>
              
              <h1 className="display-1 fw-bold mb-4">
                Your Files, Anywhere
                <span className="d-block text-primary">Always Within Reach</span>
              </h1>
              
              <p className="lead text-muted mb-4 fs-4">
                Store, sync, and share your files effortlessly with Cloudify. Experience cloud storage that's simple, secure, and lightning fast.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-3">
                <button onClick={handleclick} className="btn btn-primary btn-lg px-4 py-3">
                  Get Started Free
                  <ArrowRight className="ms-2" size={20} style={{display: 'inline'}} />
                </button>
             <a href="#plan">   <button className="btn btn-outline-secondary btn-lg px-4 py-3">
                  View Plans
                </button></a>
              </div>
              
              <p className="text-muted small">No credit card required • 10GB free storage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='about' className="py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Why Choose Cloudify?</h2>
            <p className="lead text-muted">Everything you need for seamless file management</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="bg-primary bg-opacity-10 rounded-3 p-3 d-inline-flex mb-3">
                    <Cloud className="text-primary" size={32} />
                  </div>
                  <h3 className="h4 fw-bold mb-3">Unlimited Access</h3>
                  <p className="text-muted">
                    Access your files from any device, anywhere in the world. Desktop, mobile, or web - we've got you covered.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="bg-success bg-opacity-10 rounded-3 p-3 d-inline-flex mb-3">
                    <Shield className="text-success" size={32} />
                  </div>
                  <h3 className="h4 fw-bold mb-3">Bank-Level Security</h3>
                  <p className="text-muted">
                    End-to-end encryption and advanced security protocols keep your data safe from unauthorized access.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4">
                  <div className="bg-warning bg-opacity-10 rounded-3 p-3 d-inline-flex mb-3">
                    <Zap className="text-warning" size={32} />
                  </div>
                  <h3 className="h4 fw-bold mb-3">Lightning Fast</h3>
                  <p className="text-muted">
                    Upload and download at blazing speeds. Our optimized infrastructure ensures zero lag and maximum performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id='features' className="bg-primary text-white py-5 my-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Simple as 1-2-3</h2>
            <p className="lead opacity-75">Get started in minutes</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                <Upload size={40} />
              </div>
              <h3 className="h4 fw-bold mb-3">1. Upload Files</h3>
              <p className="opacity-75">
                Drag and drop or click to upload. Support for all file types and sizes.
              </p>
            </div>
            
            <div className="col-md-4 text-center">
              <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                <FolderOpen size={40} />
              </div>
              <h3 className="h4 fw-bold mb-3">2. Organize</h3>
              <p className="opacity-75">
                Create folders, tag files, and keep everything perfectly organized.
              </p>
            </div>
            
            <div className="col-md-4 text-center">
              <div className="bg-white text-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{width: '80px', height: '80px'}}>
                <Share2 size={40} />
              </div>
              <h3 className="h4 fw-bold mb-3">3. Share</h3>
              <p className="opacity-75">
                Share with anyone via secure links. Control access and permissions easily.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id='plan' className="py-5 my-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Choose Your Plan</h2>
            <p className="lead text-muted">Flexible pricing for individuals and teams</p>
          </div>
          
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3">Free</h3>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">$0</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      10GB Storage
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Basic File Sharing
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Mobile & Web Access
                    </li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-primary border-2 shadow">
                <div className="card-body p-4">
                  <span className="badge bg-primary mb-3">Most Popular</span>
                  <h3 className="h5 fw-bold mb-3">Pro</h3>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">$9</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      1TB Storage
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Advanced Sharing
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Priority Support
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      File Version History
                    </li>
                  </ul>
                  <button className="btn btn-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  <h3 className="h5 fw-bold mb-3">Business</h3>
                  <div className="mb-4">
                    <span className="display-4 fw-bold">$19</span>
                    <span className="text-muted">/month</span>
                  </div>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Unlimited Storage
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Team Collaboration
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      Admin Controls
                    </li>
                    <li className="mb-2">
                      <Check className="text-success me-2" size={20} style={{display: 'inline'}} />
                      24/7 Premium Support
                    </li>
                  </ul>
                  <button className="btn btn-outline-primary w-100">Get Started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-dark text-white py-5 my-5">
        <div className="container py-5 text-center">
          <h2 className="display-5 fw-bold mb-4">Ready to Get Started?</h2>
          <p className="lead mb-4">Join thousands of users who trust Cloudify with their files</p>
          <button className="btn btn-light btn-lg px-5 py-3">
            Start Free Trial
            <ArrowRight className="ms-2" size={20} style={{display: 'inline'}} />
          </button>
        </div>
      </section>

   
    </div>
  );
}