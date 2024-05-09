import { useState, useRef, useEffect } from 'react'
import '../assets/styles/hero.css'

const HeroSection = () => {
  const [english, setEnglish] = useState(true);

  const playEnglish = () => {
    const english = document.querySelector('#english');
    const yoruba = document.querySelector('#yoruba');

    if (yoruba.play) {
      yoruba.pause()
    }
    setEnglish(true)
    english.play()
  }

  const playYoruba = () => {
    const english = document.querySelector('#english');
    const yoruba = document.querySelector('#yoruba');

    if (english.play) {
      english.pause()
    }
    setEnglish(false)
    yoruba.play()
  }


  return (
    <div className="hero-section justify-center text-center flex-row flex-wrap relative min-h-[70vh] h-auto lg:h-[80vh] p-5 lg:p-[50px]">
      <div style={{ display: 'none' }}>
        <audio id="english" controls>
          <source src="https://s3.voscast.com:9425/stream" type="audio/mpeg" />
          Your browser does not support the audio element
        </audio>

        <audio id="yoruba" controls>
          <source src="https://s3.voscast.com:10745/stream" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>

      </div>

      <img className='w-[300px] lg:w-[400px] md:absolute md:left-0 md:bottom-0 m-auto' src="/images/hero2.png" alt="" />


      <div id="content" className='md:w-[50%] md:ml-[50px] lg:ml-0  w-[400px] md text-center md:text-left m-auto md:m-0'>
        <h1 className='text-5xl font-bold font-serif'>KINGDOM LIFESTYLE RADIO</h1>
        <p className='font-bold rounded-md !py-10'> 24/7 gospel, inspiration, edification and transformation, stay tuned and be blessed</p>
        {/* <div className='flex lg:!mx-0 flex-wrap'>
          <button className=' p-2 flex-1  !text-black !bg-[gold] text-sm  font-extrabold' onClick={playEnglish} style={{ outline: english ? '2px solid white' : '' }}>English Channel &nbsp;</button>
          <button className=' p-2 flex-1  font-extrabold !bg-[gold] text-sm   !text-black' onClick={playYoruba} style={{ outline: !english ? '2px solid white' : '' }}>Yoruba Channel &nbsp;</button>
        </div> */}
      </div>
    </div>
  )
}

export default HeroSection