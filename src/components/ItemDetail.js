import React, { useState } from 'react';
import './ItemDetail.css';
import ItemCount from './ItemCount';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


export const ItemDetail = ({producto}) => {
    
    const stock = producto.stock

    const saveDataHandler = (numberSaved) => {
        const countData = {
            ...numberSaved,
        }
    }

    return (
            <div id='itemDetail'>
                <div id='imagebox'>
                    <img src={producto.imagen} alt={producto.nombre} id='imageSmall'/>
                    <img src={producto.imagen} alt={producto.nombre} id='imageFull'/>
                </div>
                <div id='detail'>
                    <h2 id='nombre'>{producto.nombre}</h2>
                    <h3 id='autor'>{producto.autor}</h3>
                    <h1 id='precio'>S/ {producto.precio}</h1>
                    <p id='sinopsis'>{producto.sinopsis}</p>
                    <ItemCount onSaveData={saveDataHandler} stock={stock}/>
                <li id='list'>
                    <ul id='listItem'>Formato: {producto.formato}</ul>
                    <ul id='listItem'>Dimensiones: {producto.dimensiones}</ul>
                    <ul id='listItem'>Fecha de publicación: {producto.fecha_pub}</ul>
                    <ul id='listItem'>Editorial: {producto.editorial}</ul>
                    <ul id='listItem'> Idioma: {producto.idioma}</ul>
                    <ul id='listItem'>ISBN10: {producto.ISBN10}</ul>
                    <ul id='listItem'> ISBN13: {producto.ISBN13}</ul>
                </li>
                <Link to={`/cart`}>
                    <Button id="terminar" variant="danger">Terminar mi compra</Button>
                </Link>
                </div>
            </div>
    )
}
