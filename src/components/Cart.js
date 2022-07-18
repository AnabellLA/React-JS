import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { CartContext } from "./Context/CartContext";
import Table from 'react-bootstrap/Table';
import tacho from '../tacho.png';
import './Carts.css';


const CartView = () => {

    const { cart, removeFromCart, clearCart /*, getQuantity, getTotal*/ } = useContext(CartContext);
    const[empty, setEmpty] = useState(true);

    useEffect(() => {
        if (cart.length === 0){
            setEmpty(true);
        }else{
            setEmpty(false);
        }
    }, [cart.length]);

    const getQuantity = () => {
        let totalCantidad=0;
        {cart.map( element =>  totalCantidad = ( totalCantidad + parseInt(element.quantity)) )}
        return totalCantidad;    
    }

    const getTotal = () =>{
        let totalPrecio=0;
        {cart.map( element =>  totalPrecio = ( totalPrecio + ( parseInt(element.producto.precio) * parseInt(element.quantity)) ))}
        return totalPrecio;    
    }

    if(!empty) {
        return(
            <div>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Cantidad</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Precio</th>
                            <th>Total</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map((element) => (
                        <tr key={element.producto.id}>
                            <td>{element.quantity} und.</td>
                            <td><img id='elementImg' src={element.producto.imagen}/></td>
                            <td>{element.producto.nombre}</td>
                            <td>S/ {element.producto.precio}</td>
                            <td>S/ {element.quantity * element.producto.precio}</td>
                            <td><button onClick={() => removeFromCart(element.producto.id)} id="tachoButton"><img src={ tacho } alt="tacho" id="tachoImg"/></button></td>
                        </tr>))}
                    </tbody>
                </Table>
                <p id='tablaTotales'>Cantidad Total: {getQuantity()} und.</p>
                <p id='tablaTotales'>Precio Total: S/ {getTotal()}</p>
                <Link to="/home">
                    <Button onClick={() => clearCart()} variant="dark">Terminar mi compra</Button>
                </Link>{'  '}
                <Button onClick={() => clearCart()} variant="dark">Limpiar carrito</Button>
            </div>
        )
    }else{
        return (
            <div>
                <h1 id='mensaje'>No hay elemenos en el carrito</h1>
                <Link to="/home">
                    <Button variant="dark">Volver</Button>
                </Link>
            </div>
        )
    }
    };

export default CartView;