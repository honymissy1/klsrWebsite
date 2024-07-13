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
import AdminLogin from './routes/Admin/AdminLogin.jsx';
import Contact from './routes/Contact.jsx'
import Partnership from './components/Partnership.jsx';
import Programs from './routes/programs.jsx';
import Messages from './routes/Admin/Messages.jsx';
import CharityPage from './routes/Charity.jsx';
import Layout from './routes/Admin/layout.jsx';

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
    path: "charity",
    element: <CharityPage />
  },

  {
    path: "articles/:id",
    element: <Article />
  },

  // {
  //   path: "admin/manage",
  //   element: admin ? (<AdminMember />): (<AdminLogin />)  
  // },
  // {
  //    path: "admin/schedule",
  //    element: admin ? (<AdminSchedule />): (<AdminLogin />) 
  //  },

   {
    path: 'admin/schedule',
    element:  admin ?  (<Layout><AdminSchedule /></Layout>):(<AdminLogin />),
  },

   {
    path: 'admin/manage',
    element:  admin ?  (<Layout><AdminMember /></Layout>):(<AdminLogin />),
  },

  {
    path: 'admin/messages',
    element:  admin ?  (<Layout><Messages /></Layout>):(<AdminLogin />),
  },

  {
    path: 'admin',
    element:  !admin ?  (<Layout><AdminDashboard /></Layout>):(<AdminLogin />),
  },
  {
    path: '/about',
    element: <Layout><About /></Layout>,
  },
  {
    path: '/podcast',
    element: <Layout><Podcast /></Layout>,
  },

  //  {
  //    path: "admin/messages",
  //    element: admin ? (<Messages />): (<AdminLogin />)
  //  },

  // {
  //   path: "admin",
  //   element: admin ? (<AdminDashboard />): (<AdminLogin />),
  // },


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
