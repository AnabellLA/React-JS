import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';

const ItemDetailContainer = () => {
    const [producto, setproducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        setTimeout(
            () =>
                fetch('./data/data.json')
                .then(resp => resp.json())
                .then((data) => {setproducto(data.find((i) => i.id === 1))})
                .finally(() => setIsLoading(false))                
                , 2000);
    }, [])

    return (
        isLoading ? (<h1>Cargando...</h1>) :
        (<ItemDetail producto={producto}/>)
    );
    };

export default ItemDetailContainer;