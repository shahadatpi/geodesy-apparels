import {Fragment, useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import './NavigationStyle.jsx';
import {UserContex} from "../../contex/UserContex.jsx";
import {signOutUser} from "../../utilities/Firebase/Firebase.js";
import CartIcon from "../../components/CartIcon/CartIcon.jsx";
import CartDropDown from "../../components/CartDropDown/CartDropDown.jsx";
import {CartContex} from "../../contex/CartContex.jsx";
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./NavigationStyle";

const Navigation = () => {
    const {currentUser} = useContext(UserContex);
    const {isCartOpen} = useContext(CartContex);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to="/">
                    <img className="logo" src={Logo} alt="Company Logo"/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
                        ): (
                            <NavLink to="/signin">SIGN IN</NavLink>
                        )
                    }
                  <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropDown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
