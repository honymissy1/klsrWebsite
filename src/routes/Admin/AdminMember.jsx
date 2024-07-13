import * as React from 'react';
import { Card, Form, Select, Input, Button, Modal, Table, Space, Popconfirm, notification, Tooltip } from 'antd';
import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';

import { DeleteOutlined } from '@ant-design/icons';
import {auth, firestore} from '../../firebaseConfig';
import {  createUserWithEmailAndPassword } from "firebase/auth";


let admin = JSON.parse(sessionStorage.getItem('klsr'));


const AdminMember = () =>{
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adminList, setAdminList] = useState();
    const [inputValue, setInputValue] = useState();
    const [loading, setLoading] = useState(false)
    const [visible, setVisible] = useState(false);
    const nameValue = Form.useWatch('name', form);
    const roleValue = Form.useWatch('role', form);
    const emailValue = Form.useWatch('email', form);
    const phoneValue = Form.useWatch('phone', form);


    const [open, setOpen] = React.useState(false);
  

    useEffect(() =>{
     
    }, [])

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
                      phone: phoneValue,
                      password: phoneValue
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

    const handlePassOk = async() => {
      // Do something with the input value

      const { data, error } = await supabase
      .from('admin')
      .update({ password: inputValue})
      .eq('email', admin.email)
      .select()
              
      if(data){
        console.log(data);
        notification.open({
          type: 'success',
          message: 'Password Successfully changed',
          duration: 5,
          onCancel: () => window.location.reload()
        })
  
      }
      console.log(admin.email);
      setVisible(false);
    };
  
    const handlePassCancel = () => {
      setVisible(false);
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
          ellipsis: true,
          render: (text) => (
            <Tooltip title={text}>
              <span>{text}</span>
            </Tooltip>
          ),      
        },

        {
          dataIndex: "action",
          key: 'action',
          width: 50,
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

      const tableFooter = () => {
        if(admin.role === "Superadmin"){
          return (
          <Button type="primary"  className='!bg-[#115E59] text-xs' onClick={showModal}>
            + Add Admin / Creator
          </Button>
          )
        }else{
          return(
          <Button className='!bg-[#115E59] text-green-700'>
             + Add Admin / Creator
          </Button>
          )

      }
    }


     return(
        <div>

           {
            admin.role == "Superadmin" ? (
              dataSource && (
                <div className='w-[100%] max-w-[100%]'>
                  <Table pagination={false} bordered dataSource={dataSource} columns={columns} footer={tableFooter}/>

                </div>
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
            <div className='mt-10'>
              <h1 onClick={() => setVisible(true)} className='text-xs py-2'><i class="fa-solid fa-lock mr-2"></i> Change Password</h1>
              <hr />
            </div>

            <Modal
              title="Change Password"
              open={visible}
              onOk={handlePassOk}
              onCancel={handlePassCancel}
            >
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Enter something"
              />
            </Modal>
        </div>
    )
}

export default AdminMember;