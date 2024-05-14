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
import { Card, Form, Select, Input, Button, Modal, Table, Space, Popconfirm, notification, Alert } from 'antd';
import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';

import { DeleteOutlined } from '@ant-design/icons';
import {auth, firestore} from '../../firebaseConfig';
import {  createUserWithEmailAndPassword } from "firebase/auth";


let admin = JSON.parse(sessionStorage.getItem('klsr'));


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
    const [loading, setLoading] = useState(false)

    const nameValue = Form.useWatch('name', form);
    const roleValue = Form.useWatch('role', form);
    const emailValue = Form.useWatch('email', form);
    const phoneValue = Form.useWatch('phone', form);

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
  

    useEffect(() =>{
     
    }, [])
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
     const admins = async () =>{
       let { data: admin, error } = await supabase
       .from('admin')
       .select('*')

       setAdminList(admin)
     }

     admins()
    }, [nameValue, roleValue])

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = async () => {  
      setLoading(true)   
          try {
            const userCredential = await createUserWithEmailAndPassword(auth, emailValue, phoneValue);
            const newUser = userCredential.user;

            if(newUser){
              const { data, error } = await supabase
                .from('admin')
                .insert([
                  {  
                      name: nameValue,
                      email: emailValue,
                      role: roleValue,
                      phone: phoneValue
                   },
                ])
                
                alert('Admin Added Successfully')
                setLoading(false)
                window.location.reload()
             }
                  
          }catch(error){
            alert('Admin Not Successfully Added');
            setLoading(false)
          }
    
    setIsModalOpen(false);
  }

  const handleDelete = async(email) =>{

    if(email === "oladaniel@outlook.com"){
      notification.open({
        type: 'error',
        message: 'Cannot perform this operation on this specific admin',
        duration: 5,
      })

      return
    }
   
      const { error } = await supabase
      .from('admin')
      .delete()
      .eq('email', email)

      if(!error){
        notification.open({
          type: 'success',
          message: 'User deleted successfully',
          duration: 3,
          onClose: () => window.location.reload()
        })
      }else{
        notification.open({
          type: 'error',
          message: 'User not deleted successfully',
          duration: 3,
          onClose: () => window.location.reload()
        })
      }
        
  }


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

        {
          title: "",
          dataIndex: "action",
          key: 'action',
          render: (text, record) => (
            <Space size="middle">
              <Popconfirm title={`Are you sure delete ${record.name} from admin?`}
                onConfirm={() => handleDelete(record.email)}
              >
                <p><DeleteOutlined className='text-red-500' /></p>
              </Popconfirm>
            </Space>
          )
        }
      ];

      const dataSource =  adminList;

     return(
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
        <div>
          {
            admin.role === 'Superadmin' ? (
              <Button type="primary"  className='!bg-[#115E59] mb-5' onClick={showModal}>
                + Add Admin / Creator
              </Button>
            ):(
              <Button className='!bg-[#115E59] text-green-700'>
                 + Add Admin / Creator
              </Button>
            )
          }

           {
            admin.role == "Superadmin" ? (
              dataSource && (
                <Table dataSource={dataSource} columns={columns} />
              )
            ):(
              <h1 className='p-5 text-red-400 font-extrabold'>Only Super Admin have access to this page</h1>
            )
           }

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
                       <Select name="role" className='w-full' placeholder="Role" options={[{ value: 'Superadmin', label: <span>Super Admin</span> },
                                    { value: 'creator', label: <span>Admin(Creator)</span> }
                      ]} />
                    </Form.Item>

               </Form>
                {/* <Input className='mb-4'  placeholder=""/> */}

            </Modal>

        </div>
                
      </Main>
    </Box>
    )
}

export default AdminMember;