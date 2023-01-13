import React, {useState, useEffect} from 'react';
import Logo from '../../assets/logo.png';
import { MdOutlineSubject } from 'react-icons/md';
import { GrClose } from 'react-icons/gr';
import { NavLink } from "react-router-dom";
import './navbar.css';

const Navbar = () => {
  
  const [clickDisplay, setClickDisplay] = useState("");
  const [closeDisplay, setCloseDisplay] = useState("");
  const [clicked, setClicked] = useState(false);
  
  const clickHandler = () => {
    setClicked(true);
    setCloseDisplay("block");
    setClickDisplay("none")
  }

  const closeHandler = () => {
    setClicked(false);
    setClickDisplay("block")
    setCloseDisplay("none");
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      setClickDisplay("none")
      setCloseDisplay("none");
    })
    return () => {
      window.removeEventListener('resize', () => {
        setClickDisplay("none")
        setCloseDisplay("none");
      })
    }
  })

  return (
    <div className='navbar-container container'>
      <a href="/"><img src={Logo} alt="logo" /></a>
      <nav>
        <MdOutlineSubject className='nav-icon' onClick={clickHandler} style={{display: clickDisplay}}/>
        <GrClose className='nav-icon-close' onClick={closeHandler} style={{display: closeDisplay}}/>
        <ul className={clicked ? 'nav-list show' : 'nav-list'}>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <button className='cta'><a href="/Book">Book Table</a></button>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;