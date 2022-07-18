import React, { useEffect, useState } from 'react';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';


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
        isLoading ? (<h1>Cargando...</h1>) :
        (<ItemDetail producto={producto}/>)
    );
    };

export default ItemDetailContainer;