import React from "react";
import { Cloud, Code, Calendar, Cpu, GitBranch } from "lucide-react";

const AboutUs = () => {
  const appInfo = {
    appName: "Virtual Cloud Storage",
    developer: "Ansh singhai , Anuj gupta",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Bootstrap"],
    version: "1.0.0",
    releaseDate: "October 2025",
    description:
      "Virtual Cloud Storage is a secure and reliable web-based platform that allows users to upload, store, and manage their files safely in the cloud. Designed with scalability and performance in mind, it ensures seamless access and sharing of data from anywhere in the world.",
  };

  return (
    <div className="bg-light text-dark py-5 min-vh-100">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <Cloud size={60} className="text-primary mb-3" />
          <h1 className="fw-bold">{appInfo.appName}</h1>
          <p className="text-muted fs-5">
            A modern and secure cloud storage solution built using the MERN stack.
          </p>
        </div>

        {/* Details Card */}
        <div className="card shadow-sm border-0 rounded-4 p-4 mb-4">
          <h4 className="fw-semibold mb-3">Project Overview</h4>
          <p className="text-muted">{appInfo.description}</p>
        </div>

        {/* Technical Information */}
        <div className="card shadow-sm border-0 rounded-4 p-4">
          <h4 className="fw-semibold mb-4">Technical Information</h4>

          <ul className="list-unstyled">
            <li className="mb-3 d-flex align-items-center">
              <Code className="text-primary me-3" size={24} />
              <div>
                <strong>Developer:</strong> {appInfo.developer}
              </div>
            </li>

            <li className="mb-3 d-flex align-items-center">
              <Cpu className="text-success me-3" size={24} />
              <div>
                <strong>Technologies Used:</strong>{" "}
                {appInfo.technologies.join(", ")}
              </div>
            </li>

            <li className="mb-3 d-flex align-items-center">
              <GitBranch className="text-warning me-3" size={24} />
              <div>
                <strong>Version:</strong> {appInfo.version}
              </div>
            </li>

            <li className="mb-3 d-flex align-items-center">
              <Calendar className="text-danger me-3" size={24} />
              <div>
                <strong>Date of Release:</strong> {appInfo.releaseDate}
              </div>
            </li>
          </ul>
        </div>

        {/* Footer */}
        <div className="text-center mt-5 border-top pt-3">
          <p className="text-muted small mb-0">
            © {new Date().getFullYear()} {appInfo.appName} | All Rights Reserved.
          </p>
          <p className="text-muted small">
            Built with ❤️ using the MERN Stack.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
