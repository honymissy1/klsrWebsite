import './App.css';
import './assets/styles/nav.css'
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Features from './components/Features';
import Tools from './components/Tools';
import Content from './components/Content';
import Footer from './components/Footer';
import ArticleComponent from './components/ArticlesComponent';
import Partnership from './components/Partnership';
import Charity from './components/Charity';
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


ReactGA.initialize("G-4TK58VJWX6"); 
 

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Send pageview with a custom path
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  
  return (
          <div className='overflow-x-hidden'>
            <Nav page="home" /> 

            <HeroSection />
            <Content />
            <ArticleComponent />
            <Features />
            <Charity />
            <Partnership />
 
            <Footer page="home" />
           </div>
  )
}

export default App
