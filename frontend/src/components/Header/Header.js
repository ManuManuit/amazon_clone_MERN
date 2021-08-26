import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './Header.css'

const Header = () => {
    const cart = useSelector(state => state.cart);
    // const { cartItems } = cart;

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">
                    Amazon
                </Link>
            </div>
            <div className="header__links">
                <span>
                    <Link to="/cart">
                        {cart.cartItems.length > 0 && <span className="cart__products">{cart.cartItems.length}</span>} 
                        Cart
                </Link>
                </span>
                <span>
                    <Link to="/signin">
                        Sign In
                </Link>
                </span>
            </div>
        </div>
    )
}

export default Header
