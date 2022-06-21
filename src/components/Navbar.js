import './Navbar.css';
import CartWidget from './CartWidget.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';


function NavbarExample(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand href="#home"><img src={ logo } alt="logo" id="logo"></img>MangaStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">HOME</Nav.Link>
                    <Nav.Link href="#catalogo">Catálogo</Nav.Link>
                    <Nav.Link href="#faq">FAQ</Nav.Link>
                </Nav>
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarExample;