import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {  createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './routes/About.jsx';
import Podcast from './routes/Podcast.jsx';
import Articles from './routes/Articles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },

  {
    path: "about",
    element: <About />
  },

  {
    path: "podcast",
    element: <Podcast />
  },

  {
    path: "articles",
    element: <Articles />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
