import React, { useContext, useState } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from "./Context/CartContext";

export const ItemDetail = ({producto}) => {
    
    const stock = producto[0].stock
    const[itemCount, setItemCount] = useState();
    const { addToCart } = useContext(CartContext);

    const onAdd = (num) => {
        setItemCount(num);
        addToCart(producto[0], num);
    }

    return (
            <div id='itemDetail'>
                <div id='imagebox'>
                    <img src={producto[0].imagen} alt={producto[0].nombre} id='imageSmall'/>
                    <img src={producto[0].imagen} alt={producto[0].nombre} id='imageFull'/>
                </div>
                <div id='detail'>
                    <h2 id='nombre'>{producto[0].nombre}</h2>
                    <h3 id='autor'>{producto[0].autor}</h3>
                    <h1 id='precio'>S/ {producto[0].precio}</h1>
                    <p id='sinopsis'>{producto[0].sinopsis}</p>
                <li id='list'>
                    <ul id='listItem'>Formato: {producto[0].formato}</ul>
                    <ul id='listItem'>Dimensiones: {producto[0].dimensiones}</ul>
                    <ul id='listItem'>Fecha de publicación: {producto[0].fecha_pub}</ul>
                    <ul id='listItem'>Editorial: {producto[0].editorial}</ul>
                    <ul id='listItem'> Idioma: {producto[0].idioma}</ul>
                    <ul id='listItem'>ISBN10: {producto[0].ISBN10}</ul>
                    <ul id='listItem'> ISBN13: {producto[0].ISBN13}</ul>
                </li>
                {itemCount > 0 ? (<Link to={`/cart`}>
                    <Button id="terminar" variant="dark">Ir al carrito</Button>
                </Link>) : (<ItemCount onAdd={onAdd} stock={stock}/>) }
                </div>
            </div>
    )
}
