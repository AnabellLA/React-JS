import { collection, getFirestore, addDoc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from "../Context/CartContext";
import Button from 'react-bootstrap/Button';
import Swal from "sweetalert2";
import "./UserForm.css"
import { useNavigate, Link } from "react-router-dom";

const NewClient = () => {

    const { cart, getTotal, clearCart } = useContext(CartContext);
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const[empty, setEmpty] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (cart.length === 0){
            setEmpty(true);
        }else{
            setEmpty(false);
        }
    }, [cart.length]);

    const nameHandler = (event) => {
        setUserName(event.target.value)
    };

    const mailHandler = (event) => {
        setUserMail(event.target.value)
    };

    const phoneHandler = (event) => {
        setUserPhone(event.target.value)
    };

    const clickHandler = () => {
        if (userName == "" || userMail == "" || userPhone == "" || empty){
            Swal.fire({
                title: 'Atención',
                text: `Por favor ingrese sus datos completos`,
                icon: 'error',
                confirmButtonText: "aceptar",
                timer: 3000
            })
        }else{
            agregarOrden()
        }
    }

    const agregarOrden = () => {
            const fecha = new Date();
            const client = {
                buyer: {
                    email: userMail,
                    name: userName,
                    phone: userPhone,
                },
                date: fecha.toLocaleDateString(),
                items: cart.map((element) => {
                        return {
                            id: element.producto.id,
                            price: element.producto.precio,
                            title: element.producto.nombre,
                        }
                    }),
                total: getTotal()
            };
            const db = getFirestore();
            const clientesCollection = collection(db, "clientes");
            addDoc(clientesCollection, client).then(({ id }) => {Swal.fire({
                title: `Código de compra: ${id}`,
                text: `Gracias por su compra ${client.buyer.name}! el total es ${client.total} soles, todo el detalle será enviado a su correo ${client.buyer.email}`,
                icon: 'success',
                confirmButtonText: "retornar al menú",
                timer: 6000
            }).then(resultado => {
                if (resultado.value) {
                    clearCart();
                    navigate('/home')
                }else{
                    clearCart();
                    navigate('/home')
                }
            })
        });       
    }


    return (
        empty ?
        (<div id='mensaje'>
            <h1>No hay elemenos en el carrito</h1>
            <Link to="/home">
                <Button variant="dark">Volver al menú</Button>
            </Link>
        </div>) : 
        (<form id="formulario">
        <label id="label" htmlFor="name">Nombre completo</label>
        <input id="name" type="text" name="name" onChange={nameHandler}/>
        <label id="label" htmlFor="mail">Correo electrónico</label>
        <input id="mail" type="email" onChange={mailHandler}/>
        <label id="label" htmlFor="phone">Teléfono</label>
        <input id="phone" type="tel" placeholder="+51" onChange={phoneHandler}/>
        <br/>
        <Button variant="dark" onClick={clickHandler}>Enviar</Button>
        </form>)
    )    
}

export default NewClient;

