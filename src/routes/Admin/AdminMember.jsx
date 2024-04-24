import { Card, Form, Select, Input, Button, Modal, Table } from 'antd';
import { useEffect, useState } from 'react';
import supabase from '../../supabaseClient';

const AdminMember = () =>{
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [adminList, setAdminList] = useState();


    const nameValue = Form.useWatch('name', form);
    const roleValue = Form.useWatch('role', form);
    const emailValue = Form.useWatch('email', form);
    const phoneValue = Form.useWatch('phone', form);

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
            role: roleValue,
            phone: phoneValue
          });
               
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

                dataSource.length < 1 && (
                    <h1>No Data Available</h1>
                )

            }

        </div>
    )
}

export default AdminMember;