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
import { Card, Form, Select, Input, Button, Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';


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

const AdminMember = () =>{
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adminList, setAdminList] = useState();


    const nameValue = Form.useWatch('name', form);
    const roleValue = Form.useWatch('role', form);
    const emailValue = Form.useWatch('email', form);
    const phoneValue = Form.useWatch('phone', form);

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

    useEffect(() =>{
     const admins = async () =>{
       let { data: admin, error } = await supabase
       .from('admin')
       .select('*')

       console.log(admin);
       setAdminList(admin)
     }

     admins()
    }, [nameValue, roleValue])

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = async () => {     
          const {data, error } = await supabase
          .from('admin')
          .insert({
            name: nameValue,
            password: phoneValue,
            email: emailValue,
            role: roleValue,
            phone: phoneValue
          });
          if(data){
            window.href = "/admin/manage";

          }
               
          setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Role',
          dataIndex: 'role',
          key: 'role',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
      ];

      const dataSource =  adminList;

     return(
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
        <div>
           <Button type="primary" className='mb-10' onClick={showModal}>
            + Add Admin / Creator
           </Button>
           
            <Modal title="Add Admin / Creator" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
               <Form form={form}>
                   <Form.Item name="name">
                    <Input placeholder="Full Name"/>
                   </Form.Item>

                   <Form.Item name="email">
                    <Input placeholder="Email"/>
                   </Form.Item>

                    <Form.Item name="phone">
                        <Input className='mb-4'  placeholder="Phone"/>

                    </Form.Item>

                    <Form.Item name="role">
                       <Select name="role" className='w-full' placeholder="Role" options={[{ value: 'superadmin', label: <span>Super Admin</span> },
                                    { value: 'creator', label: <span>Admin(Creator)</span> }
                      ]} />
                    </Form.Item>

               </Form>
                {/* <Input className='mb-4'  placeholder=""/> */}

            </Modal>

            {
                dataSource && (
                    <Table dataSource={dataSource} columns={columns} />
                )
            }

            {

                // adminList.length < 1 && (
                //     <h1>No Data Available</h1>
                // )

            }

        </div>
                
      </Main>
    </Box>
    )
}

export default AdminMember;