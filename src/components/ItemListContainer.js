import './ItemListContainer.css';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

function ItemListContainer({ product , price , Img }) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {Img} id="imagen" />
            <Card.Body>
            <Card.Title>{product}</Card.Title>
                    <Card.Text>{price}</Card.Text>
                    <ItemCount stock='6'/>
            </Card.Body>
        </Card>
    )
}

export default ItemListContainer;