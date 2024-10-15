import { Link } from "react-router-dom";


const Nav = ({page}) =>{
  const remove = () =>{
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
  }

  const add = () =>{
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('open');
  }

 return(
        <nav className="flex md:items-center items-center z-20 ease-in-out md:justify-around p-3">
          <div className="flex w-full lg:w-max">
            <h1 className=" lg:hidden p-5 top-5" onClick={add}><i class="fa-solid fa-bars"></i></h1>
            <div className="" style={{margin: 'auto'}}>
              <img className="" src="/images/logo.png" style={{width: '70px', padding: '0px 10px'}} alt="" />
            </div>
          </div>
          <ul className="lg:flex gap-10 transform translate-x-[-100%] lg:translate-x-0 dark:color-[#ddd]">
            <div className="block text-right lg:hidden">
               <p onClick={remove}><i class="fa-solid fa-xmark"></i></p>
            </div>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about`}>About</Link></li>
            <li><Link to={`/articles`}>Articles</Link></li>
            <li className="lg:pr-4"><Link to={`/podcast`}>Podcast</Link></li>
            <li onClick={remove}>{page === 'home'? <a href="/#charity">Charity</a>:<Link to={'/charity'}>Charity</Link>}</li>
            <li><Link to={`/contact`}>Contact</Link> </li>
          </ul>

         {
          page === 'home' && (
            <a href="/#partnership">
              <i class="fa-solid text-2xl fa-circle-dollar-to-slot"></i>
            </a>
          )
         }
          
        </nav>
  )
}

export default Nav