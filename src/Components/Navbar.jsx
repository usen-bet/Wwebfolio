import "./Styles/Navbar.scss"
import Logo from "../assets/Logo.png"
import { Link } from "react-router"
import { useState } from "react"
import mobnav from "../assets/mob-nav.png"

function Navbar() {
    const [unclick, setUnclick] = useState(true)
    const toggle = () => {
    console.log("trap")
    setUnclick(!unclick)
    }
  return (
<div className='bar'>
     <div className='logo'>
       <img src={Logo} />  
    </div> 
    <div onClick={toggle} className={unclick ? 'hamburger' : 'active'}>
       <div className={unclick ? 'hamburger-line ham-top' : "one hamburger-line"}></div>
       <div className={unclick ? 'hamburger-line ham-mid' : "two hamburger-line"}></div>
       <div className={unclick ? 'hamburger-line ham-bottom' : "three hamburger-line"}></div>
    </div>
    <div className='navigation'>
      <Link to="/Developer" className="link"> 
          <p>Developer</p>
      </Link>
      <Link to="/Designer" className="link"> 
          <p>Designer</p>
      </Link>
      <Link to="/Editor" className="link"> 
          <p>Editor</p>
      </Link>
      <Link to="/Writer" className="link"> 
          <p>Writer</p>
      </Link>
      <Link to="/Replyguy" className="link"> 
          <p>Reply guy</p>
      </Link>
      <Link to="/Artist" className="link"> 
          <p>Artist</p>
      </Link>
      <Link to="/Artist" className="linkk"> 
          <button className="btn">Email</button>
      </Link>
      <div className='box'></div>
    </div>  
    {
      unclick ? (null) : (
        <div className="links-bg">
       <div className="linkers"> 
       <ul className="Link-list">
        <li>
        <Link to="/Developer" className="link"> 
          <p>Developer</p>
        </Link>
        </li>
        <li>
        <Link to="/Designer" className="link"> 
          <p>Designer</p>
        </Link>
        </li>
        <li>
        <Link to="/Editor" className="link"> 
          <p>Editor</p>
        </Link>
        </li>
        <li>
        <Link to="/Writer" className="link"> 
          <p>Writer</p>
        </Link>
        </li>
        <li>
        <Link to="/Replyguy" className="link"> 
          <p>Intern</p>
        </Link>
        </li>
        <li>
        <Link to="/Artist" className="link"> 
          <p>Artist</p>
        </Link>
        </li>
        <li>
        <Link to="/Artist" className="link"> 
          <button className="btn">Email</button>
        </Link>
        </li>
       </ul>
       </div>
      </div>
      )
    }
    </div>
  )
}

export default Navbar

