import React from "react";
import CloudifyIcon from "./Cloudifyicon";
import {  NavLink, useNavigate } from "react-router-dom";
import { logout } from "./store/authslice";
import { FaRegCircleUser } from "react-icons/fa6";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

export default function Header() {
  const dispatch = useDispatch()
  const handleswan=()=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You really wants to logout",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes,Logout!"
}).then((result) => {
  if (result.isConfirmed) {
     localStorage.removeItem('token');
  localStorage.removeItem('user');
  
    dispatch(logout());
    Swal.fire({
      
      text: "Logout successfully",
      icon: "success",
      
    });
    navigate("/")
  }
});
  }
   const {isLoggedin,user}= useSelector((state)=>state.auth)

  const navigate = useNavigate()
  const handlelogout=()=>{
     
        handleswan()
  }
  return (
    <header className="p-3  text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
                             role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap" />
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href=""><CloudifyIcon/></a>
            </li>
            <li>
              <NavLink to="/" className="nav-link px-2 text-black">
                Home
              </NavLink>
            </li>
           

<li>
  <Link
    to="plan"
    smooth={true}
    duration={500}
    offset={-80}
    className="nav-link pointor px-2 text-black "
  >
    Pricing
  </Link>
</li>

            
<li>
  <Link
    to="features"
    smooth={true}
    duration={500}
    offset={-80}
    className="nav-link pointor px-2 text-black"
  >
    Features
  </Link>
</li>
           
            <li>
              <NavLink to="/AboutUs" className="nav-link px-2 text-black">
                About
              </NavLink>
            </li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div className="text-end">
            {isLoggedin?(<>
            <div className="d-flex justify-content-center align-items-center gap-2">
<img src="logo.jpeg" alt="mdo" width="32" height="32" class="rounded-circle"/>
            <span className="text-black
      ">{user?.name}</span>

            <button onClick={handlelogout} type="button" className="btn btn-danger ">Logout</button>
            </div>

            </>):(<>    <NavLink to="/login"> <button type="button" className="btn btn-primary m-2">Login</button></NavLink> 

  <NavLink to="/signup"><button type="button" className="btn btn-success">Signup</button></NavLink></>)}
      

          </div>
        </div>
      </div>
    </header>
  );
}
