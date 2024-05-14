import { useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

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
        className="mySwiper "
      >
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className="" src="/images/designs/img1.jpg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className="w-full" src="/images/designs/img2.jpg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className="w-full" src="/images/designs/img3.jpg" alt="Burger" />
        </SwiperSlide>
      
        <SwiperSlide className='!w-[300px] md:!w-[600px] self-center'>
         <img className='' src="/images/designs/img.jpeg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px]   self-center'>
         <img className='' src="/images/designs/img1.jpeg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px]  self-center'>
         <img className='' src="/images/designs/img2.jpeg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px]  self-center'>
         <img className='' src="/images/designs/img3.jpeg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img4.jpg" alt="Burger" />
        </SwiperSlide>
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img5.jpg" alt="Burger" />
        </SwiperSlide>

        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img6.jpg" alt="Burger" />
        </SwiperSlide>
      
        <SwiperSlide className='!w-[300px] md:!w-[600px]  self-center'>
         <img className='' src="/images/designs/img7.jpg" alt="Burger" />
        </SwiperSlide>
      </Swiper>

        </div>

        <Link to={`/programs`}><h1 className='bg-[gold] w-max p-2 rounded-lg my-5 font-extrabold m-auto'>More Programs</h1></Link>

      </div>
    )
}


export default ArticleComponent;