import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const ArticleComponent = () =>{

    useEffect(() =>{
      register()


    }, [])
    return (
      <div>
        <h1 className='pt-10 text-center font-extrabold text-4xl text-[#ad9c3b]'>Programs</h1>
        <div className='p-5 min-h-[50vh] flex items-center'>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1}
       
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          650: {
            slidesPerView: 2
          },

          800: {
            slidesPerView: 3
          }
        }}
        navigation={true}
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='!w-[300px] md:!w-[600px]'>
         <img className='' src="/images/designs/psalm61.png" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]'>
         <img className="w-full" src="/images/designs/health.png" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]'>
         <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
        </SwiperSlide>
       
        <SwiperSlide className='!w-[300px] md:!w-[600px]'>
         <img className="w-full" src="/images/designs/health.png" alt="Burger" />
        </SwiperSlide>
      </Swiper>

                    {/* <div className='w-[300px] h-auto'>
                    </div> */}

        </div>

      </div>
    )
}


export default ArticleComponent;