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
import { Card, Input, Select, Button, message, TimePicker  } from 'antd';
import moment from 'moment';

import { Outlet } from "react-router-dom";
import { Message } from '@mui/icons-material';

const drawerWidth = 240;

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

export default function AdminSchedule() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [day, setDay] = React.useState('');
  const [social, setSocial] = React.useState('');
  const [program, setProgram] = React.useState('');
  const [anchor, setAnchor] = React.useState('');
  const [time, setTime] = React.useState(null);





  const links = ['', 'manage', 'schedule', 'Messages'];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNav = () =>{

  }


  const handleTimeChange = (time, timeString) => {
    setTime(timeString);
  };

  const handleSubmit = async() =>{


    const { data, error } = await supabase
    .from(day)
    .insert([
      { program: program, time: time, socialmedia: social, anchor: anchor },
    ])

    if(error){
      message.error("error scheduling")
    }else{
      await message.success("Scheduled successfully!");
      window.location.reload();

    }
        
    
        
  }

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

        <h1 onClick={() => alert(time)} className="font-extrabold text-2xl my-5">Add a Scheduled Program</h1>

        <form className='flex lg:w-[70%] lg:m-auto gap-5 flex-wrap'>

        <Select
          className="w-full"
          placeholder="Day"
           onChange={(e) => setDay(e)}
           options={[{ value: 'monday', label: <span>Monday</span> },
                            { value: 'tuesday', label: <span>Tuesday</span> },
                            { value: 'wednesday', label: <span>Wednesday</span> },
                            { value: 'thursday', label: <span>Thursday</span> },
                            { value: 'friday', label: <span>Friday</span> },
                            { value: 'saturday', label: <span>Saturday</span> },
                            { value: 'sunday', label: <span>Sunday</span> }
                   ]} />


           <Input onChange={(e) => setProgram(e.target.value)}  className='flex-1 w-full min-w-[300px]' placeholder="Program"/>
         
           <Input onChange={(e) => setAnchor(e.target.value)}  className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Anchor"/>
           <TimePicker
            className="w-full"
            // value={time} // Bind to state
            onChange={handleTimeChange} // Handle time changes
            format="HH:mm a" // Desired format
            use12Hours={true} // Toggle 12-hour or 24-hour format
            // showSecond={true} // Control whether to show seconds
          />
           <Input onChange={(e) => setSocial(e.target.value)}  className='flex-1 w-full min-w-[300px]' placeholder="Social Media Content"/>
           <Button onClick={handleSubmit} className='w-full' type='primary'>Submit</Button>
      </form>
            {/* Here admin with the role super admin will add a schedule for the radio station
              1. Day of Program
              2. Time 
              3. Title
              4. Description
              5. Anchor
              6. Duration
            
            */}




            {/* 
             {
              monday: [
                {
                  program: Morning Devotion,
                  hours: 7am,
                  by: 'Omowunmi'
                },

                {
                  program: 'Business Corner',
                  hour: 12pm,
                  SocialMediaContent: 'blablabla
                }
              ]
             }
             
            */}

            {/* Table containing meeting schedules */}
       </Main>
    </Box>
  );
}