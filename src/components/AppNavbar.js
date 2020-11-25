import React from 'react';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const AppNavbar = () => {
  return <Navbar className="navbar navbar-expand-xl navbar-light bg-light">
    <Navbar.Brand href="#home" className="font-weight-bold">Jack & Jill</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown className="nav-item py-lg-4" title="Products" id="collasible-nav-dropdown">
          <NavDropdown.Item as={Link} to='/shirts'>Shirts</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to='/jackets'>Jackets</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item as={Link} to='/accessories'>Accessories</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to='/about'>
          About
          </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
}

export default AppNavbar;
