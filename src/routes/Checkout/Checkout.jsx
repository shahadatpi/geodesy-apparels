import './Checkout.scss';
import {useContext} from "react";
import {CartContex} from "../../contex/CartContex.jsx";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.jsx";


const Checkout = () => {
    const {cartItems, cartTotal} = useContext(CartContex);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                     <span>Quantity</span>
                </div>
                <div className='header-block'>
                     <span>Price</span>
                </div>
                <div className='header-block'>
                     <span>Remove</span>
                </div>

            </div>
                {cartItems.map((cartItem)=>(
                    <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))}
            <span className='total'>Total: ${cartTotal}</span>
        </div>
    );
};

export default Checkout;
