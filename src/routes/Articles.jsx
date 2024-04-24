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
    const [loading, setLoading] = useState(false)
    const [articleState, setArticleState] = useState();
    const [articles, setArticles] = useState();
  
    useEffect(() =>{
        setLoading(false)
        
        const datas = async () =>{
            let { data, error } = await supabase.from('articles').select('*');
            setArticles(data);
            if(data){
                setLoading(false)
            }
        }
        datas()
    }, [])
    
        
    return (
        <div>
            <Nav />
            <div className="w-full relative justify-center text-white flex items-center h-[400px] bg-black">
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

            {
                articles && (
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
                                loading && (
                                    <div className='w-full h-[300px] flex justify-center items-center'>
                                       <img src="/images/loading.svg" alt="" />

                                    </div>
                                )
                            }

                            {
                            loading == false && articles && articles.map((ele, index) =>(
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
                )
            }


            <Footer />
        </div>
    )
}


export default Articles;