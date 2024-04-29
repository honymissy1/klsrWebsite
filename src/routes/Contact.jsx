import { Card, Input, Button } from 'antd';
import Footer from "../components/Footer";
import Nav from '../components/Nav.jsx';

const Contact = () =>{
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
                        <p className='font-extrabold text-sm'>+1347-481-6604  +1347-208-4052</p>
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
                    <h1 className='font-extrabold text-2xl py-5'>Talk to Us</h1>
                    <form action="">
                      <Input placeholder="Full Name"/>
                      <Input className='my-5' placeholder="Email"/>
                      <Input.TextArea />
                      <Button type="dashed" className='mt-2 bg-emerald-900 text-white'>Send</Button>
                    </form>
                </div>
            </div>


          <Footer />
        </div>
    )
}


export default Contact;