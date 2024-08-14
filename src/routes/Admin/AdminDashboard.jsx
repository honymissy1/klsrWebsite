import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

import { MoreOutlined, DeleteFilled, EditFilled} from '@ant-design/icons';

import supabase from '../../supabaseClient';



import { Card, Input, Select, Drawer as Draw, notification, Upload, Popover, Popconfirm  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

import { useState, useEffect } from 'react';
import PostArticles from '../../components/PostArticles';
import EditPost from '../../components/EditPost';


const admin = JSON.parse(sessionStorage.getItem('klsr'))


export default function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [api, contextHolder] = notification.useNotification();

  const [articles, setArticles] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNav = () =>{

  }

  useEffect(() =>{

    const articles = async() =>{
      let { data: articles, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false }); 

      setArticles(articles)
    }

    articles()
              
  }, [])

  const handleDelete = async (id) =>{

    const {data,  error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id)

     if(error){
       return;
     }

    api.open({
      message: 'Delete Successful',
      description:"This article have been deleted successfully.",
      duration: 0,
      onClose: () =>{
       window.location.reload();
      }
      
    });
            
  }

  const [popOpen, setPopOpen] = React.useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setPopOpen(true);
  };
  const handleOk = (id) => {
    setConfirmLoading(true);
    handleDelete(id)
    setTimeout(() => {
      setPopOpen(false);
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setPopOpen(false);
  };


  // Modal
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleModalOk = () => {
    setIsModalOpen(false);
  };
  const handleModalCancel = () => {
    setIsModalOpen(false);
  };


  const [openDrawer, setOpenDrawer] = useState(false)


  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onClose = () => {
    setOpenDrawer(false);
  };


  function showConfirm(e) {
    // Display the confirm dialog box
    const userConfirmed = confirm("Are you sure you want to delete this article ?");
  
    // Check the user's response
    if (userConfirmed) {
     handleDelete(e)
     alert('Article successfully removed')
     window.location.reload();
     
    } else {
      // User clicked "Cancel"
      console.log("User clicked Cancel.");
      // Perform an action for the Cancel response
      document.getElementById('output').innerText = 'You clicked Cancel!';
    }
  }


  return (


        <div className='m-auto flex md:gap-5 flex-wrap'>
            {contextHolder}
          <PostArticles show={false} />
          <div className='w-full flex-1 max-h-[100vh]'>
           <h1 className='font-bold text-md'>Posted Articles</h1>
            <div className='my-5 flex items-center justify-between'>
                <button onClick={showDrawer} className='p-2 bg-teal-900 text-white text-xs font-extrabold rounded-md md:hidden'>+ Add Article</button>
            </div>

            <Draw title="Post Articles" onClose={onClose} open={openDrawer}>
              <PostArticles show={true} />
            </Draw>

            <div className="w-full flex-1">
              {
                articles?.map(ele =>(
                  <div className="w-full shadow" key={ele.id}>
                    <div  className='justify-between p-4 relative rounded text-white bg-green-800 mb-1 text-xs'>
                    <div className='w-full gap-5 flex justify-between'>
                       {
                        ele.img_url ? (
                          <div className='w-[100px]'>
                           <img src={ele.img_url} className='w-full' alt="" /> 
                          </div>

                        ):(
                          <div className="border w-[100px] h-full"></div>
                        )
                       }
                          <div className='flex flex-1 flex-col w-[70%] justify-between py-1'>
                            
                            <h1 className='font-bold truncate'>{ele.title}</h1>
                            <p className='my-1'>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true}).format(new Date(ele.created_at))}</p>
                            <p className='text-green-300 mt-3'><i class="fa-solid fa-user"></i> {ele.creator}</p>
                            
                          </div>

                        <div className='absolute top-0 p-4 right-0 bg-green-900 rounded-md justify-around flex flex-col items-center text-md h-auto'>
                            <div className='flex gap-2 text-md'><EditPost show={true} id={ele.id} /></div>
                            <div className='w-full my-3 h-[1px] bg-white'></div>
                            <DeleteFilled className='text-red-500 text-md text-md' onClick={(e) => showConfirm(ele.id)} /> 
                        </div>
                    </div>

                    </div>
                  </div>
                ))
              }
            </div>
          </div>
  

        </div>
  );
}