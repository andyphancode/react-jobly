import React, { useState, useContext } from "react";
import "./NavBar.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, NavbarToggler, NavbarBrand, Collapse, Nav, NavLink, NavItem } from "reactstrap";
import UserContext from "../UserContext";


function NavBar({ logout }) {

    const { currentUser } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false); 
    const toggle = () => { setIsOpen(!isOpen) }
    
    function loggedIn() {
      return (

        <Nav className="ms-auto" navbar>
          <NavItem className="me-4">
            <NavLink href="/companies">Companies</NavLink>
          </NavItem>
          <NavItem className="me-4">
              <NavLink href="/jobs">Jobs</NavLink>
          </NavItem>
          <NavItem className="me-4">
              <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <NavItem className="me-4">
              <NavLink href="/" onClick={logout}>Logout {currentUser.username}</NavLink>
          </NavItem>
        </Nav>          

      );      
    };

    function loggedOut() {
      return (
        <Nav className="ms-auto" navbar>
          <NavItem className="me-4">
              <NavLink href="/login">Login</NavLink>
          </NavItem>
          <NavItem className="me-4">
              <NavLink href="/signup">Sign Up</NavLink>
          </NavItem>
        </Nav>          
    );      
    }

    return (

      <Navbar className="NavBar bg-white" expand="md" >
        <NavbarBrand href="/">Jobly</NavbarBrand>
        <NavbarToggler onClick={toggle} /> 
        <Collapse isOpen={isOpen} navbar> 

            {currentUser ? loggedIn() : loggedOut()}
      
        </Collapse>
      </Navbar>
    )

  }
  
  export default NavBar;