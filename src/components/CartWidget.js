import cart from '../shopping-cart.png';
import './CartWidget.css';

function CartWidget(){
    return(
        <img src={ cart } alt="Cart Widget" id="cart"/>
    )
}

export default CartWidget;