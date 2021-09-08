import {
     USER_SIGNIN_REQUEST,
     USER_SIGNIN_SUCCES,
     USER_SIGNIN_FAIL,
     USER_SIGNIN_SIGNOUT
} from '../constants/userConstants';

import Axios from 'axios';

export const signin = (email, password) => async (dispatch) => {
    dispatch({
        type: USER_SIGNIN_REQUEST, payload: {email, password}
    });
    try {
        const { data } = await Axios.post('/api/users/signin', {email, password});
        dispatch({
            type: USER_SIGNIN_SUCCES, 
            payload: data
        });
        localStorage.setItem('userInfo', JSON.stringify(data));
    } catch (error) {
        dispatch({
            type: USER_SIGNIN_FAIL, 
            payload: error.message
        });
    }
};