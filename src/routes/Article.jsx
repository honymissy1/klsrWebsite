import { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import supabase from '../supabaseClient';
import { useParams, useLocation } from 'react-router-dom';
import moment from 'moment';
import Footer from "../components/Footer";
import { Button, Modal } from 'antd';
import DOMPurify from 'dompurify';
import { Helmet } from 'react-helmet';

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

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import '../assets/styles/custom-quill.css'


import { EditorContent, FloatingMenu, BubbleMenu, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Blockquote from '@tiptap/extension-blockquote'
import TextAlign from '@tiptap/extension-text-align'

const Article = () =>{
   const location = useLocation();
   const currentUrl = window.location.href
   let {id} = useParams();
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [article, setArticle] = useState();
   const [comments, setComments] = useState();
   const [commentText, setCommentText] = useState();
   const [loading, setLoading] = useState(false)
   const [content, setContent] = useState();

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

   useEffect(() =>{
    const data = () =>{
        const userCredentials = JSON.parse(localStorage.getItem('user'));
        
        if(user){ setUser(userCredentials) }
    }

    data()
   },[])

   
   useEffect(() =>{
    const singleArticle = async () =>{
        let { data, error } = await supabase.from('articles').select('*')
        .eq('id', id)
         setArticle(data);
        // await setContent(JSON.parse(data[0].content))

    }

    const comment = async () =>{
        let { data, error } = await supabase.from('comment').select('*').eq('article_id', id)
        setComments(data)
    }

    singleArticle();
    
    comment()
}, [])

let editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),

      Blockquote.configure({
        HTMLAttributes: {
          class: 'bg-green-100 p-2',
        },
      })
      
    ],
    content: article ? article[0].content : 'Not working',
    editable: false,
  })

  useEffect(() => {
    if (editor && article) {
        editor.commands.setContent(article[0]?.content);
    }
   }, [article, editor]);

   const handleComment = async () =>{
     if(user?.name !== null){
        const { data, error } = await supabase
        .from('comment')
        .insert([
        { name: userCredentials?.name, article_id: id, content: commentText, email: userCredentials?.email },
        ])
        .select()

        setLoading(true);
        
        window.location.reload();
     }
    }
    
   return(
    <div> 
        <Nav />
            {
             article == null || article == undefined && (
                <div className='w-full min-h-[400] flex justify-center items-center'>
                    <h1>Loading...</h1>
                </div>
             )
            }
            {
                article?.map(ele =>(
                <div key={ele.id}>
                    <Helmet>
                        <title>{ele.title}</title>
                        <meta name="description" content="This is my React application." />
                        <link rel="icon" type="image" href={ele.img_url} />

                        <meta name="keywords" content={ele.content} />
                        <link rel="canonical" href={currentUrl} />
                    </Helmet>
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

                            <EditorContent editor={editor} />

                          
                            <p className="mt-5 text-right">
                                {Intl.DateTimeFormat('en',
                                 { year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                  hour: 'numeric',
                                  minute: 'numeric',
                                  }).format(new Date(ele.created_at))}</p>

                            <div id="share" className="my-10">
                                <div>
                                    <h1>Share <span className='text-green-500'>{ele.type}</span> on</h1>
                                    <div className="flex gap-3">
                                        <div className="w-7 h-7">
                                            <FacebookShareButton url={currentUrl} title={ele.title} hashtag="klsr" quote="Welcome to KLSR">
                                              <i className="fa-brands text-[#050601] text-2xl fa-facebook mx-1"></i>
                                            </FacebookShareButton>
                                        </div>
                                        <div className="w-7 h-7 ">
                                            <WhatsappShareButton url={currentUrl} title={ele.title}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-whatsapp mx-1"></i>

                                            </WhatsappShareButton>
                                        </div>
                                        <div className="w-7 h-7">
                                           <TwitterShareButton url={currentUrl} title={ele.title}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-x-twitter mx-1"></i>
                                            </TwitterShareButton>
                                        </div>
                                        <div className="w-7 h-7">
                                          <TelegramShareButton url={currentUrl} title={ele.title}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-telegram mx-1"></i>
                                            </TelegramShareButton>
                                        </div>

                                        <LinkedinShareButton url={currentUrl} title={ele.title}>
                                            <i className="fa-brands text-[#050601] text-2xl fa-linkedin mx-1"></i>
                                            </LinkedinShareButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="comment" className="md:max-w-[300px] border flex-1 ">
                            <h1 className="bg-teal-900 text-white p-2">Comments</h1>

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
                               comments && comments.map(ele =>(
                                <div className="p-2 flex">
                                    <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
                                    <div className="flex-1 ml-3">
                                        <div className="flex flex-wrap justify-between mb-2">
                                            <h1 className="font-bold">{ele.name}</h1>
                                            <p className="text-sm text-orange-700">{moment(ele.created_at, "YYYYMMDD").fromNow() }</p>
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