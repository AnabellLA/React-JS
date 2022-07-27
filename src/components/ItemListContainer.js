import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import loading from '../loading.gif';
import { getFirestore, collection, orderBy, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

const [productos, setproductos] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const {idcategoria} = useParams();

useEffect( ()=> {
    setIsLoading(true);
    if (idcategoria !== undefined) {
        const db = getFirestore();
        const mangaRef = query(collection(db, "productos"), where("categoria", "==", idcategoria), orderBy("nombre", "asc"));
        setTimeout( () =>
            getDocs(mangaRef).then((snapshot) => {
                setproductos(snapshot.docs.map((doc) => doc.data()))
            })
            .finally(() => setIsLoading(false))
            ,2000);
    }else{
        const db = getFirestore();
        const mangaTodo = query(collection(db, "productos"), orderBy("nombre"))
        setTimeout( () =>
            getDocs(mangaTodo).then((snapshot) => {
                setproductos(snapshot.docs.map((doc) => doc.data()))
            })
            .finally(() => setIsLoading(false))
            ,2000);    
    }
}, [idcategoria])

return (
productos.length > 0 ?
        (isLoading ? (<img src={ loading } alt='loading' id='loading'></img>) :
        (<div id='container'>
            <ItemList Productos={productos} />
        </div>)) :
        ((isLoading ? (<img src={ loading } alt='loading' id='loading'></img>) : 
        (<h1 id='error'>La página que buscas no se pudo encontrar 😞 ...</h1>)
        ))
);
};

export default ItemListContainer;