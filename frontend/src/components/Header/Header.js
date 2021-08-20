import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'

const Header = () => {
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
