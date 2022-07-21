import { useState, useEffect } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';

function ItemCount({ stock, onAdd }){
    const [num, setNum] = useState(0);

    useEffect(() => {
        if(num == stock - 3){
            Swal.fire({
                title: 'Atención',
                text: 'Quedan pocas unidades',
                icon: 'warning',
                timer: 2000
            })
        }
    }, [num])

    const sumar = () => {
        if(num < stock){
            setNum(num + 1)
        }
        else{
            Swal.fire({
                title: 'Atención',
                text: 'Ya ha llegado al stock máximo de este producto',
                icon: 'warning',
                timer: 2000
            })
        }
    }

    const restar = () => {
        if (num > 0){
            setNum(num - 1)
        }
    }
    
    const addToCart = () => {
        onAdd(num);
    }

    return(
        <>
            <div id="flex">
                <button onClick={restar} id="button">–</button>
                <h3>{num}</h3>
                <button onClick={sumar} id="button">+</button>
            </div>
            <Button variant="dark" onClick={addToCart}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;