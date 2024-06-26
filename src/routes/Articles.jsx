import Nav from '../components/Nav';
import { Swiper, SwiperSlide } from 'swiper/react';
import supabase from '../supabaseClient';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import moment from 'moment';

import 'swiper/css';
import 'swiper/css/pagination';
import '../App.css'

import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import RelativeTime from '../components/RelativeTime';

const Articles = () => {
    const [loading, setLoading] = useState(false)
    const [articleState, setArticleState] = useState();
    const [articles, setArticles] = useState();
  
    useEffect(() =>{
        setLoading(true)
        
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
            {
                articles ? (
                    <>
                        <div>
                            <div className="w-full relative justify-center text-white flex items-center h-[400px] bg-black">
                                <Swiper
                                    direction={'vertical'}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper"
                                >
            
                                    {
                                    articles &&  articles?.slice(0, 5).map(ele => (
                                            <SwiperSlide className='text-black relative border border-solid border-black'>
                                                <div className='p-3 right-0 absolute z-20'>
                                                    <h1 className='p-1 text-sm text-white bg-[#d4af37] rounded'>{ele.type}</h1>
                                                </div>
                                                <div className='absolute flex h-full w-full bg-[#072a1ae5] items-center justify-center'>
                                                    <div className=' z-10 text-white'>
                                                    {ele.type == 'Review'? (<p className='text-orange-300'>{ele.author}</p>): ''} 
                                                        <h1 className='text-2xl w-[300px] md:text-4xl font-bold'>{ele.title}</h1>
            
                                                        <div className='bg-[white] text-black font-extrabold p-2 text-sm mt-4 flex-wrap gap-2 flex justify-between'>
                                                            <p>{ele.type === 'Review' ? (<>Book review</>): ''} By {ele.creator}</p>
                                                            <p><RelativeTime date={ele.created_at} /></p>
                                                        </div>
            
                                                    <Link to={`/articles/${ele.id}`}><h1 className='text-left m-auto mt-10 px-3 text-black font-extrabold text-sm bg-[gold] w-max p-1 rounded-md'>Read More</h1></Link> 
            
                                                    </div>
                                                </div>
                                                <img src={ele.img_url} className='z-0' alt="" />
                                            </SwiperSlide>
            
                                        ))
                                    }
                                </Swiper>
                            </div>
            
                    
                            <div className='flex '>
                                <div className='hidden lg:block lg:!static lg:!top-0 w-[300px] h-[auto] bg-blue-400'>
                                    <h1 className='text-2xl font-extrabold'></h1>
 
                                </div>
                                <div className='flex-1 min-h-[700px]'>            
                                    {
                                    loading == false && articles && articles.map((ele, index) =>(
                                        <Link to={`/articles/${ele.id}`}>
                                            <div key={ele.id} className='p-4 lg:p-5'>
                                                <div>
                                                    <div className='flex justify-between flex-wrap-reverse'>
                                                        <h1 className='font-extrabold text-lg'>{ele.title} {ele.type == 'Review' ? '- ' +ele.author :('')}</h1>
                                                        <div className='flex w-full justify-between items-center'>
                                                            <h1 className={`${ele.type == 'Devotion' ? "text-green-600" : ele.type == 'Book Review' ? "text-purple-600": "text-green-600"} font-bold text-xs`}>{ele.type}</h1>
                                                            <p> <span className='bg-green-800 text-xs font-normal text-white p-1 rounded-lg'>{ele.category}</span></p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='flex text-sm justify-between py-2'>
                                                    <p className='font-bold text-[#777]'>By {ele.creator}</p>
                                                    <p className='font-bold'>
                                                     <RelativeTime date={ele.created_at} />
                                                    </p>
                                                </div>
                                                <hr />
                                            </div>
                                        </Link>
            
                                    ))   
                                    }
            
                                </div>
                            </div>
            
                        </div>
                    </>
                ):(
                    <div className='min-h-[500px] dark:bg-white'>
                        <div className='w-full h-[300px] flex justify-center flex-col items-center'>
                        <img src="/images/loading.svg" alt="" />
                        <h1 className='font-bold text-xl'>Loading Articles...</h1>
                        </div>
                    </div>
                )
            }



            <Footer />
        </div>
    )
}


export default Articles;