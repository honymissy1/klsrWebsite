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


import { Outlet } from "react-router-dom";

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

  const links = ['', 'manage', 'schedule', 'settings'];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNav = () =>{

  }

  React.useEffect(() =>{
    const dataFetch = async () =>{
      let { data: programs, error } = await supabase
      .from('programs')
      .select('*')

      console.log(programs[0].Day.Monday);

    }

    dataFetch();
        
  }, [])

  const handleData = async() =>{

    
        
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
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
          <Typography variant="h6" noWrap component="div">
            KLSR Admin Dashboard
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
          {['Manage Post', 'Admin', 'Add Schedule', 'Settings'].map((text, index) => (
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

        <h1 className="font-extrabold text-2xl my-5">Add a Scheduled Program</h1>
        <form className='flex gap-5 flex-wrap'>

        <Select
          className="w-full"
          placeholder="Day"
           onChange={(e) => setArticleType(e)}
           options={[{ value: 'Monday', label: <span>Monday</span> },
                            { value: 'Tuesday', label: <span>Tuesday</span> },
                            { value: 'Wednesday', label: <span>Wednesday</span> },
                            { value: 'Thursday', label: <span>Thursday</span> },
                            { value: 'Friday', label: <span>Friday</span> },
                            { value: 'Saturday', label: <span>Saturday</span> },
                            { value: 'Sunday', label: <span>Sunday</span> }
                   ]} />

           <Input  className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Program"/>
           <Input  className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Anchor"/>
           <Input  className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Time"/>
           <Button type='primary'>Submit</Button>
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