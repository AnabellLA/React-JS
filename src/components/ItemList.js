import React from 'react'
import { Item } from './Item'
import './ItemList.css'

export const ItemList = ({ Productos }) => {

    return(
        <div id="itemList">
            {Productos.map( (manga) => <Item key= {manga.id} name={manga.nombre} image={manga.imagen} price={manga.precio} stock={manga.stock} /> )}
        </div>
    )
}