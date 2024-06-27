import supabase from '../supabaseClient';

import Nav from '../components/Nav'

import { Card, Input, Select, Button, message, Upload, Table  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
const { TextArea } = Input;

const Programs = () =>{

    const [data, setData] = useState();
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    useEffect(() =>{
      const schedule = async () =>{
        let { data, error } = await supabase
        .from('schedule')
        .select('*')
        .order('day', {ascending: true})

        setData(data)
        console.log(data);
      }

      schedule()
    },[])

    return(
        <div>
            <Nav />
           <div className="relative h-[60vh] w-[100vw] overflow-hidden" style={{backgroundImage: "url('/images/podcast.jpg')", backgroundPosition:'center right', backgroundSize: 'cover' }}>
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">Programs</h1>
                   </div>

                </div>
            </div>

          <Table className='pb-10' dataSource={data}
            pagination={false} 
            columns={[
                {
                  title: 'Day',
                  dataIndex: 'day',
                  key: 'day',
                  ellipsis: true,
                  render: (text) =>{
                    return <span className='bg-orange-500 p-1 text-xs font-bold rounded'>{days[text]}</span> 
                  }
                },

                {
                title: 'Program',
                dataIndex: 'program',
                key: 'program',
                },

                {
                    title: 'Social Media',
                    dataIndex: 'social',
                    key: 'social',
                },


                {
                    title: 'Time',
                    dataIndex: 'time',
                    key: 'time',
                },

      ]} />


        
        </div>
    )
}

export default Programs;