import { useState, useRef, useEffect } from 'react'
import '../assets/styles/hero.css'

const HeroSection = () => {

    const english = document.querySelector('#english');
    const yoruba = document.querySelector('#yoruba');

    let currentAudio;
      
    const playaudio =  (x) =>{
        currentAudio = x === "english" ? english : yoruba

        if(currentAudio.paused){
          currentAudio.play()
          pausePlay.innerHTML = `<i class="fa-solid fa-pause"></i>`
        }else{
          currentAudio.pause();
          pausePlay.innerHTML = `<i class="fa-solid fa-play"></i>`
        }
      }

      const switchChannel = () => {
        const label = document.querySelector('#label1');
        const label2 = document.querySelector('#label2');
        const channel = document.querySelector('#channel');

        currentAudio.pause()
        currentAudio = (currentAudio === english) ? yoruba : english;

        currentAudio.play()
      
        if (currentAudio === english) {
          channel.textContent = "Yoruba Channel"
          label.classList.add("block")
          label.classList.remove("hidden")
          label2.classList.add("hidden")
          label2.classList.remove("block")
        } else {
          channel.textContent = "English Channel"
          label.classList.add("hidden")
          label2.classList.remove("block")
          label.classList.add("block")
          label2.classList.remove("hidden")

        }
      
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
      </div>
    </div>
  )
}

export default HeroSection