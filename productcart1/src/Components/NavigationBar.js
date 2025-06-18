

import {LinkContainer} from "react-router-bootstrap";
import {Container, Nav, Navbar} from "react-bootstrap";

export function NavigationBar(){


    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Product Shop</Navbar.Brand>
       
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Add-To-Cart</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/cart">
                <Nav.Link>Cart</Nav.Link>
            </LinkContainer>
          
          </Nav>
        
        </Container>
      </Navbar>
      
    )
}