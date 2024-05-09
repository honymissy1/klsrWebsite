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
 

const App = () => {
  return (
          <div className='overflow-x-hidden'>
            <Nav /> 

            <HeroSection />
            <Content />
            <ArticleComponent />
            <Features />
            <Charity />
            <Partnership />
            {/* <Tools /> */}

            <Footer />
           </div>
  )
}

export default App
