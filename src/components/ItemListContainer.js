import React, { useEffect, useState, setIsLoading } from 'react';
import { ItemList } from './ItemList';
import './ItemListContainer.css';

const ItemListContainer = () => {

const [productos, setproductos] = useState([])

    useEffect(() => {
        setTimeout(
            () =>
                fetch('./data/data.json')
                .then(resp => resp.json())
                .then(data => setproductos(data)), 2000
        );
    }, [])

    return (
        <div id='container'>
            <ItemList Productos={productos} />
        </div>
    );
    };

export default ItemListContainer;