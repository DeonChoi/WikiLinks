import React from 'react';
import '../styles/nav.css';

import { Link } from "react-router-dom";

const Nav = () => {

    return (
        <nav>
            <h1 className='title'>WikiLinks</h1>
            <ul className='nav-links-bar'>
                <Link to={'/home'} className="nav-links">
                    <li>Home</li>
                </Link>
                <Link to={'/mywikilinks'} className="nav-links">
                    <li>My WikiLinks</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
