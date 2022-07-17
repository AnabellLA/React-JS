import React, { useState, createContext } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext({})

const {Provider} = CartContext

export const CartProvider = ({ defaultValue = [], children }) => {

    const [cart, setCart] = useState(defaultValue);

    const addToCart = (producto, quantity) => {
        if(isInCart(producto.id)){
            const newCart = [...cart]
            for(const element of newCart) {
                if (element.producto.id === producto.id && element.producto.stock < (element.quantity + quantity))
                Swal.fire({
                    title: 'Atención',
                    text: `El stock máximo de este producto es ${element.producto.stock} unidades, puedes agregar ${element.producto.stock - element.quantity}`,
                    icon: 'warning',
                    timer: 2000
                });
            }
            for(const element of newCart) {
                if (element.producto.id === producto.id && element.producto.stock >= (element.quantity + quantity))
                    element.quantity = element.quantity + quantity;
                
            }
            setCart(newCart);  
        }
        else{
            setCart(
                [
                    ...cart,
                    {
                        producto: producto,
                        quantity: quantity
                    }
                ]
            )
        }
    }

    const isInCart = (id) => {
        return cart.find((element) => element.producto.id === id)
    }

    const removeFromCart = (id) => {
        const newCart = [...cart].filter(element => element.producto.id !== id);
        setCart(newCart);
    }

    const clearCart = () => {
        setCart([]);
    }

    const getQuantity = () => {
        let cantidad = 0
        cart.forEach((element) => cantidad = cantidad + element.quantity)
        return cantidad
    }

    const getTotal = () => {
        let total = 0
        cart.forEach((element) => {
            total = total + (element.quantity * element.producto.precio)
        })
    }

    const context = {
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getQuantity,
        getTotal
    }

    return (
        <Provider value={context}>
            {children}
        </Provider>
    )
    
}