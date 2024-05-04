import { Card, Input, Button, Select } from 'antd';
import Footer from "../components/Footer";
import Nav from '../components/Nav.jsx';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';

const Contact = () =>{
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [type, setType] = useState();
    const [content, setContent] = useState();


    useEffect(() =>{
        const userData = JSON.parse(localStorage.getItem('user'));

        if(userData){
           setName(userData.name);
           setEmail(userData.email);
        }
    }, [])

    const handleSubmit = async () =>{
        const userData = JSON.parse(localStorage.getItem('user'));

        if(!userData){
            localStorage.setItem('user', JSON.stringify({name, email}))
        }


        const { data, error } = await supabase
        .from('messages')
        .insert([
        { name:name, email: email, type: type, content: content },
        ])
        .select()
        window.location.reload();
        console.log(data);
        
    }

    return (
        <div>
            <Nav />
            <div className="relative h-[60vh] w-[100%] overflow-hidden" style={{backgroundImage: "url('/images/podcast.jpg')", backgroundPosition:'center right', backgroundSize: 'cover' }}>
                {/* <img src="" className="!object-cover object-bottom ob" alt="" /> */}
                <div className="absolute flex items-end  text-white w-full h-full bg-[#0b0f14bf]">
                   <div className="p-10">
                        <h1 className="md:text-8xl text-4xl font-extrabold">Contact Us</h1>
                   </div>

                </div>
            </div>

            <div className="flex p-10 flex-wrap gap-[50px] my-[100px]">
                <div className="flex-1 p-5 min-w-[300px] min-h-[300px]">
                 <h1 className='font-extrabold text-2xl py-5'>Social Media</h1>
                <p className='py-5'>You can contact us through any of our social media platforms
                    to get more content from  KLSR
                </p>
                 <div className="flex p-4 bg-teal-900 text-[#e4e3dc] justify-between flex-wrap gap-5 rounded">
                  {/* <Link><i className="fa-brands  text-4xl fa-whatsapp mx-1"></i></Link>  */}
                  <Link to={`https://www.facebook.com/kingdomLifestyleradio`}><i className="fa-brands text-4xl fa-facebook mx-1"></i></Link> 
                  <Link><i className="fa-brands text-4xl fa-youtube mx-1"></i></Link>  
                  <Link to={`https://twitter.com/kingdomlifestr`}> <i className="fa-brands text-4xl fa-twitter mx-1"></i></Link> 
                  <Link to={`https://instagram.com/kingdomlifestyleradio`}><i className="fa-brands text-4xl fa-instagram mx-1"></i></Link>  

                  </div>
                </div>
                <div className="flex-1 p-5 min-w-[300px] min-h-[300px] text-white bg-[#C89700] rounded-md">
                    <h1 className='font-extrabold text-2xl py-5'>Mobile Number</h1>

                    <p>For prayers, counseling or support you can contact us through this numbers</p>
                    <div className='p-2 my-5 bg-white text-black relative'>
                        <sup className='rounded-md bg-red-600 p-2 text-white font-extrabold absolute right-0'>USA</sup>
                        <p className='font-extrabold text-sm'>+1347-481-6604 OR +1347-208-4052</p>
                    </div>

                    <div className='p-2 bg-white text-black relative'>
                        <sup className='rounded-md bg-green-600 p-2 text-white font-extrabold absolute right-0'>Nigeria</sup>
                        <p className='font-extrabold text-sm'>+2349160006614, +2347067873032, +2347018036538</p>
                    </div>

                    <div>
                        <p></p>
                    </div>
                </div>
                <div className="flex-1 p-5 min-w-[300px]  min-h-[300px] ">
                    <h1 className='font-extrabold text-2xl py-3'>Talk to Us</h1>
                    <p className='text-red-500 py-2'>Or you can send us your prayer request or Enquiries / Request</p>
                    
                    <form action="">
                      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name"/>
                      <Input value={email} onChange={(e) => setEmail(e.target.value)} className='my-2' placeholder="Email"/>
                      <Select
                            className="w-full mb-2"
                            placeholder="Type"
                            onChange={(e) => setType(e)}
                            options={[{  value: 'Request', label: <span>Request / Enquiry</span> },
                                       { value: 'prayer', label: <span>Prayer Request</span> },
                         ]} />
                      <Input.TextArea onChange={(e) => setContent(e.target.value)} placeholder='Request / Enquiry / Prayer request' />
                      <Button onClick={handleSubmit} type="dashed" className='mt-2 bg-emerald-900 text-white'>Send</Button>
                    </form>
                </div>
            </div>


          <Footer />
        </div>
    )
}


export default Contact;