import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
const Topmenu=()=>{
    return(
        <>
        
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Food Delivery</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="shop">Shop</Nav.Link>
            <Nav.Link as={Link} to="search">Search</Nav.Link>
            <Nav.Link as={Link} to="cake">Cake</Nav.Link>
            <Nav.Link as={Link} to="Pizza">Pizza</Nav.Link>
            <Nav.Link as={Link} to="salad">Salad</Nav.Link>
            <Nav.Link href="#link">Contact us</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


        </>
    )
}

export default Topmenu;