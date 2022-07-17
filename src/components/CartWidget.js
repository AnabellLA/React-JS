import cart from '../shopping-cart.png';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

function CartWidget(){
    return(
        <Nav.Link as={Link} to={"/cart"}><img src={ cart } alt="Cart Widget" id="cart"/></Nav.Link>
    )
}

export default CartWidget;