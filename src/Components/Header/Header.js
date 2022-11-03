import { Button } from 'react-bootstrap';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import logo from '../../images/icons/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
   

    return (
       <div>
            <Navbar expand="lg" className='bg-warning px-3'>
        <Container fluid>
          <Navbar.Brand > <img  style={{height:'56px'}} src={logo} alt=''></img></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to='/'><h6>Home</h6></Nav.Link>
              <Nav.Link as={Link} to='/contact'><h6>Contact us</h6></Nav.Link>
          
             

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
      
};


export default Header;