import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export const NavBarComp = () => {
    return (
        <>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand as={Link} to={'/formula1'}>FORMULA 1</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#pistas">PISTAS</Nav.Link>
              <Nav.Link href="#autos">AUTOS</Nav.Link>
              <NavDropdown title="NOTICIAS" id="collapsible-nav-dropdown">
                <NavDropdown.Item as={Link} to={'/Carreras'}>Carreras</NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/Calendarios'}>
                  Calendarios
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/Clasificacion'}>  Clasificación </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to={'/momentos'}>
                   Mejores momentos en las carreras
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to={'/pilotos'}>  Mejores pilotos </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section>
        <Outlet>

        </Outlet>
      </section>
      </>
    );
};

export default NavBarComp;