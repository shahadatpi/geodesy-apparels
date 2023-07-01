import './CartDropDown.scss';
import Button from "../Button/Button.jsx";
import {useContext} from "react";
import {CartContex} from "../../contex/CartContex.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {useNavigate} from "react-router-dom";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContex)
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </div>
    );
};

export default CartDropDown;
