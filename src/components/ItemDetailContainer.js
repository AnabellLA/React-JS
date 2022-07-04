import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({});

    useEffect(() => {
        setTimeout(
            () =>
                fetch('./data/data.json')
                .then(resp => resp.json())
                .then((data) => {setproducto(data.find((i) => i.id === 1))})                
                , 2000);
    }, [])

    return (
        <ItemDetail producto={producto}/>
    );
    };

export default ItemDetailContainer;