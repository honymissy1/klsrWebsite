import { Card, Input, Button } from 'antd';

const AdminLogin = () =>{
    return(
        <div>
            <div className="p-2 px-5 bg-teal-700 flex items-center gap-10 text-[white]">
                <img className='w-[50px]' src="/images/logo.png" alt="" /> 
                <h1 className='font-extrabold'>KLSR ADMIN</h1>

            </div>
            <div className='p-3'>
                <Card
                    title="Login"
                    className="w-[100%] md:w-[500px] mt-[50px] shadow m-auto"
                >
                <Input placeholder="Email"/>
                <Input.Password placeholder="Password" className='my-4'  />
                <Button type="primary">Login</Button>
                </Card>

            </div>
       </div>
    )
}


export default AdminLogin