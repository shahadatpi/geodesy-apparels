import {Fragment, useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import './Navigation.scss';
import {UserContex} from "../../contex/UserContex.jsx";
import {signOutUser} from "../../utilities/Firebase/Firebase.js";
import CartIcon from "../../components/CartIcon/CartIcon.jsx";
import CartDropDown from "../../components/CartDropDown/CartDropDown.jsx";
import {CartContex} from "../../contex/CartContex.jsx";

const Navigation = () => {
    const {currentUser} = useContext(UserContex);
    const {isCartOpen} = useContext(CartContex);

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={Logo} alt="Company Logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                        ): (
                            <Link className="nav-link" to="/signin">SIGN IN</Link>
                        )
                    }
                  <CartIcon/>
                </div>
                {isCartOpen && <CartDropDown/>}
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
