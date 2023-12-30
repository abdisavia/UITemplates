import React from 'react'
import ReactDOM from 'react-dom/client'
import "./index.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './pages/login.jsx'
import RegisterPage from './pages/register.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Login/>
  },{
    path:"/register",
    element:<RegisterPage/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
