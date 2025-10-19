import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import Mainapp from './Mainapp.jsx';
import Uplouds from './Uplouds.jsx';
import { Provider } from 'react-redux'

import store from './store/store.jsx'; 
import AboutUs from './Aboutus.jsx';



const route = createBrowserRouter([{path:"/",element:<App/>,
  children:[
    {path:"/",element:<Home/>},
     {path:"/login",element:<Login/>},
     {path:"/signup",element:<Signup/>},
      {path:"/mainapp",element:<Mainapp/>},
      {path:"/uplouds",element:<Uplouds/>},
        {path:"/aboutus",element:<AboutUs/>}
  ]
  
    
    
}])

createRoot(document.getElementById('root')).render(
 <Provider store={store}>
    <RouterProvider router={route}/>
  </Provider>,
)
