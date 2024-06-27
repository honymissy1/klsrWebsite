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



import { Card, Input, Select, Button, message, Upload  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

import { useState, useEffect } from 'react';
import PostArticles from '../../components/PostArticles';

const drawerWidth = 240;

const admin = JSON.parse(sessionStorage.getItem('klsr'))

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function AdminDashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

 
  const [articles, setArticles] = useState();


  const links = ['', 'manage', 'schedule', 'messages'];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNav = () =>{

  }

  useEffect(() =>{

    const articles = async() =>{
      let { data: articles, error } = await supabase
      .from('articles')
      .select('*')

      setArticles(articles)
    }

    articles()
              
  }, [])

  
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar className='!bg-teal-800' position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className='flex items-center gap-5' variant="h6" noWrap component="div">
            <img className='w-[50px]' src="/images/logo.png" alt="" />KLSR Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Manage Post', 'Admin', 'Add Schedule', 'Messages'].map((text, index) => (
            <Link to={`/admin/${links[index]}`} key={text} >
              <ListItem onClick={handleNav}disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider />

      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <div className='flex gap-5 flex-wrap'>
          <div className='min-w-[300px] flex-1'>
            <div className='my-5 flex items-center justify-between'>
                <h1 className='font-bold text-2xl'>Posted Articles</h1>
                <button className='p-2 bg-teal-900 text-white rounded-md md:hidden'>+ Add Article</button>
            </div>


            {
              articles?.map(ele =>(
                <div className='p-2 rounded text-white bg-green-800 py-5 mb-1'>
                 <div className='flex justify-between'>
                    <h1 className='font-bold truncate'>{ele.title}</h1>
                    <p>Edit</p>
                 </div>
                  <div className='flex justify-between py-1'>
                    <p>By {ele.creator}</p>
                    <p>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true}).format(new Date(ele.created_at))}</p>

                  </div>
                </div>
              ))
            }

          </div>

           
          <PostArticles />

        </div>
            <h1>Here will have list of Blog Posts very good</h1>
       </Main>
    </Box>
  );
}