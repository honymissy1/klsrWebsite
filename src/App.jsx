import './App.css';
import './assets/styles/nav.css'
import HeroSection from './components/HeroSection';
import Nav from './components/Nav';
import Features from './components/Features';
import Tools from './components/Tools';


const App = () => {
  return (
          <>
            <Nav /> 

            <HeroSection />
            <Features />
            <Tools />
          </>
  )
}

export default App
