import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
// import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hook/useAuth";
// import Navigation from "../Navigation/navigation.css"
import "./navigation.css"

const NavigationBar = () => {
  const { user, logOut } = useAuth();

  return (
   

    <Navbar
      className="px-4 navigation-bar-main "
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="light"
    >
      <Navbar.Brand as={HashLink} to="/Home">
        <span className="brand-name">ASPEN</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="fs-5 text-light " as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link className="fs-5 text-light " as={HashLink} to="/blog">
            Blog
          </Nav.Link>
          <Nav.Link className="fs-5 text-light " as={HashLink} to="/shop">
            Contact
          </Nav.Link>
          <Nav.Link className="fs-5 text-light " as={HashLink} to="/FQA">
            FQA
          </Nav.Link>

         
        

         
          {user?.email && (
            <Nav.Link className="fs-5 text-light " as={HashLink} to="/dashboard">
              Dashboard
            </Nav.Link>
          )}

        </Nav>
        <Nav className="ms-auto">
          <Nav.Link className="fs-5 text-light " as={HashLink} to="/Contact">
            {user?.displayName}
          </Nav.Link>
          {user?.email ? (
            <>
              
              </>
          ) : (
            <Nav.Link className="fs-5 text-light " as={HashLink} to="/Login">
              Login
            </Nav.Link>
          )}
            
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;