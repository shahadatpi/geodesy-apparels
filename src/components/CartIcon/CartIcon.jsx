import {ReactComponent as ShoppingIcon} from "../../assets/images/shopping-bag.svg";

import './CartIcon.scss';
import {useContext} from "react";
import {CartContex} from "../../contex/CartContex.jsx";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContex);
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    );
};

export default CartIcon;
