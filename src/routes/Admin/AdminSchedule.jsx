import * as React from 'react';
import supabase from '../../supabaseClient';
import { Card, Input, Select, Button, message, TimePicker  } from 'antd';
import moment from 'moment';

import { Outlet } from "react-router-dom";
import { Message } from '@mui/icons-material';


export default function AdminSchedule() {
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
    <IonPage>
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
         
           <TimePicker
            className="w-full"
            onChange={handleTimeChange} // Handle time changes
            format="HH:mm a" // Desired format
            use12Hours={true} // Toggle 12-hour or 24-hour format
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

      <div>
         <h1>List of Programs</h1>
      </div>

    </IonPage>


  );
}