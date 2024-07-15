import { useEffect, useRef } from "react"
import { Link, useLocation } from 'react-router-dom';


const Layout = ({children}) =>{

    const navRef = useRef();
    const location = useLocation()
    const toggle = () => {
        navRef.current.classList.toggle('transit')
    }

    useEffect(() =>{
        // alert(JSON.stringify(location.pathname))
    })
    
    return(
        <div className="w-full">

            <div ref={navRef} className="p-3 w-[200px] transition-all translate-x-[-100%] fixed z-[100] md:w-[300px] h-[100vh] bg-[#000000e3]">
              <p onClick={toggle} className="text-white text-xl"><i class="fa-solid fa-reply"></i></p>

              <div className="text-white mt-[50px] text-xs">
                <ul className="admin-nav">
                  <Link to="/admin/"><li onClick={toggle} className={`${location.pathname === "/admin/" ? "bg-green-500 p-2 rounded-md font-extrabold" :""}`}><i class="fa-solid fa-chart-line"></i> Posts</li></Link>
                  <Link to="/admin/manage"><li onClick={toggle} className={`${location.pathname === "/admin/manage" ? "bg-green-500 p-2 rounded-md font-extrabold" :""}`}><i class="fa-solid fa-folder-plus"></i> Admins</li></Link> 
                  <Link to="/admin/schedule"><li onClick={toggle} className={`${location.pathname === "/admin/schedule" ? "bg-green-500 p-2 rounded-md font-extrabold" :""}`}><i class="fa-solid fa-calendar-days"></i> Schedule</li></Link> 
                  <Link to="/admin/messages"><li onClick={toggle} className={`${location.pathname === "/admin/messages" ? "bg-green-500 p-2 rounded-md font-extrabold" :""}`}><i class="fa-solid fa-message"></i> Messages</li></Link> 

                </ul>
              </div>
            </div>
            <div className="flex w-[100vw] p-3 items-center !bg-teal-800 text-white">
              <h1 onClick={toggle} className="mr-2 p-3"><i class="fa-solid fa-bars"></i></h1>
              <img className='w-[50px]' src="/images/logo.png" alt="" />
              <h1 className="m-auto font-extrabold">KLSR ADMIN DASHBOARD</h1> 
            </div>
            <div className="p-3">
                {children}
            </div>
        </div>
    )
}

export default Layout