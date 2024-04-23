import { Card, Form, Select, Input, Button, Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';

const AdminMember = () =>{
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);


    const nameValue = Form.useWatch('name', form);
    const roleValue = Form.useWatch('role', form);
    const emailValue = Form.useWatch('email', form);
    const phoneValue = Form.useWatch('phone', form);

    useEffect(() =>{
        
      console.log(nameValue);
      console.log(roleValue);
    }, [nameValue, roleValue])

    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = async () => {
        const { data, error } = await supabase.auth.signUp({
            email: emailValue,
            password: phoneValue,
          })

          console.log(data);

          const user = data.user;
        
          const { admin, error: profileError } = await supabase
          .from('admin')
          .insert({
            name: nameValue,
            password: phoneValue,
            role: roleValue,
            phone: phoneValue
          });

          console.log(admin);

          if(profileError) console.log(profileError);
      
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

      const dataSource = [
        {
          key: '1',
          name: 'Joke Silver',
          role: "Creator",
          email: 'jioke@gmail.com',
        }
      ];
    return(
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

                dataSource.lenght < 1 && (
                    <h1>No Data Available</h1>
                )

            }

        </div>
    )
}

export default AdminMember;