import './CartIconStyle.jsx';
import {CartIconContainer, ItemCount, ShoppingIcon} from "./CartIconStyle";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../Store/Cart/cartSelector.js";
import {setIsCartOpen} from "../../Store/Cart/cartAction.js";

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);
    const isCartOpen = useSelector(selectIsCartOpen);

    const toggleIsCartOpen = ()=> dispatch(setIsCartOpen(!isCartOpen));
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon" />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;
