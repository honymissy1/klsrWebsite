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
        <nav className="flex z-20 md:justify-around">
          <div className="flex w-full lg:w-max">
            <h1 className=" lg:hidden p-5 top-5" onClick={add}><i class="fa-solid fa-bars"></i></h1>
            <div className="!mx-auto p-0" style={{margin: 'auto'}}>
              <img src="/images/logo.jpeg" style={{width: '100px'}} alt="" />
            </div>
          </div>
          <ul className="lg:flex transform translate-x-[-100%] lg:translate-x-0">
            <div className="block text-right lg:hidden">
              <p onClick={remove}><i class="fa-solid fa-xmark"></i></p>
            </div>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about`}>About Us</Link></li>
            <li><Link to={`/articles`}>Articles</Link></li>
            <li>Contact</li>
          </ul>
        </nav>
  )
}

export default Nav