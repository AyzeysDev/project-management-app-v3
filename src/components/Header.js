import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
              <Navbar.Brand><i className= 'fa fa-terminal'></i> Project Management <i className= 'fa fa-terminal'></i></Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <LinkContainer to='/project'>
              <Nav.Link><i className= 'fa fa-code'></i> Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to='/add'>
              <Nav.Link><i className= 'fa fa-plus'></i> Add Project</Nav.Link>
            </LinkContainer>
            </Nav>
            </Navbar.Collapse>
          </Container>
      </Navbar>
    </header>
  )
}

export default Header

