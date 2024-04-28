import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import supabase from '../supabaseClient';
import { useParams, useLocation } from 'react-router-dom';
import moment from 'moment';
import Footer from "../components/Footer";

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappShareButton,
} from "react-share";



const Article = () =>{
   const location = useLocation();

   let {id} = useParams();
   const [article, setArticle] = useState();
   const [comments, setComments] = useState();
   const currentUrl = window.location.href; 

   useEffect(() =>{
    const singleArticle = async () =>{
        let { data, error } = await supabase.from('articles').select('*')
        .eq('id', id)
        setArticle(data)
        console.log(data);
    }

    const comment = async () =>{
        let { data, error } = await supabase.from('comment').select('*').eq('article_id', id)
        setComments(data)
    }

    singleArticle();

    comment()
   }, [])

   return(
    <div> 
        <Nav />
            {
                article?.map(ele =>(
                <div key={ele.id}>
                    <div className="bg-[gold] p-2 flex-wrap flex justify-between">
                        <h1 className="ml-5 font-bold">{ele.type}</h1>
                        <h1 className="font-extrabold text-white">By {ele.creator}</h1>
                    </div>

                    <div id="container" className="lg:p-10 p-5 flex min-h-[400px] flex-col md:flex-row">
                        <div className="flex-1 p-2 lg:p-10">
                            <div className={`object-cover w-full pb-10 ${ele.type == "Review" ? 'm-auto md:m-0 w-1/3' : ''}`}>
                                <img className="w-full" src={ele.img_url} alt="what is this" />
                            </div>

                            <div>
                                <h1 className="font-extrabold text-xl">{ele.title}</h1>
                               {ele.type == "Review"? (<p>Author: <span className="font-bold text-green-500">{ele.author}</span></p>): ('')} 
                            </div>
                            <h1 className="mt-5">
                               {ele.content}
                            </h1>
                            <p className="mt-5 text-right">{moment(ele.created_at, "YYYYMMDD").fromNow()}</p>

                            <div id="share" className="my-10">
                                <div>
                                    <h1>Share <span className='text-green-500'>{ele.type}</span> on</h1>
                                    <div className="flex gap-3">
                                        <div className="w-7 h-7">
                                            <FacebookShareButton url={currentUrl} hashtag="klsr" quote="Welcome to KLSR">
                                              <i className="fa-brands text-[#050601] text-2xl fa-facebook mx-1"></i>
                                            </FacebookShareButton>
                                        </div>
                                        <div className="w-7 h-7 ">
                                            <WhatsappShareButton url={currentUrl}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-whatsapp mx-1"></i>

                                            </WhatsappShareButton>
                                        </div>
                                        <div className="w-7 h-7">
                                           <TwitterShareButton url={currentUrl}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-x-twitter mx-1"></i>
                                            </TwitterShareButton>
                                        </div>
                                        <div className="w-7 h-7">
                                          <TelegramShareButton url={currentUrl}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-telegram mx-1"></i>
                                            </TelegramShareButton>
                                        </div>

                                        <LinkedinShareButton url={currentUrl}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-linkedin mx-1"></i>
                                            </LinkedinShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="comment" className="md:max-w-[300px] border flex-1 ">
                            <h1 className="bg-teal-900 text-white p-2">Comments</h1>

                            <div className="border rounded w-full p-2">
                                <textarea className="outline p-2 rounded w-full" placeholder="Leave a comment" name="Area" id="" cols="10" rows="5"></textarea>
                                <button className="p-2 border bg-green-600 rounded w-full">Send</button>
                            </div>

                            {
                                comments?.length < 1 && (
                                    <h1 className='p-5 font-extrabold text-center'>No Comments yet be the first to drop a comment</h1>
                                )
                            } 

                            {
                               comments && comments.map(ele =>(
                                <div className="p-2 flex">
                                    <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                                    <div className="flex-1 ml-3">
                                        <div className="flex flex-wrap justify-between mb-2">
                                            <h1 className="font-bold">{ele.name}</h1>
                                            <p className="text-sm text-orange-700">{moment(ele.created_at, "YYYYMMDD").startOf('hour').fromNow()}</p>
                                        </div>
                                        <p className="text-sm">{ele.content}</p>
                                    </div>
                                </div>

                               ))
                            }
                        </div>
                    </div>
                </div>
                ))
            }
            <Footer />
    </div>
   )
}


export default Article;