import './CartDropDown.scss';
import Button from "../Button/Button.jsx";
const CartDropDown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                <Button>Go to Checkout</Button>
            </div>
        </div>
    );
};

export default CartDropDown;
