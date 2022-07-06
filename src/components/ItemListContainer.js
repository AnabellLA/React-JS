import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {

const [productos, setproductos] = useState([]);
const [isLoading, setIsLoading] = useState(true);
const {idcategoria} = useParams();
console.log(idcategoria);

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

return (
    isLoading ? (<h1>Cargando...</h1>) :
    (<div id='container'>
        <ItemList Productos={productos} />
    </div>)
);
};

export default ItemListContainer;