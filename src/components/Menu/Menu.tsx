import React, { FC } from 'react';
import styles from './Menu.module.css';
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom';


interface MenuProps {}

const Menu: FC<MenuProps> = () => (
  <div className={styles.Menu} data-testid="Menu">
     <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/user">Moje konto</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/registration">Rejestracja</Nav.Link>
            <Nav.Link as={Link} to="/sign-in">Zaloguj</Nav.Link>
            <Nav.Link as={Link} to="/">Wyloguj</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);

export default Menu;
