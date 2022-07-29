import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavBarCategories = () => {
    const categories = [
        {id: 'catalogo', address: '/catalogo', text: 'Catálogo'},
        {id: 'josei', address: '/categoria/Josei', text: 'Josei'},
        {id: 'seinen', address: '/categoria/Seinen', text: 'Seinen'},
        {id: 'shojo', address: '/categoria/Shojo', text: 'Shōjo'},
        {id: 'shounen', address: '/categoria/Shounen', text: 'Shounen'},
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