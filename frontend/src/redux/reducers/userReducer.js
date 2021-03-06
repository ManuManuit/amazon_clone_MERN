import {
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCES,
    USER_SIGNIN_FAIL,
    USER_SIGNIN_SIGNOUT
} from "../constants/userConstants"


export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_SIGNIN_REQUEST:
            return{
                loading: true
            }
        case USER_SIGNIN_SUCCES:
            return{
                loading: true, 
                userInfo: action.payload
            }
        case USER_SIGNIN_FAIL:
            return{
                loading: false,
                error: action.payload

            }
        case USER_SIGNIN_SIGNOUT:
            return{
                l
            }
            
        default:
            return state;
    }
}