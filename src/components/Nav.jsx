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
        <nav className="flex md:justify-around">
          <div className="flex w-full lg:w-max">
            <h1 className="flex-1 lg:hidden" onClick={add}>Open</h1>
            <h1 className="flex-1">Logo</h1>
          </div>
          <ul className="lg:flex transform translate-x-[-100%] lg:translate-x-0">
            <div className="block text-right lg:hidden">
              <p onClick={remove}>Cancel</p>
            </div>
            <li><Link to="/">Home</Link></li>
            <li><Link to={`/about`}>About Us</Link></li>
            <li>Articles</li>
            <li>Contact</li>
          </ul>
        </nav>
  )
}

export default Nav