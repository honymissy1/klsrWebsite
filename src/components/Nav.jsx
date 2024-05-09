import { Link } from "react-router-dom";


const Nav = () =>{
  const remove = () =>{
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
  }

  const add = () =>{
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
  }

 return(
        <nav className="flex z-20 md:justify-around p-3">
          <div className="flex w-full lg:w-max">
            <h1 className=" lg:hidden p-5 top-5" onClick={add}><i class="fa-solid fa-bars"></i></h1>
            <div className="" style={{margin: 'auto'}}>
              <img className="" src="/images/logo.png" style={{width: '70px', padding: '0px 10px'}} alt="" />
            </div>
          </div>
          <ul className="lg:flex gap-10 transform translate-x-[-100%] lg:translate-x-0">
            <div className="block text-right lg:hidden">
               <p onClick={remove}><i class="fa-solid fa-xmark"></i></p>
            </div>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about`}>About Us</Link></li>
            <li><Link to={`/articles`}>Articles</Link></li>
            <li className="lg:border-r-2 lg:border-r-black lg:pr-4"><Link to={`/podcast`}><i class="fa-solid fa-microphone"></i> Podcast</Link></li>
            <li><Link to={`/contact`}>Charity</Link> </li>
            <li><Link to={`/contact`}>Contact Us</Link> </li>
          </ul>

          <a href="/#partnership">
                    <i class="fa-solid text-2xl fa-circle-dollar-to-slot"></i>
          </a>
          
        </nav>
  )
}

export default Nav