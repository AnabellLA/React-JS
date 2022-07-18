import React, { useContext, useEffect, useState } from 'react';
import cartIcon from '../shopping-cart.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { CartContext } from "./Context/CartContext";


function CartWidget(){
    const { cart, getQuantity } = useContext(CartContext);
    const[empty, setEmpty] = useState(true);

    useEffect(() => {
        if (cart.length === 0){
            setEmpty(true);
        }else{
            setEmpty(false);
        }
    }, [cart.length]);

    if(!empty) {
        return(
            <div id='carrito'>
                <Nav.Link as={Link} to={"/cart"}><img src={ cartIcon } alt="Cart Widget" id="cart"/></Nav.Link>
                <span id='cantidad'>{getQuantity()}</span>
            </div>
        )    
    }else{
        return(
            <div>
                <Nav.Link as={Link} to={"/cart"}><img src={ cartIcon } alt="Cart Widget" id="cart"/></Nav.Link>
            </div>
        )    
    }
}

export default CartWidget;