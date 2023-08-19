import './CartIconStyle.jsx';
import {useContext} from "react";
import {CartContex} from "../../contex/CartContex.jsx";
import {CartIconContainer, ItemCount, ShoppingIcon} from "./CartIconStyle";

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContex);
    const toggleIsCartOpen = ()=> setIsCartOpen(!isCartOpen);
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
