import './Navbar.css';
import CartWidget from './CartWidget.js';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../logo.png';
import { NavBarCategories } from './NavbarCategories';
import { Link } from 'react-router-dom';


function NavbarExample(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home"><img src={ logo } alt="logo" id="logo"></img>MangaStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <NavBarCategories />
                <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarExample;