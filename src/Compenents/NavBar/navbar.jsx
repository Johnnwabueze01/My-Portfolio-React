import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import contactimg from '../../assets/contact.png'
import { Link } from 'react-scroll';
import menu from '../../assets/menu.png'

const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
        <img src={logo} alt="logo" className='logo' />
        <div className="desktopmenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopmenulistitem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Portfolio</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulistitem">Contact</Link>
        </div>
        <button className="desktopmenubtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behaviour: 'smooth'});
        }}>
            <img src={contactimg} alt="contact" className="desktopmenuimg" />Contact Me
        </button>
        <img src={menu} alt="Menu" className='mobmenu' onClick={()=>setshowMenu(!showMenu)} />
        <div className="navmenu" style={{display:showMenu? 'flex' : 'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Clients</Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listitem" onClick={()=>setshowMenu(false)}>Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
