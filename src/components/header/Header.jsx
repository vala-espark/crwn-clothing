import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import './Header.scss'

const Header = ({ currentUser }) => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col col-4">
                            <div className="logo">
                                <Link to="/">
                                    <span className="logo_img"></span>
                                </Link>
                            </div>
                        </div>
                        <div className="col col-8">
                            <div className="header-menu-list">
                                <ul>
                                    <li className="header-menu-item">
                                        <NavLink exact to="/">Home</NavLink>
                                    </li>
                                    <li className="header-menu-item">
                                        <NavLink exact to="/shop">Shop</NavLink>
                                    </li>
                                    <li className="header-menu-item">
                                        <NavLink exact to="/contact">Contact</NavLink>
                                    </li>
                                    {
                                        currentUser ?
                                                <li className="header-menu-item">
                                                    <a onClick={() => auth.signOut()}>Sign out</a>
                                                </li>
                                            :
                                                <li className="header-menu-item">
                                                    <NavLink exact to="/login">Login</NavLink>
                                                </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;
