import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import './Item.css';
import { Link } from 'react-router-dom';

export const Item = ({mangaid, name, image, price, stock}) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {image} alt={name} id="imagen" />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>S/ {price}</Card.Text>
                    <ItemCount stock={stock}/>
                    <Link to={`/item/${mangaid}`}>
                        <Button variant="dark">Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
    )
}