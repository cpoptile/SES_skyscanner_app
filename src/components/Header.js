import React from 'react';
import './Header.css';
import logo from './skyscanner.png';

function Header(props) { 
    return(
        <div className="header">
            {props.title}
            <img src={logo} className = "header-logo" alt="logo" />
        </div>
    )
}

export default Header;