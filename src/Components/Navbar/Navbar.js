import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import {NavLink} from "react-router-dom";
import "./Navbar.scss"

const MainNavbar = () => {
    return (
        <header className="main-header">
            <Navbar sticky="top">
                <NavLink className="navbar-brand" to='/'>Sweater Weather</NavLink>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="ml-auto">
                        <NavLink className="nav-link" to='/signin'>SignIn</NavLink>
                        <NavLink className="nav-link" to='/signup'>SignUp</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header>
    )
}

export default MainNavbar;