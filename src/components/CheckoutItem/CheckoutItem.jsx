import './CheckoutItem.scss';
import {useDispatch, useSelector} from "react-redux";
import {addItemToCart, clearItemFromCart, removeItemToCart} from "../../Store/Cart/cartAction.js";
import {selectCartItems} from "../../Store/Cart/cartSelector.js";

const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, price, quantity} = cartItem;
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();
    const clearItemHandler = ()=> dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = ()=> dispatch(addItemToCart(cartItems, cartItem));
    const removeItemHandler = ()=> dispatch(removeItemToCart(cartItems, cartItem));

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price*quantity}</span>
            <div onClick={clearItemHandler} className='remove-button'>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;
