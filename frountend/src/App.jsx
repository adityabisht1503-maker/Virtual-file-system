import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Header from './Header'
import Home from './Home'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
    <Header/>
      <ToastContainer/>

    <Outlet/>
     

    </>
  )
}

export default App
