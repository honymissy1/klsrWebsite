import { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../assets/styles/hero.css';
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFlip,Autoplay, Pagination, Navigation } from 'swiper/modules';

const HeroSection = () => {

  //   const english = document.querySelector('#english');
  //   const yoruba = document.querySelector('#yoruba');

  // let currentAudio;
    
  // const playaudio =  (x) =>{
  //     currentAudio = x === "english" ? english : yoruba

  //     if(currentAudio.paused){
  //       currentAudio.play()
  //       pausePlay.innerHTML = `<i class="fa-solid fa-pause"></i>`
  //     }else{
  //       currentAudio.pause();
  //       pausePlay.innerHTML = `<i class="fa-solid fa-play"></i>`
  //     }
  //   }

  //   const switchChannel = () => {
  //     const label = document.querySelector('#label1');
  //     const label2 = document.querySelector('#label2');
  //     const channel = document.querySelector('#channel');

  //     currentAudio.pause()
  //     currentAudio = (currentAudio === english) ? yoruba : english;

  //     currentAudio.play()
     
  //     if (currentAudio === english) {
  //       channel.textContent = "Yoruba Channel"
  //       label.classList.add("block")
  //       label.classList.remove("hidden")
  //       label2.classList.add("hidden")
  //       label2.classList.remove("block")
  //     } else {
  //       channel.textContent = "English Channel"
  //       label.classList.add("hidden")
  //       label2.classList.remove("block")
  //       label.classList.add("block")
  //       label2.classList.remove("hidden")

  //     }
    
  //   }


  return (
    <div>
      <Swiper
        effect={'flip'}
        grabCursor={true}
        pagination={true}
        navigation={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[EffectFlip, Autoplay, Navigation]}
        className="w-full !h-[70vh]"
      >
        <SwiperSlide className='Relative'>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            <div className='p-5 items-start justify-center bg-[#06221bbe] absolute top-0 w-full h-full flex flex-col'>
              <h1 className='text-purple-400 text-[30px] mb-5 text-left font-extrabold text-2xl'>KINGDOM LIFESTYLE RADIO</h1>
              <h1 className='md:text-[50px] text-[25px] text-left font-extrabold text-white lg:w-[60%]'>Enriching you with the nutrient from God's word</h1>
            </div>
        
        </SwiperSlide>

        <SwiperSlide className='Relative'>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            <div className='p-5 items-start justify-center bg-[#06221bb5] absolute top-0 w-full h-full flex flex-col'>
              <h1 className='text-purple-400 text-[30px] mb-5 text-left font-extrabold text-2xl'>KINGDOM LIFESTYLE RADIO</h1>
              <h1 className='md:text-[50px] text-[25px] text-left font-extrabold text-white lg:w-[60%]'>Building up your faith and trust in God</h1>
            </div>
        
        </SwiperSlide>

        <SwiperSlide>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            <div className='p-5 items-start justify-center bg-[#06221bc1] absolute top-0 w-full h-full flex flex-col'>
              <h1 className='text-purple-400 text-[30px] mb-5 text-left font-extrabold text-2xl'>KINGDOM LIFESTYLE RADIO</h1>
              <h1 className='md:text-[50px] text-[25px] text-left font-extrabold text-white lg:w-[60%]'>Get engaged with Godly articles </h1>
            </div>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}

export default HeroSection