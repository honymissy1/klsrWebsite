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


export default function AdminSchedule() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [day, setDay] = React.useState('');
  const [social, setSocial] = React.useState('');
  const [program, setProgram] = React.useState('');
  const [anchor, setAnchor] = React.useState('');
  const [time, setTime] = React.useState(null);
  const [loading, setLoading] = React.useState(false)


  const handleNav = () =>{

  }


  const handleTimeChange = (time, timeString) => {
    setTime(timeString);
  };

  const handleSubmit = async() =>{
    setLoading(true)

    const { data, error } = await supabase
    .from('schedule')
    .insert([
      { program: program, day: day, time: time, social: social},
    ])

    if(error){
      message.error("error scheduling");
      setLoading(false)
    }else{
      await message.success("Scheduled successfully!");
      setLoading(false)
      window.location.reload();

    }
        
    
        
  }

  return (

      <div>

        <h1 onClick={() => alert(time)} className="font-extrabold text-md my-5">Add a Scheduled Program</h1>
        <hr />
        <form className='flex lg:w-[70%] lg:m-auto gap-5 flex-wrap'>

        <Select
          className="w-full"
          placeholder="Day"
           onChange={(e) => setDay(e)}
           options={[{ value: 0, label: <span>Monday</span> },
                            { value: 1, label: <span>Tuesday</span> },
                            { value: 2, label: <span>Wednesday</span> },
                            { value: 3, label: <span>Thursday</span> },
                            { value: 4, label: <span>Friday</span> },
                            { value: 5, label: <span>Saturday</span> },
                            { value: 6, label: <span>Sunday</span> }
                   ]} />


           <Input onChange={(e) => setProgram(e.target.value)}  className='flex-1 w-full' placeholder="Program"/>
         
           {/* <Input onChange={(e) => setAnchor(e.target.value)}  className='flex-1 max-w-[500px]' placeholder="Anchor"/> */}
           <TimePicker
            className="w-full"
            // value={time} // Bind to state
            onChange={handleTimeChange} // Handle time changes
            format="HH:mm a" // Desired format
            use12Hours={true} // Toggle 12-hour or 24-hour format
            // showSecond={true} // Control whether to show seconds
          />
           <Input onChange={(e) => setSocial(e.target.value)}  className='flex-1 w-full' placeholder="Social Media Content"/>
           {
            loading ? (
              <Button  className='w-full' type='primary'>Submitting......</Button>
            ):(
              <Button onClick={handleSubmit} className='w-full' type='primary'>Submit</Button>
            )
           }
      </form>
      </div>


  );
}