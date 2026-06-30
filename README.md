# Virtual File System

A full-stack Virtual File System that enables users to securely upload, organize, view, and download files using cloud storage integration. The application features user authentication, session management, and personal file isolation, providing a seamless and secure cloud-based file management experience.

---

## 🌐 Live Demo

**Website:** https://virtual-file-system-beryl.vercel.app/

---

## ✨ Features

* Secure user registration and login
* JWT-based authentication
* Personal file storage for each user
* Upload files directly to Cloudinary
* View uploaded files
* Download files securely
* Delete uploaded files
* Session management
* Responsive and user-friendly interface
* Cloud-based file storage

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Cloud Storage

* Cloudinary

### Authentication

* JWT
* Bcrypt.js

---

## 📂 Project Structure

```text
virtual-file-system/
├── backend/
└── frontend/
```

---

## 🚀 Installation

### Clone the repository

```bash
git clone https://github.com/your-username/Virtual-file-system.git
cd Virtual-file-system
```

### Install dependencies

Backend

```bash
cd backend
npm install
```

Frontend

```bash
cd frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the `backend` folder.

Example:

```env
DBURL=your_mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_KEY=your_cloudinary_api_key
CLOUD_SECRET=your_cloudinary_api_secret
JWT_SECRET=your_jwt_secret
PORT=3000
```

---

## ▶️ Running the Application

Start the backend:

```bash
cd backend
npm start
```

Start the frontend:

```bash
cd frontend
npm run dev
```

---

## 📌 Key Highlights

* Secure JWT authentication
* Cloudinary integration for cloud file storage
* Upload, view, download, and delete files
* User-specific file management
* Secure session handling
* RESTful API architecture
* MongoDB integration
* Responsive UI
* Full-stack application

---

## 🔮 Future Improvements

* Folder creation and nested directories
* File sharing with other users
* Drag-and-drop uploads
* Search and filter files
* File preview support
* Storage usage dashboard
* Version history for files
* Docker deployment
* CI/CD pipeline

---

## 👨‍💻 Author

**Aditya Bisht**
