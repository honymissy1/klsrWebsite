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
        <div className='p-10'>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
         <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide>
         <img className="w-full" src="/images/designs/psalm61.png" alt="Burger" />
        </SwiperSlide>
       

      </Swiper>

                    {/* <div className='w-[300px] h-auto'>
                    </div> */}

        </div>
    )
}


export default ArticleComponent;