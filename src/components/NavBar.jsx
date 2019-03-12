import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import styled from "styled-components";

/* const Link = styled(NavLink)`
  color: #fff;
  &:hover {
    background-color: gray;
  }
`; */
export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="md" bg="primary" variant="dark">
      <Navbar.Brand className="hvr-curl-top-left">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto" />
        <Nav>
          <NavLink
            exact
            to="/"
            className="nav-link mx-3 li"
            activeStyle={{
              background: "gray",
              fontWeight: "bold",
              color: "white"
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/posts"
            className="nav-link mx-3 li"
            activeStyle={{
              background: "gray",
              fontWeight: "bold",
              color: "white"
            }}
          >
            Posts
          </NavLink>
          <NavLink
            to="/array"
            className="nav-link mx-3 li"
            activeStyle={{
              background: "gray",
              fontWeight: "bold",
              color: "white"
            }}
          >
            Array
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
