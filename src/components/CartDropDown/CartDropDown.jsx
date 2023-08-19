import Button from "../Button/Button.jsx";
import {useContext} from "react";
import {CartContex} from "../../contex/CartContex.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {useNavigate} from "react-router-dom";
import {CartDropDownContainer, EmptyMessage,CartItems} from "./CartDropDownStyle";

const CartDropDown = () => {
    const {cartItems} = useContext(CartContex);
    const navigate = useNavigate();
    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }
    return (
        <CartDropDownContainer>
            <CartItems>
                {
                    cartItems.length ? (cartItems.map(item => <CartItem key={item.id} cartItem={item}/>))
                    : (<EmptyMessage>Your Cart is Empty!</EmptyMessage>)
                }
            </CartItems>
            <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
        </CartDropDownContainer>
    );
};

export default CartDropDown;
