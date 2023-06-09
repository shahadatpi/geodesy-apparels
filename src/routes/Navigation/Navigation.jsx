import {Fragment} from 'react';
import {Link, Outlet} from "react-router-dom";
import Logo from '../../assets/images/crown.svg';
import './Navigation.scss';

const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <img className="logo" src={Logo} alt="Company Logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to="/shop">SHOP</Link>
                    <Link className="nav-link" to="/signin">SIGN IN</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;
