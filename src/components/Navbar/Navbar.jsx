import React from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

import './Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <div className='navbar-header'>
                <h1 className='header-text'>ignite lab</h1>
                <span className='header-line'>|</span>
                <span className='header-subtxt'>ReactJs</span>
            </div>
            <div className='navbar-right'>
                <button className='navbar-btn'>
                    <AiOutlineMenu />
                </button>
            </div>
        </div>
    );
}
