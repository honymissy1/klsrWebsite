import { Card, Input, Button } from 'antd';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth, firestore} from '../../firebaseConfig'; 
import { useState } from 'react';
import supabase from '../../supabaseClient';
import { stringify } from 'postcss';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = () =>{
        setLoader(true)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(async(userCredential) => {
            // Signed in 
            const user = userCredential.user;

            if(user){
                let { data: admin, error } = await supabase
                .from('admin')
                .select('*')
                .eq('email', user.email)
            
                if(admin){
                    sessionStorage.setItem('klsr', JSON.stringify(admin[0]))
                    window.location.reload(); 
                }

            }else{
                alert('User not found');
                setLoader(false)
            }

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });


    }

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
                <Input placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                <Input.Password placeholder="Password" className='my-4' onChange={(e) => setPassword(e.target.value)}  />
                <Button type="primary" onClick={handleLogin}>{loader ? "Login" : "Loading..."}</Button>
                </Card>

            </div>
       </div>
    )
}


export default AdminLogin