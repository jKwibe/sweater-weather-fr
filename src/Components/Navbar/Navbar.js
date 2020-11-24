import React from "react";
import Navbar from "react-bootstrap/cjs/Navbar";
import Nav from "react-bootstrap/cjs/Nav";
import "./Navbar.css"

function MainNavbar() {
    return (
        <header className="main-header">
            <Navbar>
                <Navbar.Brand href="#home">Sweater Weather</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                    <Nav className="ml-auto">
                        <Nav.Link href="#">SignIn</Nav.Link>
                        <Nav.Link href="#">SignUp</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        </header>
    )
}

export default MainNavbar;