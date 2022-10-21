import axios from 'axios';
import Cookie from 'js-cookie';
import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from '../constants/userConstants';
 
const getUser = () => async (dispatch, getState) => {
    try {
        dispatch({type: GET_USER_REQUEST})
        const {userSignIn: {userInfo}} = getState();
        console.log('in getUser checking state of user: ' + userInfo.name)
        //Cookie.set("cartItems", JSON.stringify(cartItems))
        dispatch({type: GET_USER_SUCCESS, payload: userInfo});

    } catch (error) {
        dispatch({type: GET_USER_FAIL, payload: error.message})
    }
}
const signIn = ({email, password}) => async (dispatch, getState) => {
    console.log('RECEIVING:' + email + 'AND' + password)
    try {
        dispatch({type: SIGNIN_REQUEST})
        
        const {data} = await axios.post(`/users/signin/`, {email, password})
        // to note: 
        // at this stage i receive a full object of the user signing in, including the new property 'token'
        // -------------------------------
        console.log('AFTER SUBMIT ON SIGN IN, I AM RECEIVING DATA =:' + data.token)
        dispatch({type: SIGNIN_SUCCESS, payload: data});
        //i don't think cookie only saves one thing at a time?
        //below, i save the user signing's info into a variable called 'userInfo'
        Cookie.set("userInfo", JSON.stringify({...data}))

    } catch (error) {
        dispatch({type: SIGNIN_FAIL, payload: error.message})
    }
}

const register = ({name, email, password}) => async (dispatch, getState) => {
    console.log('RECEIVING:' + 'NAME:' + name + 'AND' + email, password)
    try {
        dispatch({type: REGISTER_REQUEST})
        const {data} = await axios.post(`/users/register/`, {name, email, password})
        dispatch({type: REGISTER_SUCCESS, payload: data});
        Cookie.set("userInfo", JSON.stringify(data))

    } catch (error) {
        dispatch({type: REGISTER_FAIL, payload: error.message})
    }
}

const logout = () => async (dispatch) => {
    try {
        dispatch({type: LOGOUT_REQUEST})
        dispatch({type: LOGOUT_SUCCESS, payload: ''})
        Cookie.set("userInfo", JSON.stringify({
                                        _id: '',
                                        name: '',
                                        email: '',
                                        password: '',
                                        isAdmin: '',
                                        token: '',
                                    }))
    } catch (error) {
        dispatch({type: LOGOUT_FAIL, payload: error.message})
    }
}


export {getUser, signIn, register, logout};