import { createStore , compose, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import data from '../data'
import { cartReducer } from './reducers/cartReducer';
import { productDetailsReducer, productListReducer} from './reducers/productReducer';
import { userSigninReducer } from './reducers/userReducer';

const initialState = {
    cart: {
        cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
    }
};

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userInfo: userSigninReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;