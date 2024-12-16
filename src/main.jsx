import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Root/Home.jsx';
import Login from './Components/Firebase/Login.jsx';
import Register from './Components/Firebase/Register.jsx';
import Authprovider from './Components/Root/Authprovider.jsx';
import JobDetail from './Components/Pages/JobDetail.jsx';
import PrivateRoute from './Components/Firebase/PrivateRoute.jsx';
import Jobapply from './Components/Pages/Jobapply.jsx';
import Myapplications from './Components/Pages/Myapplications.jsx';
import Addjob from './Components/Pages/Addjob.jsx';
import MypostedJobs from './Components/Pages/MypostedJobs.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/jobapply/:id',
        element: <PrivateRoute><Jobapply></Jobapply></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/job/:id',
        element: <PrivateRoute><JobDetail></JobDetail></PrivateRoute>,
        loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/myapplication',
        element: <PrivateRoute><Myapplications></Myapplications></PrivateRoute>,
        
      },
      {
        path: '/mypostedjobs',
        element: <PrivateRoute><MypostedJobs></MypostedJobs></PrivateRoute>,
        
      },
      {
        path: '/addjob',
        element: <PrivateRoute><Addjob></Addjob></PrivateRoute>,
        // loader:({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </StrictMode>,
)
