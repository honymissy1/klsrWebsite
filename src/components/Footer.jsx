import { Link } from "react-router-dom";


const Footer = () => {
    return(
        <div className="flex min-h-[300px] pb-[50px] gap-5 flex-wrap p-5 text-white bg-black">
            <div className="w-[50px]">
                <img src="/images/logo.png" style={{width: '100%'}} alt="" />
            </div>
            <div className="min-w-[200px] text-center flex-1"> 
                <h1 className="text-xl font-extrabold text-white">KLSR</h1>
            </div>
            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">Pages</h1>

                <div className="text-[#ddd]"><br/>
                    <ul>
                        <li><Link to={`/`}>Home</Link></li>
                        <li><Link to={`/about`}>About</Link></li>
                         <li><Link to={`/articles`}>Articles</Link></li>  
                        <li><Link to={`/contact`}>Contact</Link></li>
                        <li><Link to={`/podcast`}>Podcast</Link></li>
                    </ul>
                </div>
            </div>

            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">Partnership</h1>

                <div className="text-white"><br/>
                <div className="py-4">
                     <h1 className="font-bold text-red-500">Zenith Bank</h1>
                     <p>1229216755</p>
                     <p className="text-xs text-blue-400">Kingdom Lifestyle & Diamond Charities</p>
                </div>
                <hr />
                 <div>
                     <h1 className="font-bold text-red-500">Guarantee Trust Bank</h1>
                     <p>0892125365</p>
                     <p className="text-xs text-blue-400">Kingdom Lifestyle & Diamond Charities</p>
                </div>
                </div>
            </div>

            <div className="min-w-[200px] flex-1"> 
                <h1 className="text-xl font-extrabold text-white">Contact</h1><br />

                <div>
                    <div className="border-b-2 border-purple-800 py-3">
                        <h1 className="text-xs text-purple-500">Nigeria</h1>
                        <a href={`tel: +2349160006614`}><p className="fa-solid fa-phone text-sm mx-3"> +2349160006614</p></a>
                        <a href={`tel: +2347067873032`}> <p className="fa-solid fa-phone text-sm mx-3"> +2347067873032</p></a>
                        <a href={`tel: +2347018036538`}><p className="fa-solid fa-phone text-sm mx-3"> +2347018036538</p></a>

                    </div>

                    <div className="mb-4">
                        <h1 className="mt-4 text-xs text-red-500">USA</h1>
                        <p className="fa-solid fa-phone text-sm mx-3"> +134 748 16604</p>
                        <p className="fa-solid fa-phone text-sm mx-3"> +134 720 84052</p>
                    </div>
            


                  <div className="flex p-2 bg-[#FFD700] justify-evenly rounded">
                  <a href='https://api.whatsapp.com/send?phone=2349160006614&text=Hello Kingdom lifestyle Radio'><i className="fa-brands fa-brands text-[#050601] text-2xl fa-whatsapp mx-1"></i></a> 
                  <Link to={`https://www.facebook.com/kingdomLifestyleradio`}><i className="fa-brands text-[#050601] text-2xl fa-facebook mx-1"></i></Link> 
                  <Link to={`https://www.youtube.com/@kingdomLifestyle-radio`}><i className="fa-brands text-[#050601] text-2xl fa-youtube mx-1"></i></Link>  
                  <Link to={`https://twitter.com/kingdomlifestr`}><i className="fa-brands text-[#050601] text-2xl fa-twitter mx-1"></i></Link>  
                   <Link to={`https://www.instagram.com/kingdomlifestyleradio/`}><i className="fa-brands text-[#050601] text-2xl fa-instagram mx-1"></i></Link> 

                  </div>
                </div>

            </div>

        </div>
    )
}


export default Footer