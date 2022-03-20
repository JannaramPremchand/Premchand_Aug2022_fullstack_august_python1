import { Link } from "react-router-dom";
import React from 'react';
import {  Nav, Navbar, Button} from "react-bootstrap";

const NavbarMenu = () => {
    return (
    
        
    <Navbar bg="light" expand="lg">
         <Navbar.Brand href="http://127.0.0.1:8000/">
        
      <img
   
        src="http://terrylu.tech/2021/05/22/leetcode/cover.png"
        width="250rem"
        height="100rem"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          <Link className="nav-problems" to="/">Problems</Link>
          <Link className="nav-problems" to="/addproblems">Add Problems</Link>
          <Link className="nav-problems" to="/adminpanel">Admin</Link>
         
          </Nav>
        </Navbar.Collapse>
        <div className="">
        <Button variant="primary" href="http://127.0.0.1:8000/signup/" className="mx-3">Signup</Button>
        <Button variant="primary" href="http://localhost:8000/signin/" className="mx-3">signin</Button>
        </div>
      </Navbar>
    
    );
};

export default NavbarMenu;