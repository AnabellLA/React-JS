import { useState, useEffect } from "react";
import "./ItemCount.css";
import Swal from "sweetalert2";
import Button from 'react-bootstrap/Button';


function ItemCount({ stock }, props){
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
    
    const newNumber = () => {
        const numberSaved = {
            number: num
        }

        props.onSaveData(numberSaved)
    }

    return(
        <>
            <div id="flex">
                <button onClick={restar} id="button">–</button>
                <h3>{num}</h3>
                <button onClick={sumar} id="button">+</button>
            </div>
            <p>{ stock >= 1 ? `${stock} unidades disponibles` : 'No hay stock' }</p>
            <Button variant="dark" onClick={newNumber}>Agregar al carrito</Button>
        </>
    )
}

export default ItemCount;