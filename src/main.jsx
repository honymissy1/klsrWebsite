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
import AdminPost from './routes/Admin/AdminPost.jsx';

import AdminMember from './routes/Admin/AdminMember.jsx';
import AdminSchedule from './routes/Admin/AdminSchedule.jsx';
import Settings from './routes/Admin/Settings.jsx';
import AdminLogin from './routes/Admin/AdminLogin.jsx';
import Contact from './routes/Contact.jsx'


const loggedIn = true;

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
    path: "admin",
    element: loggedIn ? (<AdminDashboard />): (<AdminLogin />),

    children: [
      {
        path: "",
        element: <AdminPost />
      },

      {
        path: "manage",
        element: <AdminMember />
      },

     {
        path: "schedule",
        element: <AdminSchedule />
      },

    ]
  },
  
  {
    path: "settings",
    element: <Settings />
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
