import React from 'react';
import './Header.css';
import logo from './sky-logo.png';

function Header(props) { 
    return(
        <div className="header">
            <img src={logo} className = "header-logo"  width="200" alt="logo"  />
            <span>{props.title}</span>
        </div>
    )
}

export default Header;