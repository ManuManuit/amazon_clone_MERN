import axios from 'axios'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/cartConstants'
import Axios from 'axios'

export const addToCart = (productId, quantity) => async(dispatch, getState) => {
    const {data} = await Axios.get(`/api/products/${productId}`);
    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: data.name,
            image: data.image, 
            price: data.price,
            countInStock: data.countInStock,
            product: data._id,
            quantity
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (productId) => async(dispatch, getState) => {
    dispatch({
        type: REMOVE_FROM_CART,
        payload: productId
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
}
