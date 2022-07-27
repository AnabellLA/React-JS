import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import loading from '../loading.gif';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const { iditem } = useParams();

    useEffect( ()=> {
        setIsLoading(true);
        const db = getFirestore();
        const mangaRef = query(collection(db, "productos"), where("id", "==", iditem));
        setTimeout( () =>
            getDocs(mangaRef).then((snapshot) => {
                setProducto(snapshot.docs.map((doc) => doc.data()))
            })
            .finally(() => setIsLoading(false))
            ,2000);
    }, [])

    return (
        producto.length > 0 ?
        (isLoading ? (<img src={ loading } alt='loading' id='loading'></img>) :
        (<ItemDetail producto={producto}/>)) :
        (isLoading ? (<img src={ loading } alt='loading' id='loading'></img>) : 
        (<h1 id='error'>La página que buscas no se pudo encontrar 😞 ...</h1>)
        )
    );
    };

export default ItemDetailContainer;