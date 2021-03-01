import React from 'react'
import {NavLink} from 'react-router-dom'


 function Navbar() {


    return (
            <nav>
                <li>
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
                    <Navbar to="/contact">contact</Navbar>
                </li>
            </nav>
    )
}

export default Navbar;


