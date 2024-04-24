import Nav from '../components/Nav';
import { Swiper, SwiperSlide } from 'swiper/react';
import supabase from '../supabaseClient';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


import moment from 'moment';


// Supabase
// import { createClient } from '@supabase/supabase-js';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'

// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';

// const supabase = createClient('https://caltnspokiidtzfykyqf.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhbHRuc3Bva2lpZHR6ZnlreXFmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1NjE1NTUsImV4cCI6MjAyOTEzNzU1NX0.N3fu378hR-YBFS7M0RJRz4uEaIGrd09DLCLV5MpD3dU')
const Articles = () => {

    const [articleState, setArticleState] = useState();
    const [articles, setArticles] = useState();
  
    useEffect(() =>{
        console.log(supabase);
        const datas = async () =>{
            let { data, error } = await supabase.from('articles').select('*');
            console.log(data);
            setArticles(data)
        }
        datas()
    }, [])
    
        
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

            <div className='flex '>
                <div className='hidden lg:block !static !top-1 w-[300px] h-[100vh] bg-blue-400'>
                    <h1>Advert Placement</h1>
                    <h1>


                    </h1>
                </div>
                <div className='flex-1 h-[1000px]'>
                    {/* <div className='text-center flex'>
                        <p onClick={() => setArticleState('')}className={`px-3 flex-1  py-1 w-max ${articleState == '' ? 'font-extrabold border-2 shadow shadow-black':''} text-black`}>All</p>
                        <p onClick={() => setArticleState('review')} className={`px-3 flex-1  py-1 bg-green-600 w-max ${articleState == 'review' ? 'font-extrabold border-2 shadow shadow-black':''} text-white`}>Reviews</p>
                        <p onClick={() => setArticleState('devotion')} className={`flex-1 px-3 ${articleState == 'devotion' ? 'font-extrabold border-2 shadow shadow-black':''} py-1 bg-purple-600 w-max  text-white`}>Devotions</p>

                    </div> */}

                    {
                      articles && articles.map((ele, index) =>(
                        <Link to={`/articles/${ele.id}`}>
                            <div key={ele.id} className='p-4 lg:p-10'>
                                <div>
                                    <div className='flex justify-between flex-wrap-reverse'>
                                        <h1 className='font-extrabold text-lg'>{ele.title} {ele.type == 'Book Review' ? (<sup className='p-1 text-xs rounded font-normal bg-orange-300'>{ele.author}</sup>) :('')} </h1>
                                        <h1 className={`${ele.type == 'Devotion' ? "text-green-600" : ele.type == 'Book Review' ? "text-purple-600": "text-green-600"} font-bold text-xs`}>{ele.type}</h1>
                                    </div>
                                    <p className='text-sm text-[#838080] py-3'>{ele.content.substring(0, 200)}</p>
                                </div>
                                <div className='flex text-sm justify-between py-2'>
                                    <p className='font-bold'>By {ele.creator}</p>
                                    <p>{moment(ele.created_at, "YYYYMMDD").startOf('hour').fromNow()}</p>
                                </div>
                                <hr />
                            </div>
                        </Link>

                      ))   
                    }

                </div>
            </div>

{/* 
            <div className='p-0 mt-10'>
                <div role="tablist" className="tabs-sm tabs !w-[100vw] tabs-boxed">
                    <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="All" checked />
                    <div role="tabpanel" className="tab-content flex !w-[100vw] rounded-box p-5">
                    
                            <div className='mb-2 max-w-[400px] relative min-w-[300px] flex-1 p-2 bg-teal-900 text-white rounded'>
                                <div className='w-[70%]'>
                                    <div className='absolute text-black p-1 text-xs font-extrabold rounded right-0 top-0 bg-[gold]'>
                                        <h1>Article</h1>
                                    </div>
                                    <h1 className='font-extrabold'>The word of the Lord</h1>
                                    <p className='text-xs h-[30px]  truncate'>Lorem shhbw ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fuga optio perferendis?</p>
                                    <p className='text-sm'>By Sis Esther Ayoola</p>

                                </div>
                            </div>

                            <div className='mb-2 max-w-[400px] relative min-w-[300px] flex-1 p-2 bg-teal-900 text-white rounded'>
                                <div>
                                    <div className='absolute text-black p-1 text-xs font-extrabold rounded right-0 top-0 bg-[gold]'>
                                        <h1>Article</h1>
                                    </div>
                                    <h1 className='font-extrabold'>The word of the Lord</h1>
                                    <p className='text-xs h-[30px]  truncate'>Lorem shhbw ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fuga optio perferendis?</p>
                                    <p className='text-sm'>By Sis Esther Ayoola</p>

                                </div>
                            </div>

                            <div className='mb-2 max-w-[400px] relative min-w-[300px] flex-1 p-2 bg-teal-900 text-white rounded'>
                                <div className='w-[70%]'>
                                    <div className='absolute text-black p-1 text-xs font-extrabold rounded right-0 top-0 bg-[gold]'>
                                        <h1>Article</h1>
                                    </div>
                                    <h1 className='font-extrabold'>The word of the Lord</h1>
                                    <p className='text-xs h-[30px]  truncate'>Lorem shhbw ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem fuga optio perferendis?</p>
                                    <p className='text-sm'>By Sis Esther Ayoola</p>

                                </div>
                            </div>
               



                    </div>



                    <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="Devotions" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2</div>

                    <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="Reviews" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 3</div>

                    <input type="radio" name="my_tabs" role="tab" className="tab" aria-label="Articles" />
                    <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 4</div>

                </div>

            </div> */}

            {/* <div className='p-3'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide>
                    <div className='shadow'>
                        <h1>To Good to be true</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                             Explicabo quidem expedita commodi tempora nostrum, non, 
                             id quae optio iure nobis dolores.
                        </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            </div> */}
            <Footer />
        </div>
    )
}


export default Articles;