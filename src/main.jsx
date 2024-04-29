import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routes/About.jsx';
import Podcast from './routes/Podcast.jsx';
import Articles from './routes/Articles.jsx';
import Article from './routes/Article.jsx';
import AdminDashboard from './routes/Admin/AdminDashboard.jsx';

import AdminMember from './routes/Admin/AdminMember.jsx';
import AdminSchedule from './routes/Admin/AdminSchedule.jsx';
import Events from './routes/Admin/Events.jsx';
import AdminLogin from './routes/Admin/AdminLogin.jsx';
import Contact from './routes/Contact.jsx'
import Partnership from './components/Partnership.jsx';
import Programs from './routes/programs.jsx';


let admin = sessionStorage.getItem('klsr')

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "about",
    element:  <About />
  },

  {
    path: "podcast",
    element: <Podcast />
  },

  {
    path: "articles/:id",
    element: <Article />
  },

  {
    path: "admin/manage",
    element: admin ? (<AdminMember />): (<AdminLogin />)  
  },
  {
     path: "admin/schedule",
     element: admin ? (<AdminSchedule />): (<AdminLogin />) 
   },

   {
     path: "admin/events",
     element: <Events />
   },

  {
    path: "admin",
    element: admin ? (<AdminDashboard />): (<AdminLogin />),
  },


  {
    path: "/partnership",
    element: <Partnership />
  },


  {
    path: "/programs",
    element: <Programs />
  },
  
  

  {
    path: "articles",
    element: <Articles />
  },

  {
    path: "contact",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
