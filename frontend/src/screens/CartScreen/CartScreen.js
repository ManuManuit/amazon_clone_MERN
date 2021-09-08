import React, { useEffect } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/actions/cartActions'

import './styles.css';

const CartScreen = (props) => {
    const { id } = useParams();
    const search = useLocation().search;
    const qty = new URLSearchParams(search).get('quantity');
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);
    console.log("CART ==>", cart);

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (productId) => {
        dispatch(removeFromCart(productId));
    }

    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }

    return (
        <div className="body__cart__screen">

            <h1>Shopping cart</h1>
            {cart.length === 0
                ? <div>Cart is empty</div>
                : <div>{cart.map(item => {
                    return (
                        <div className="cart_item" key={item.name}>
                            <div className="product__cart__image">
                                <img src="https://johnlewis.scene7.com/is/image/JohnLewis/001202033alt4?$fashion-ui$" alt={item.name} />
                            </div>
                            <div className="product__cart__link">
                                <Link to={`/product/${item.product}`}>{item.name}</Link>
                            </div>
                            <div>
                                <select
                                    value={item.quantity}
                                    onChange={(e) => {
                                        dispatch(addToCart(item.product,
                                            Number(e.target.value)))
                                    }}
                                >
                                    {
                                        [...Array(item.countInStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>)
                                    }
                                </select>
                            </div>
                            <div className="product_cart_price">
                                {item.price}€
                            </div>
                            <div>
                                <button onClick={() => removeFromCartHandler(item.product)}>Remove from cart</button>
                            </div>
                        </div>
                    )
                })}
                </div>
            }
            <div className="cart_subtotal">
                <div className="card">
                    <ul>
                        <li>
                            <h2>
                                Subtotal ({cart.reduce((a, c) => a + c.quantity, "")} items) : 
                {cart.reduce((a, c) => a + c.price * c.quantity, 0)}€
                            </h2>
                        </li>
                        <li>
                            <button
                                type="button"
                                onClick={checkoutHandler}
                                className="checkout_button"
                                disabled={cart.length === 0}
                            >
                                Proceed to Checkout
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


        </div >
    )
}

export default CartScreen
