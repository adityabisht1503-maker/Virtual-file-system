import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import { login } from "./store/authslice";
const Login = () => {
  const dispatch = useDispatch()
  const showCustomUserToast = (userName) => {
 toast.success(
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  }}>
    {/* Success Icon with Background */}
    <div style={{
      backgroundColor: '#10b981',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }}>
      <svg 
        width="20" 
        height="20" 
        viewBox="0 0 20 20" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
          fill="white"
        />
      </svg>
    </div>
    
    {/* Content */}
    <div style={{ flex: 1 }}>
      <div style={{ 
        fontWeight: '600', 
        fontSize: '15px',
        marginBottom: '2px',
        letterSpacing: '-0.01em'
      }}>
        Welcome  {userName}!
      </div>
      <div style={{ 
        fontSize: '13px',
        opacity: 0.7,
        lineHeight: '1.4'
      }}>
        You're all set to continue
      </div>
    </div>
  </div>,
  {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    closeButton: true,
    
    style: {
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      color: '#ffffff',
      border: '1px solid rgba(148, 163, 184, 0.1)',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
      borderRadius: '12px',
      padding: '16px',
      minWidth: '380px',
      backdropFilter: 'blur(10px)',
    },
    
    // Progress bar styling
    progressStyle: {
      background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
      height: '3px',
    },
    
    // Icon styling
    icon: false, // We're using custom icon
  }
);
};


const [form, setform] = useState({
   
    email:"",
    password:"",
  })
     const {  email, password } = form;

     const changeinput = (e)=>{
           const{id,value}=e.target
           setform((prev)=>({
            ...prev,
            [id]:value,

           }))
     }
  const navigate = useNavigate();

const handlesubmit = async(e)=>{
     e.preventDefault();

     axios.post(`http://localhost:3000/api/login`,form).then((res)=>{
        if(res.data.status===1){
           localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
         
          // You can store the token in localStorage or context here
          dispatch(login(res.data.user));
        showCustomUserToast(res.data.user.name); 
          navigate("/Mainapp");
       }else{
          toast.error(res.data.message);
        }
})
}
  
return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handlesubmit} autoComplete="on">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
               name="email"
    autoComplete="username"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
               value={email}
                onChange={changeinput}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
    autoComplete="current-password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
                value={password}
                onChange={changeinput}
            />
          </div>

          <div className="d-grid mb-3">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>

          <div className="text-center">
            <small>
              Don't have an account?{" "}
              <a href="/signup" className="text-decoration-none">
                Sign Up
              </a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;