import React from 'react'
import { useState } from 'react';
import "./Navbar.css";
import myImage from './383985_key_lock_password_protection_safe_icon.png';
import { MenuData } from "./MenuData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";


function Navbar() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
      setClicked(!clicked);
    };
    return (
        <nav className='navbar'>
            <NavLink to ="/" className='logo'>
                <img src={myImage} alt=""  className='logoimg'/>
                <h1>REACT</h1>
            </NavLink>
            <div className='menu-icons'>
            <FontAwesomeIcon icon={clicked ? faTimes : faBars} onClick={handleClick} className='icons'/>
            </div>
            <ul className={`Nav-menu ${clicked ? 'active' : ''}`}>

                {MenuData.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink to ={item.url} className={item.ClassN}>
                                {item.title}
                            </NavLink>
                        </li>
                    );
                })}

            </ul>
        </nav>
    )
}

export default Navbar
