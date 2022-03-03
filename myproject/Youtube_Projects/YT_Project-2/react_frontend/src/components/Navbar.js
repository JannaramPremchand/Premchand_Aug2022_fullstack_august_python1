import { Link } from "react-router-dom";
import React from 'react';
import {  Nav, Navbar } from "react-bootstrap";

const NavbarMenu = () => {
    return (
        <Navbar bg="dark" expand="lg">
        
    <Navbar.Brand href="#home">
      <img
        src="/logo1.png"
        width="100rem"
        height="100rem"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-products mx-3 my-2" to="/">Products</Link>
            <Link className="nav-addProducts mx-3 my-2" to="/addproduct">Add Products</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
};

export default NavbarMenu;