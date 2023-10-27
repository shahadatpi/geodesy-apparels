import {Fragment} from 'react';
import {Outlet} from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import './NavigationStyle.jsx';
import CartIcon from "../../components/CartIcon/CartIcon.jsx";
import CartDropDown from "../../components/CartDropDown/CartDropDown.jsx";
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./NavigationStyle";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentUser} from "../../Store/User/userSelector.js";
import {selectIsCartOpen} from "../../Store/Cart/cartSelector.js";
import {signOutStart} from "../../Store/User/userAction.js";

const Navigation = () => {
    const currentUser = useSelector(selectCurrentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const signOutUser = ()=> dispatch(signOutStart());

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
