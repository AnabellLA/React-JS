import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

//import { getFirestore, doc, collection, getDoc, getDocs, query, where } from 'firebase/firestore';

const ItemListContainer = () => {

const [productos, setproductos] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const {idcategoria} = useParams();

useEffect(() => {
    setIsLoading(true);
    setTimeout(
        () =>
            fetch('../data/data.json')
            .then(resp => resp.json())
            .then((data) => {setproductos(idcategoria ? data.filter((item) => item.categoria === idcategoria) : data)})
            .finally(() => setIsLoading(false))
            , 2000);
}, [idcategoria])

/*useEffect( ()=> {
    const db = getFirestore();
    const mangaRef = query(collection(db, "productos"), where("price", "<", 120))
    getDocs(mangaRef).then((snapshot) => {
        setproductos(snapshot.docs.map((doc) => doc.data()))
    })
}, [])*/

return (
    isLoading ? (<h1>Cargando...</h1>) :
    (<div id='container'>
        <ItemList Productos={productos} />
    </div>)
);
};

export default ItemListContainer;