import supabase from '../supabaseClient';

import { Card, Input, Select, Button, message, Upload, Table  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
const { TextArea } = Input;

const Programs = () =>{

    const [monday, setMonday] = useState(null)
    const [tuesday, setTuesday] = useState(null)
    const [wednesday, setWednesday] = useState(null);
    const [thursday, setThursday] = useState(null);

    const [friday, setFriday] = useState(null);
    const [saturday, setSaturday] = useState(null);
    const [sunday, setSunday] = useState(null);

    useEffect(() =>{
      const tableData = async () =>{
      
        let { data: monday, error } = await supabase
        .from('monday')
        .select('*')
        if(monday){
            setMonday(monday)
        }


        let { data: tuesday } = await supabase
        .from('tuesday')
        .select('*')
        if(tuesday){
            setTuesday(tuesday)
        }



        let { data: wednesday } = await supabase
        .from('wednesday')
        .select('*')
        if(wednesday){
            setWednesday(wednesday)
        }


        let { data: thursday } = await supabase
        .from('thursday')
        .select('*')
        if(thursday){
            setThursday(thursday)
        }

        let { data: friday } = await supabase
        .from('friday')
        .select('*')
        if(friday){
            setFriday(friday)
        }

        let { data: saturday } = await supabase
        .from('saturday')
        .select('*')
        if(saturday){
            setSaturday(saturday)
        }

        let { data: sunday } = await supabase
        .from('sunday')
        .select('*')
        if(sunday){
            setSunday(sunday)
        }

      }

      tableData();
    }, [])
    return(
        <div>
           <div className="relative h-[60vh] w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/podcast.jpg')", backgroundPosition:'center right', backgroundSize: 'cover' }}>
                {/* <img src="" className="!object-cover object-bottom ob" alt="" /> */}
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">Programs</h1>
                   </div>

                </div>
            </div>

            <h1 className='bg-[gold] p-3'>Monday</h1>

            <Table dataSource={monday}
            pagination={false} 
            columns={[

                {
                title: 'Program',
                dataIndex: 'program',
                key: 'program',
                },
                {
                title: 'Anchor',
                dataIndex: 'anchor',
                key: 'anchor',
                },

                {
                    title: 'Social Media Content',
                    dataIndex: 'socialmedia',
                    key: 'socialmedia',
                },


                {
                    title: 'Time',
                    dataIndex: 'time',
                    key: 'time',
                },

      ]} />


<h1 className='bg-[gold] p-3'>Tuesday</h1>

<Table dataSource={tuesday}
pagination={false} 
columns={[

    {
    dataIndex: 'program',
    key: 'program',
    },
    {
    dataIndex: 'anchor',
    key: 'anchor',
    },

    {
        dataIndex: 'socialmedia',
        key: 'socialmedia',
    },


    {
        dataIndex: 'time',
        key: 'time',
    },

]} />

<h1 className='bg-[gold] p-3'>Wednesday</h1>

<Table dataSource={wednesday}
pagination={false} 
columns={[

    {
    dataIndex: 'program',
    key: 'program',
    },
    {
    dataIndex: 'anchor',
    key: 'anchor',
    },

    {
        dataIndex: 'socialmedia',
        key: 'socialmedia',
    },


    {
        dataIndex: 'time',
        key: 'time',
    },

]} />

<h1 className='bg-[gold] p-3'>Thursday</h1>

<Table dataSource={thursday}
pagination={false} 
columns={[

    {
    dataIndex: 'program',
    key: 'program',
    },
    {
    dataIndex: 'anchor',
    key: 'anchor',
    },

    {
        dataIndex: 'socialmedia',
        key: 'socialmedia',
    },


    {
        dataIndex: 'time',
        key: 'time',
    },

]} />

<h1 className='bg-[gold] p-3'>Friday</h1>

<Table dataSource={friday}
pagination={false} 
columns={[

    {
    dataIndex: 'program',
    key: 'program',
    },
    {
    dataIndex: 'anchor',
    key: 'anchor',
    },

    {
        dataIndex: 'socialmedia',
        key: 'socialmedia',
    },


    {
        dataIndex: 'time',
        key: 'time',
    },

]} />

<h1 className='bg-[gold] p-3'>Saturday</h1>

<Table dataSource={saturday}

pagination={false} 
columns={[

    {
    dataIndex: 'program',
    key: 'program',
    },
    {
    dataIndex: 'anchor',
    key: 'anchor',
    },

    {
        dataIndex: 'socialmedia',
        key: 'socialmedia',
    },


    {
        dataIndex: 'time',
        key: 'time',
    },

]} />

<h1 className='bg-[gold] p-3'>Sunday</h1>

<Table dataSource={sunday}
pagination={false} 

columns={[

    {
    dataIndex: 'program',
    key: 'program',
    },
    {
    dataIndex: 'anchor',
    key: 'anchor',
    },

    {
        dataIndex: 'socialmedia',
        key: 'socialmedia',
    },


    {
        dataIndex: 'time',
        key: 'time',
    },

]} />
        </div>
    )
}

export default Programs;