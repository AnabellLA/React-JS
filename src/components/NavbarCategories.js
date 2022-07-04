import React from 'react';
import { Nav } from 'react-bootstrap';

export const NavBarCategories = () => {
    const categories = [
        {id: 'asfew', address: '/', text: 'Catálogo'},
        {id: 'wefsd', address: '/categoria/Shounen', text: 'shounen'},
        {id: '3rew', address: '/categoria/Shojo', text: 'Shōjo'},
        {id: 'qwdew', address: '/categoria/Josei', text: 'Josei'},
    ];

    return(
        <Nav className="me-auto">
            {categories.map((cat) => {
                return (
                    <Nav.Link href={cat.address} className="links" key={cat.id}>{cat.text}</Nav.Link>
                );
            })}
        </Nav>
    )
}