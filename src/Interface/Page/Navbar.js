import React from 'react'
import {NavLink} from 'react-router-dom'

 function Navbar() {


    return (
            <nav className="navbar navbar-dark bg-dark">
                <li className="">
                    <NavLink to="/Home">Home</NavLink>
                </li>

                <li>
                    <NavLink to ="/Idea">Idea</NavLink>
                </li>

                <li>
                    <NavLink to="/event"> event</NavLink>
                </li>

                <li>
                    <NavLink to="/YourFamily"> your family</NavLink>
                </li>

                <li>
                    <NavLink to="/contact">contact</NavLink>
                </li>

                <li>
                    <NavLink to="/Interface">Interface</NavLink>
                </li>

                <li>
                    <NavLink to="/Login">Login</NavLink>
                </li>
            </nav>
    )
}

export default Navbar;


