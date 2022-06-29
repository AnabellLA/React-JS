import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ItemCount from './ItemCount';
import './Item.css';

export const Item = ({name, image, price}) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src= {image} alt={name} id="imagen" />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                    <Card.Text>S/ {price}</Card.Text>
                    <ItemCount stock='6'/>
                    <Button variant="dark">Ver más</Button>
                </Card.Body>
            </Card>
    )
}