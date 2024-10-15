import Nav from '../components/Nav';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import moment from 'moment';
import axios from 'axios';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
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
    const [authors, setAuthors] = useState(); 
   const [categories, setCategories] = useState();

    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(10); // Number of items per page
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setLoading(true)
        window.scrollTo(0, 0);

        const timestamp = new Date().getTime();
        const start = (page - 1) * pageSize;
        const end = start + pageSize - 1;

        const datas = async () => {

            try{

                const wordpressData = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/posts?page=${page}&?timestamp=${timestamp}`);
                const result = await wordpressData.data;
                const total = await wordpressData.headers.get('X-WP-Total')
                            setTotalPages(Math.ceil(total / pageSize));
                            const postsWithAuthors = await Promise.all(result?.map(async (post) => {
                
                                axios.get('https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/categories')
                                .then(response => response?.data)
                                .then(data => {
                                  // Create a mapping of category ID to name
                                  const categoryMap = {};
                                  data.forEach(category => {
                                    categoryMap[category.id] = category.name;
                                  });
                                  setCategories(categoryMap);
                                });
                                
                
                                if (post.featured_media) {
                                  const mediaResponse = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/media/${post.featured_media}`);
                                  const mediaData = await mediaResponse.data;
                                  post.featured_image_url = mediaData.source_url;
                                } else {
                                  post.featured_image_url = null;
                                }
                                
                                return post;
                            }));
                
                
                
                            
                            setArticles(postsWithAuthors);
                            console.log(postsWithAuthors);
                            setLoading(false);
     
            }catch(err){
                console.log(err);
            }
            
            
        }
        datas()
    }, [page, pageSize])

    const handleNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1)
        }
    };

    const handlePreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const getCategoryNames = (categoryIds) => {
        return categoryIds.map(id => categories[id] || 'Loading...');
     };

    return (
        <div>
            <Nav />
            {
                    loading && (
                        

                        
                        <div className='p-10'>

                            <div>  
                            <Skeleton height={100} />
                            <Skeleton />
                            <Skeleton count={5} /> 
                            </div>

                            <div className='my-10'>  
                            <Skeleton height={100} />
                            <Skeleton />
                            <Skeleton count={5} /> 
                            </div>

                            <div>  
                            <Skeleton height={100} />
                            <Skeleton />
                            <Skeleton count={5} /> 
                            </div>
                        </div>
                        )
                }
            {
                articles ? (
                    <>
                        <div>



                             <div className='flex '>
                                <div className='hidden lg:block lg:!static lg:!top-0 w-[300px] h-[auto] bg-blue-400'>
                                    <h1 className='text-2xl font-extrabold'></h1>

                                </div>
                                <div className='flex-1 min-h-[700px]'>
                                    {
                                        loading == false && articles && articles.map((ele, index) => (
                                            <Link to={`https://kingdomlifestyleadmin.com.ng/${ele.id}`}>
                                                <div key={ele.id} className='p-4 lg:p-5 gap-3 w-[100%] flex flex-col md:flex-row'>
                                                    {/* <div className='w-full h-[200px] md:w-[100px] md:h-max m-auto overflow-hidden'>
        
                                                      {
                                                        ele.featured_image_url ? (<img className='w-full h-full object-cover' src={ele.img_url} alt="" />): ( <img src="/logo.png" className='w-full h-full object-cover' alt="" />)
                                                      }
                                                    </div> */}
                                                    <div className='flex-1 max-w-[900px] m-auto'>
                                                        <div className='flex gap-10 flex-wrap-reverse justify-between'>
                                                            <div className='flex flex-1 flex-col flex-wrap'>
                                                                <div className='flex w-full justify-between items-center'>
                                                                    <div className='flex gap-2 mb-1 items-center text-green-950'>
                                                                         <i class="fa-solid fa-list"></i>
                                                                        {                                                                    
                                                                        getCategoryNames(ele.categories).map(ele =>(
                                                                            <div className='bg-green-100 text-green-900 rounded-md p-1 text-xs'>{ele}</div>
                                                                        ))
                                                                        
                                                                    }</div>
                                                                </div>
                                                                 <h1 dangerouslySetInnerHTML={{ __html: ele.title.rendered}} className='text-md w-[300px] md:text-md font-bold'></h1>
                                                                 <p dangerouslySetInnerHTML={{ __html: ele.excerpt.rendered}} className='text-sm mt-1'></p>
                                                            </div>
                                                            <div className='overflow-hidden w-full h-[100%] md:visible md:w-[200px] md:border'>
                                                                {
                                                                    ele.featured_image_url ? (<img src={ele.featured_image_url} className='w-full' alt="" />):(<img src="/logo.png" className='w-full h-full object-cover' alt="" />)
                                                                }
                                                               
                                                            </div>
                                                        </div>
                                                        <div className='flex text-sm justify-between py-2'>
                                                            <p className='font-bold'>
                                                                <RelativeTime date={ele.date} />
                                                            </p>
                                                        </div>
                                                        <hr />
                                                    </div>

                                                </div>
                                            </Link>

                                        ))
                                    }

                                 
                                    <div className='p-10 flex justify-between items-center'>
                                        <button className={`${page === 1 ? 'bg-purple-100 text-white':"bg-purple-400"} p-2  rounded-md`} onClick={handlePreviousPage} disabled={page === 1}>
                                            <i className='fa fa-arrow-left'></i> Previous
                                        </button>
                                        <span> Page {page} of {totalPages} </span>
                                        <button className={`${page === totalPages ? 'bg-purple-100 text-white':"bg-purple-400"} p-2  rounded-md`} onClick={handleNextPage}>
                                            Next  <i className='fa fa-arrow-right'></i>
                                        </button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </>
                ) : (
                    <div className='min-h-[500px]'>
                        <div className='w-full h-[300px] flex justify-center flex-col items-center'>
                        <div className='p-10'>
                          <div>  
                            <Skeleton height={100} />
                            <Skeleton />
                            <Skeleton count={5} /> 
                            </div>

                            <div>  
                            <Skeleton height={100} />
                            <Skeleton />
                            <Skeleton count={5} /> 
                            </div>

                            <div>  
                            <Skeleton height={100} />
                            <Skeleton />
                            <Skeleton count={5} /> 
                            </div>
                        </div>
                        </div>
                    </div>
                )
            }



            <Footer />
        </div>
    )
}


export default Articles;




