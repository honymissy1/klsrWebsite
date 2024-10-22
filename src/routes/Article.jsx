import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import supabase from '../supabaseClient';
import { useParams, useLocation } from 'react-router-dom';
import Footer from "../components/Footer";
import { Helmet } from 'react-helmet';
import axios from 'axios';
import parse from 'html-react-parser';
import RelativeTime from '../components/RelativeTime';
import ReactGA from "react-ga4";

ReactGA.initialize("G-4TK58VJWX6"); 
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

import '../assets/styles/wordpress.css';
import {Modal, Result} from "antd"


const Article = () =>{

   const location = useLocation();
   const currentUrl = 'https://kingdomlifestyleadmin.com.ng'
   let {id} = useParams();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [article, setArticle] = useState();
   const [comments, setComments] = useState();
   const [commentText, setCommentText] = useState();
   const [loading, setLoading] = useState(false)
   const [content, setContent] = useState();

   const [featuredImage, setFeaturedImage] = useState('');

   const [user, setUser] = useState();
   const userCredentials = JSON.parse(localStorage.getItem('user'))

   const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    localStorage.setItem('user', JSON.stringify(user))
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };




   const mapping = {
    "p": "leading-relaxed text-md mb-5",
    "blockquote": "p-10 m-auto w-[fit-content] my-5 rounded-xl text-center text-[1.5em] bg-white italic",
    "h2": "title-font font-semibold mb-6 text-3xl",
    "h3": "title-font font-semibold mb-6 text-2xl",
    "h4": "title-font font-semibold mb-6 text-2xl",
    "h5": "title-font font-semibold mb-6 text-xl",
    "em": "font-extrabold text-lg leading-relaxed italic",
    "ul": "mb-6",
    "li": "mb-6 ml-5 text-lg",
    "a": "underline text-[grey]"
  };


  const options = {
    replace: (node) => {
      const className = mapping[node.name]
      if (className) {
        node.attribs.className = className;
        return node
      }
    },
  };

   
   useEffect(() =>{
    window.scrollTo(0, 0);

    const singleArticle = async () =>{
        const wordpressData = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/posts/${id}`);
        const result = await wordpressData.data;

        if (result.featured_media) {
            const imageResponse = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/media/${result.featured_media}`);
            const imageData = await imageResponse.data;
            setFeaturedImage(imageData.source_url); // Set the image URL
            console.log(imageData.source_url);
          }
  
          setArticle(result);
          console.log(result);
          setLoading(false);
        
        // setArticle(postsWithAuthors);
        // console.log(postsWithAuthors);
        setLoading(false);

    }

    const comment = async () =>{
       let result = await axios.get(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/comments?post=${id}`)
       const data =  await result.data;
       setComments(data);

       console.log(data);
    }

    singleArticle();
    
    comment()
}, [])

    const handleComment = async () =>{
        setLoading(true);
        let response = await axios.post(`https://kingdomlifestyleadmin.com.ng/wp-json/wp/v2/comments`, {
            post: id,
            author_name: userCredentials?.name, 
            author_email: userCredentials?.email,
            content: commentText
        },

        {
            headers: {
              'Authorization': 'Basic ' + btoa("admin" + ':' + "KF5x iVxQ cUwY 9UVn JQZS HCC8"),
              'Content-Type': 'application/json'
            }
          }
        
        )

        if(response.status === 201){
            alert("Comment Posted Successfully");

        }else{
            alert("Error: Try again")
        }

        setLoading(false)

        console.log(response);
    }

    useEffect(() =>{

        ReactGA.send({
            hitType: "pageview",
            page: `/article/${id}`,
            title: article?.title?.rendered
          });
    
    
        const data = () =>{
            const userCredentials = JSON.parse(localStorage.getItem('user'));
            
            if(user){ setUser(userCredentials) }
        }
    
        data()
       },[])

   return(
    <div> 
        <Nav />
            {
                !article && (
                    <div className='w-full min-h-[400] flex justify-center items-center'>
                    <div className='m-auto'>
                      <img src="/loadings.svg" alt="" />
                      <h1>Loading...</h1>

                    </div>
                </div>
             )
            } 
            {
                <div className='bg-[#F9F9F9]'>
                    <div className="bg-[gold] p-2 flex-wrap flex justify-between">
                    <p className='font-extrabold text-xl' dangerouslySetInnerHTML={{ __html: article?.title.rendered}}></p>
                        {/* <h1 className="font-extrabold text-white">By {ele.creator}</h1> */}
                    </div>

                    <div id="container" className="lg:p-10 p-5 flex min-h-[400px] flex-col md:flex-row">
                        <div className="flex-1 p-2 lg:p-10">
                            <div className={`object-cover w-full pb-10 lg:w-1/2 lg:m-auto`}>
                                <img className="w-full rounded" src={featuredImage} alt={article?.slug} />
                            </div>

                                <div className='p-4 text-black'>
                                   {parse(article?.content ? article?.content?.rendered: "KLSR Blogs", options)}
                                </div> 

                                
                                {/* <RelativeTime date={article?.date} /> */}

                          
                            {/* <p className="mt-5 text-right">
                                {Intl.DateTimeFormat('en',
                                 { year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  }).format(new Date(article?.date))}</p> */}

                            <div id="share" className="my-10">
                                <div>
                                    <h1>Share <span dangerouslySetInnerHTML={{ __html: article?.title.rendered}} className='text-green-500'></span> on</h1>
                                    <div className="flex gap-3">
                                        <div className="w-7 h-7">
                                            <FacebookShareButton url={currentUrl+"/"+article?.id} title={article?.title.rendered +"\n"} hashtag="klsr" quote={<p dangerouslySetInnerHTML={{ __html: article?.excerpt.rendered}}></p>}>
                                              <i className="fa-brands text-[#050601] text-2xl fa-facebook mx-1"></i>
                                            </FacebookShareButton>
                                        </div>
                                        <div className="w-7 h-7 ">
                                            <WhatsappShareButton url={currentUrl+"/"+article?.id} title={article?.slug}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-whatsapp mx-1"></i>

                                            </WhatsappShareButton>
                                        </div>
                                        <div className="w-7 h-7">
                                           <TwitterShareButton url={currentUrl+"/"+article?.id} title={article?.slug}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-x-twitter mx-1"></i>
                                            </TwitterShareButton>
                                        </div>
                                        <div className="w-7 h-7">
                                          <TelegramShareButton url={currentUrl+"/"+article?.id} title={article?.slug}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-telegram mx-1"></i>
                                            </TelegramShareButton>
                                        </div>

                                        <LinkedinShareButton url={currentUrl+"/"+article?.id} title={article?.slug}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-linkedin mx-1"></i>
                                            </LinkedinShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="comment" className="md:max-w-[300px] border flex-1 ">
                            <h1 className="bg-teal-900 text-white p-2">Comments <sup className='bg-blue-600 p-1'>{comments?.length}</sup></h1>

                            <div className="border rounded w-full p-2">
                                <textarea onChange={(e) => setCommentText(e.target.value) } className="outline p-2 rounded w-full" placeholder="Leave a comment" name="Area" id="" cols="10" rows="5"></textarea>
                                {
                                    userCredentials !== null ? (<button className="p-2 border bg-green-600 rounded w-full" onClick={handleComment}>{loading ? ('Sending...'):('Send')}</button>):
                                    (<><button className="p-2 border bg-green-600 rounded w-full" onClick={showModal}>Send</button></>)
                                }
                            </div>

                            <Modal title="Details" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <h1 className='text-xs text-center mb-2 text-green-700'>Seems we don't know you, let's know you before you can drop a comment</h1>
                                <form>
                                    <input onChange={(e) => setUser({...user, name: e.target.value})} placeholder="Full Name" className='mb-3 rounded p-2 border w-full' type="text" />
                                    <input onChange={(e) => setUser({...user, email: e.target.value})} placeholder="Email" className='rounded p-2 border w-full' type="text" />

                                </form>
                             </Modal>


                            {
                                comments?.length < 1 && (
                                    <h1 className='p-5 font-extrabold text-center'>No Comments yet be the first to drop a comment</h1>
                                )
                            } 

                            {
                             comments && comments?.map(ele =>(
                                <div className="p-2 flex">
                                    <div className="w-[50px] h-[50px] flex justify-center items-center bg-black rounded-full">
                                     <i class="fa-solid fa-user text-white text-4xl"></i>
                                    </div>
                                    <div className="flex-1 ml-3">
                                        <div className="flex flex-wrap justify-between mb-2">
                                            <h1 className="font-bold">{ele.author_name}</h1>
                                            <p className="text-sm text-orange-700"><RelativeTime date={ele?.date} /></p>
                                        </div>
                                        <p dangerouslySetInnerHTML={{ __html: ele?.content?.rendered}} className="text-md"></p>
                                        <hr />
                                    </div>
                                </div>

                               ))
                            }
                        </div>
                    </div>
                </div>
            }
            <Footer />
    </div>
   )
}


export default Article;