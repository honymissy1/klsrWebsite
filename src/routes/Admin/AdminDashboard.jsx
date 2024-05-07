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

import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import supabase from '../../supabaseClient';
// import Editor from '@draft-js-plugins/editor';
// import createLinkifyPlugin from 'draft-js-plugins/linkify';


// const linkifyPlugin = createLinkifyPlugin();

// const plugins = [linkifyPlugin];

import { Card, Input, Select, Button, message, Upload  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const { TextArea } = Input;

import { useState, useEffect } from 'react';

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

  // const [editorState, setEditorState] = useState(EditorState.createEmpty());
  // States
  const [author, setAuthor] = useState();
  const [articleType, setArticleType] = useState();
  const [title, setTitle] = useState();
  // const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [uploading, setUploading] = useState(false);
  const [selectedFile, setSelectedFile] = useState();
  const [url, setUrl] = useState();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());



  const links = ['', 'manage', 'schedule', 'messages'];
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleEditorChange = (state) => {
    console.log(state);
    setEditorState(state);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleNav = () =>{

  }

  const handleFileChange = (info) => {
    if (info.file.status === 'removed') {
      setSelectedFile(null); // Clear the selected file when removed
    } else {
      setSelectedFile(info.fileList[0].originFileObj); // Store the selected file
    }
  };

  const content = editorState.getCurrentContent();
  const rawContent = JSON.stringify(convertToRaw(content));

  const handleSubmit = async () => {
    setUploading(true);
    if (!selectedFile) {
      const { data: poster  } = await supabase
        .from('articles')
        .insert([
          { 
            title: title, 
            content: rawContent,
            type: articleType,
            category: category,
            author: author,
            img_url: "",
            creator: admin.name  
          },
        ])
        .select()
        setUploading(true);
        window.location.reload();
    }

    

    try {
      const fileName = `${Date.now()}-${selectedFile.name}`;
      const filePath = `article_images/${fileName}`; // Customize your folder path

      const { error } = await supabase
        .storage
        .from('klsr') // Replace with your bucket name
        .upload(filePath, selectedFile);

      if (error) {
        throw error;
      }

      const { data:pics } = await supabase
        .storage
        .from('klsr') // Same bucket name
        .getPublicUrl(filePath);
       
           const { data: poster  } = await supabase
         .from('articles')
         .insert([
           { 
             title: title, 
             content: rawContent,
             type: articleType,
             category: category,
             author: author,
             img_url: pics.publicUrl,
             creator: admin.name  
           },
         ])
         .select()
        
      message.success("File uploaded successfully!");
      window.location.reload();

      } catch (error) {
     } finally {
      setUploading(false);
    }
  };



  
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
        <div>
          <h1 className='font-extrabold text-2xl my-5'>Post Articles</h1>
          <form className='flex gap-5 flex-wrap'>
          <Select
          className="w-full"
          placeholder="Article Type"
           onChange={(e) => setArticleType(e)}
          options={[{ value: 'Devotion', label: <span>Devotion</span> },
                            { value: 'Review', label: <span className='text-red-600'>Book Review</span> },
                            { value: 'Article', label: <span>Article</span> },
                            { value: 'event', label: <span>Events / Programs</span> },

                            ]} />

          <Input onChange={(e) => setTitle(e.target.value)} className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Title"/>
         {
          articleType == "Review" && (<Input onChange={(e) => setAuthor(e.target.value)} className='flex-1 max-w-[500px] min-w-[300px]' placeholder="Author"/>)
         }
        <Upload

          beforeUpload={() => false}
          onChange={handleFileChange}
          onRemove={() => setSelectedFile(null)}
          multiple={false} 
          showUploadList={true} // Show the file list with progress
        >
          <Button icon={<UploadOutlined />}>Select cover Image</Button>
        </Upload>

        <Select
          className="w-full"
           placeholder="Category"
           onChange={(e) => setCategory(e)}
          options={[{ value: 'Faith', label: <span>Faith</span> },
                            { value: 'Finance', label: <span className='text-red-600'>Finance</span> },
                            { value: 'Health', label: <span>Health</span> },
                            { value: 'Ministry', label: <span>Ministry</span> },
                            { value: 'Relationship', label: <span>Relationship</span> },
                            { value: 'Education', label: <span>Education</span> },
                            { value: 'Business', label: <span>Business</span> },
                            { value: 'Others', label: <span>Others</span> }
                            ]} />
         {/* <TextArea rows={4} placeholder="Content" onChange={(e) => setContent(e.target.value)}/> */}
         <Editor
          editorClassName=""
          editorState={editorState}
          onEditorStateChange={handleEditorChange}
          toolbar={{}}
        />
       
         <Button className='z-10 mb-20 mt-10' type="primary" onClick={handleSubmit} loading={uploading}>
          {uploading ? "Uploading..." : "Submit"}
        
        
         </Button>
          </form>

          {/* Table that contain list of Articles */}
        </div>
       </Main>
    </Box>
  );
}