import Button from "../Button/Button.jsx";
import CartItem from "../CartItem/CartItem.jsx";
import {useNavigate} from "react-router-dom";
import {CartDropDownContainer, EmptyMessage,CartItems} from "./CartDropDownStyle";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../Store/Cart/cartSelector.js";

const CartDropDown = () => {
    const cartItems = useSelector(selectCartItems);
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
