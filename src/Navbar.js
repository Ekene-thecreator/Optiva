import React from 'react'
import logo from './logo.png'

export default function Navbar() {
    return (
        <div classname='navbar'>
            <nav>
                <div className='navlogo-cont'>
                    <img src={logo} height="50vh"/>
                </div>
                <ul className='navlinks'>
                    <li><a>Home</a></li>
                    <li><a>Locatioin</a></li>
                    <li><a>Our Clients</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </div>
    )
}
