import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
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


  return (


        <div className='m-auto flex md:gap-5 flex-wrap'>
            {contextHolder}
          <PostArticles show={false} />
          <div className='w-full flex-1 max-h-[100vh]'>
           <h1 className='font-bold text-xl'>Posted Articles</h1>
            <div className='my-5 flex items-center justify-between'>
                <button onClick={showDrawer} className='p-2 bg-teal-900 text-white text-xs font-extrabold rounded-md md:hidden'>+ Add Article</button>
            </div>

            <Draw title="Post Articles" onClose={onClose} open={openDrawer}>
              <PostArticles show={true} />
            </Draw>

            <div className="w-full flex-1">
              {
                articles?.map(ele =>(
                  <div className="w-full" key={ele.id}>
                    <div  className='justify-between p-2 rounded text-white bg-green-500 mb-1 text-xs'>
                    <div className='w-full flex justify-between'>
                    
                          <div className='flex flex-col w-[70%] justify-between py-1'>
                            <h1 className='font-bold truncate'>{ele.title}</h1>
                            <p>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true}).format(new Date(ele.created_at))}</p>
                          </div>

                        <div className='bg-green-400 rounded-md p-2 w-[15%] border flex flex-col items-center text-md h-full'>
                            <div className='flex gap-2 mb-3'><EditPost show={true} id={ele.id} /></div>
                              <Popconfirm
                                title="Delete"
                                description="Are you sure you want to delete this article"
                                open={popOpen}
                                
                                onConfirm={() => handleOk(ele.id)}
                                onCancel={handleCancel}
                                >
                                  <DeleteFilled className='text-red-600' onClick={showPopconfirm} />

                                </Popconfirm>                      
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