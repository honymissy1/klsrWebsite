import { useState, useRef, useEffect } from 'react'
import '../assets/styles/hero.css'

const HeroSection = () =>{
  const [english, setEnglish] = useState(true);

  // useEffect(() =>{

  //   const playAudio = () =>{
  //     const audio = document.querySelector('#english');
  //     const yoruba = document.querySelector('#yoruba');

  //     if(yoruba.play){
  //       yoruba.pause();
  //     }
      
  //     audio.play()
  //   }

  //   playAudio();
  // },[]);

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
    <div className="hero-section h-[70vh] lg:h-[80vh] p-5 lg:p-[50px]">
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

    

      <div id="content" className='w-[100%] md:w-[40%] text-center md:text-left m-auto md:m-0'>
        <h1>Kingdom Lifestyle Radio</h1>
        <p>Harmony in Yoruba and English: Uniting Faiths, Sharing Grace</p>
       <div className='!mx-auto flex lg:!mx-0 flex-wrap'>
          <button className='w-max !p-3 flex-1 min-w-[150px]' onClick={playEnglish} style={{outline: english ? '2px solid white': ''}}>English Channel &nbsp;<i className="fa-solid fa-circle-play"></i></button>
          <button className='w-max !p-3 flex-1 min-w-[150px]' onClick={playYoruba} style={{outline: !english ? '2px solid white': ''}}>Yoruba Channel &nbsp;<i className="fa-solid fa-circle-play"></i></button>
       </div>
      </div>
    </div>
  )
}

export default HeroSection