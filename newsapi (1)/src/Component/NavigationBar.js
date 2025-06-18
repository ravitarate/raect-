

import {LinkContainer} from "react-router-bootstrap";
import {Container, Nav, Navbar} from "react-bootstrap";

export function NavigationBar(){


    return(
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">News API</Navbar.Brand>
       
          <Nav className="me-auto">
            <LinkContainer to="/">
                <Nav.Link>Top News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/all-news">
                <Nav.Link>All News</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/weather">
                <Nav.Link>Weather</Nav.Link>
            </LinkContainer>
          
          </Nav>
        
        </Container>
      </Navbar>
      
    )
}