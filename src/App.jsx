import './App.css';
import './assets/styles/nav.css'
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Features from './components/Features';
import Tools from './components/Tools';
import Content from './components/Content';


const App = () => {
  return (
          <>
            <Nav /> 

            <HeroSection />
            <Content />
            <Features />
            <Tools />
          </>
  )
}

export default App
