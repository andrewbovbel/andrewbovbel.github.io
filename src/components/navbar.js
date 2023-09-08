import React from 'react';
import { NavLink } from "react-router-dom";



function NavBar() {

    return (
        <div> 
            <nav>
                <NavLink to="/"> home </NavLink> <br/>
                <NavLink to="/about"> about </NavLink> <br/>
                <NavLink to="/resume"> resume </NavLink> <br/>
                <NavLink to="/terminal"> terminal </NavLink>
               
            </nav>
        </div>
    )

}

export default NavBar