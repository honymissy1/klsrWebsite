import { useState, useRef, useEffect } from 'react'
import '../assets/styles/hero.css'

const HeroSection = () =>{
  const [english, setEnglish] = useState(true);
 

  const playEnglish = () => {
      const english = document.querySelector('#english');
      const yoruba = document.querySelector('#yoruba');

      if(yoruba.play){
        yoruba.pause()
      }
      setEnglish(true)
      english.play()
  }

  const playYoruba = () => {
      const english = document.querySelector('#english');
      const yoruba = document.querySelector('#yoruba');

      if(english.play){
        english.pause()
      }
      setEnglish(false)
      yoruba.play()
  }


  return(
    <div className="hero-section relative h-[70vh] lg:h-[80vh] p-5 lg:p-[50px]">
      <div style={{display: 'none'}}>
        <audio id="english" controls>
          <source src="https://s3.voscast.com:9425/stream" type="audio/mpeg" />
          Your browser does not support the audio element
        </audio>

        <audio id="yoruba" controls>
          <source src="https://s3.voscast.com:10745/stream" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

      </div>

      <img className='hidden md:block absolute w-[450px] bottom-0 right-0' src="/images/hero2.png" alt="" />
    

      <div id="content" className='w-[100%] md:w-[40%] text-center md:text-left m-auto md:m-0'>
        <h1>KINGDOM LIFESTYLE RADIO</h1>
        <p className='!text-white'>Here you will get inspiration, edification and transformation. Stay tuned and be blessed!</p>
       <div className='!mx-auto flex lg:!mx-0 flex-wrap'>
          <button className='w-max p-2 !text-black !bg-[gold]  font-extrabold flex-1 min-w-[150px]' onClick={playEnglish} style={{outline: english ? '2px solid white': ''}}>English Channel &nbsp;</button>
          <button className='w-max p-2 font-extrabold !bg-[gold] flex-1 min-w-[150px] !text-black' onClick={playYoruba} style={{outline: !english ? '2px solid white': ''}}>Yoruba Channel &nbsp;</button>
       </div>
      </div>
    </div>
  )
}

export default HeroSection