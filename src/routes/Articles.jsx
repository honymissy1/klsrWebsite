import Nav from '../components/Nav';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'

// import required modules
import { Pagination } from 'swiper/modules';

const Articles = () =>{
    return (
        <div>
            <Nav />
            <div className="w-full justify-center text-white flex items-center h-[400px] bg-black">
            <Swiper
                direction={'vertical'}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >

                <SwiperSlide className='text-black relative border border-solid border-black'>
                   <div className='p-3 right-0 absolute z-20'>
                    <h1 className='p-1 text-sm text-white bg-[#d4af37] rounded'>Book Review</h1> 
                   </div>
                    <div className='absolute flex h-full w-full bg-[#072a1ae5] items-center justify-center'>
                       <div className=' z-10 text-white'>
                            <p>John G Lake</p>
                            <h1 className='text-2xl w-[300px] md:text-4xl font-bold'>Speaking in tongues from your heart</h1>
                                
                            <div className='bg-[white] text-black font-extrabold p-2 text-sm mt-4 flex-wrap gap-2 flex justify-between'>
                             <p>Review by Lanre Afolayan</p>
                             <p>6m age</p>
                            </div>

                            <h1 className='text-left mt-2 px-3 text-black font-extrabold text-sm bg-[gold] w-max p-1 rounded-md'>Read More</h1>
                        
                       </div>
                    </div>
                    <img src="/images/features_img.png" className='z-0' alt="" />
                </SwiperSlide>

                <SwiperSlide className='text-black relative border border-solid border-black'>
                   <div className='p-3 right-0 absolute z-20'>
                    <h1 className='p-1 text-sm text-white bg-[#d4af37] rounded'>Book Review</h1> 
                   </div>
                    <div className='absolute flex h-full w-full bg-[#072a1ae5] items-center justify-center'>
                       <div className=' z-10 text-white'>
                            <p>John G Lake</p>
                            <h1 className='text-2xl w-[300px] md:text-4xl font-bold'>Speaking in tongues from your heart</h1>
                                
                            <div className='bg-[white] text-black font-extrabold p-2 text-sm mt-4 flex-wrap gap-2 flex justify-between'>
                             <p>Review by Lanre Afolayan</p>
                             <p>6m age</p>
                            </div>

                            <h1 className='text-left mt-2 px-3 text-black font-extrabold text-sm bg-[gold] w-max p-1 rounded-md'>Read More</h1>
                        
                       </div>
                    </div>
                    <img src="/images/designs/health.png" className='z-0' alt="" />
                </SwiperSlide>
              
            </Swiper>
            </div>
            <h1>Articles</h1>
        </div>
    )
}


export default Articles;