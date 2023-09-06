import React from 'react';
import { NavLink } from "react-router-dom";
// import "./navbar.css";
import { useState, useEffect, useRef } from "react";
// import useTheme from "../theme";
// import { CSSTransition } from "react-transition-group";


function NavBar() {

    return (
        <div> 
            <nav>
                <NavLink to="/"> home </NavLink> <br/>
                <NavLink to="/about"> about </NavLink> <br/>
                <NavLink to="/resume"> resume </NavLink> <br/>
               
            </nav>
        </div>
    )

}

export default NavBar