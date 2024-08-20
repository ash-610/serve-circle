import React, { useState } from 'react';
import './Header.css'
import Dropdown from './Dropdown'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <div className='nav-container'>
            <div className='navbar'>
                <img src="https://s3.ap-south-1.amazonaws.com/servecirclesource/img/sc-new-logo.png" alt='logo' className='home-logo' />
                
                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to='/'> HOME</Link>
                    <Dropdown/>
                    <Link to='#help' > HELP CENTER</Link>
                    <Link to='#contact' > CONTACT US</Link>
                    <button className='login-btn' >LOGIN</button>
                    <button className='register-btn' >REGISTER</button>
                </div>
                
                <div className="menu-icon" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </div>
    </>
  )
}

export default Header