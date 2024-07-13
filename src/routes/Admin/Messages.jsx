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

import supabase from '../../supabaseClient';

import moment from 'moment';

export default function Messages() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [messageData, setMessageData] = React.useState();

  React.useEffect(() =>{
   const message = async () =>{
     
    let { data: messages, error } = await supabase
    .from('messages')
    .select('*')

    setMessageData(messages)
   }

   message()

  },[])

  const links = ['', 'manage', 'schedule', 'messages'];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNav = () =>{

  }

  return (
    <div>
        <h1 className="text-2xl font-extrabold">Messages</h1>

        <div className='w-full lg:p-10 p-3 min-h-[300px] bg-teal-900'>
          {
            messageData?.length  < 1 && (
              <div className='rounded mb-2 p-2 w-full text-white bg-teal-800'>
                <h1 className='text-2xl text-center'>No messages yet</h1>
              </div>
            )
          }
          {
            messageData && messageData.map(ele =>(
              <div className='rounded mb-2 p-2 w-full text-white bg-teal-800'>
              <div className='flex justify-between items-center'>
                <div>
                  <h1 className='font-extrabold'>{ele.name}</h1>
                  <p className='text-sms text-[#ddd]'>{ele.email}</p>
                </div>
                <h1>
                    {Intl.DateTimeFormat('en',
                    { year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                    }).format(new Date(ele.created_at))}
                </h1>
              </div>
                <hr />
                <p className='p-2'>{ele.content} </p>
              </div>
            )) 

          
          }

        </div>
    </div>

  );
}