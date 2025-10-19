import { useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'


const Signup = () => {

  
  const swan = ()=>{
    Swal.fire({
  title: "Sign up Successfull",
  icon: "success",
  draggable: true
});
  }
   const navigate = useNavigate();
const [form, setform] = useState({
  name: "",
  email: "",
  password: ""
})
const {name,email,password}=form;

const onChange=(e)=>{
  const{id,value}=e.target;
  setform({...form,[id]:value})
}

const handleSubmit=async(e)=>{
  e.preventDefault();
  
  axios.post(`http://localhost:3000/api/signup`,form).then((res)=>{
    if(res.data.status===1){
      swan()
     
      navigate("/login");
    }else{
      alert(res.data.message);
    }
})
}

  

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Create Account</h3>
        <form onSubmit={handleSubmit}  autoComplete="on">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              placeholder="Enter your name"
              required
               value={name}
               onChange={onChange}
              autoComplete="name"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
               value={email}
               onChange={onChange}
              autoComplete="email"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
              required
               value={password}
               onChange={onChange}
              autoComplete="new-password"
            />
          </div>

          <button type="submit" className="btn btn-success w-100">
            Sign Up
          </button>

          <div className="text-center mt-3">
            <small>
              Already have an account?{" "}
              <Link to="/login" className="text-decoration-none">
                Login
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;