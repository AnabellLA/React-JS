import './ItemListContainer.css';
import Card from 'react-bootstrap/Card';

function ItemListContainer({ product , price , Img }) {
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src= {Img} id="imagen" />
            <Card.Body>
            <Card.Title>{product}</Card.Title>
                    <Card.Text>{price}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ItemListContainer;