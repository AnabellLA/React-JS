import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBarCategories = () => {
    const categories = [
        {id: 'catalogo', address: '/catalogo', text: 'Catálogo'},
        {id: 'shounen', address: '/categoria/Shounen', text: 'shounen'},
        {id: 'shojo', address: '/categoria/Shojo', text: 'Shōjo'},
        {id: 'josei', address: '/categoria/Josei', text: 'Josei'},
    ];

    return(
        <Nav className="me-auto">
            {categories.map((cat) => {
                return (
                    <Nav.Link as={Link} to={cat.address} className="links" key={cat.id}>{cat.text}</Nav.Link>
                );
            })}
        </Nav>
    )
}