import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem('token');
const user = localStorage.getItem('user');
let isLoggedIn;
if (token) {
  isLoggedIn = true;  // Token exists = logged in
} else {
  isLoggedIn = false; // No token = not logged in
}

// Get user data
let userData;
if (user) {
  userData = JSON.parse(user);  // Convert string to object
} else {
  userData = null;              // No user data
}

const initialState = {
  isLoggedin: isLoggedIn,
  user: userData,
};
const authslice = createSlice({
  name:'auth',
  initialState,
  reducers:{
      login: (state, action) => {
      state.isLoggedin = true;
       state.user = action.payload; 
      
  },
   logout: (state) => {
      state.isLoggedin = false;
      state.user = null;
    },
  },
})
export const { login, logout } = authslice.actions;
export default authslice