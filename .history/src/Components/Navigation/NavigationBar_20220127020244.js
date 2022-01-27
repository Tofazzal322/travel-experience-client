import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import useAuth from "../../hook/useAuth";
import "./navigation.css";

const NavigationBar = () => {
  const { user, logOut } = useAuth();

  return (
    <Navbar
      className="px-4 navigation-bar-main "
      sticky="top"
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Navbar.Brand as={HashLink} to="/Home">
        <span className="brand-name">ASPEN</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Nav.Link className="fs-6 text-light " as={HashLink} to="/home">
            Home
          </Nav.Link>
          <Nav.Link className="fs-6 text-light " as={HashLink} to="/travel">
            Travel Experience
          </Nav.Link>
          <Nav.Link className="fs-6 text-light " as={HashLink} to="/contact">
            Contact
          </Nav.Link>
          <Nav.Link className="fs-6 text-light " as={HashLink} to="/FQA">
            FQA
          </Nav.Link>

          {user?.email && (
            <Nav.Link
              className="fs-6 text-light "
              as={HashLink}
              to="/dashboard"
            >
              Dashboard
            </Nav.Link>
          )}
        </Nav>
        <Nav className="ms-auto">
          <Nav.Link className="fs-6 text-light " as={HashLink} to="/Contact">
            {user?.displayName}
          </Nav.Link>
          {/* <div className="text-center">
            <img
              className="userPhoto"
              src={user.photoURL}
              alt="userImg"
            />
          </div> */}

          {user?.email ? (
            <Button
              className=" nav-items-btn m-0 fs-6 text-light me-auto p-0 "
              onClick={logOut}
              variant="button"
            >
              Logout
            </Button>
          ) : (
            <Nav.Link className="fs-6 text-light " as={HashLink} to="/Login">
              Login
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;