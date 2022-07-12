import React, { useState, createContext } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const addToCart = (item, quantity) => {
        if(isInCart(item.id)){
            const newCart = [...cart]
            for(const element of newCart) {
                if (element.item.id === item.id && element.item.stock < (element.quantity + quantity))
                Swal.fire({
                    title: 'Atención',
                    text: `El stock máximo de este producto es ${element.item.stock} unidades, puedes agregar ${element.item.stock - element.quantity}`,
                    icon: 'warning',
                    timer: 2000
                });
            }
            for(const element of newCart) {
                if (element.item.id === item.id && element.item.stock >= (element.quantity + quantity))
                    element.quantity = element.quantity + quantity;
                
            }
            setCart(newCart);  
        }
        else{
            setCart(
                [
                    ...cart,
                    {
                        item: item,
                        quantity: quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        return cart.find((element) => element.item.id === id)
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.item.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const context = {
        cart,
        addToCart,
        removeFromCart,
        clearCart
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
    
}