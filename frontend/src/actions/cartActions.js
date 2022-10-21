import axios from 'axios';
import Cookie from 'js-cookie';
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../constants/cartConstants';
 
const addToCart = (productId, qty) => async (dispatch, getState) => {
    try {
        const {data} = await axios.get(`/products/${productId}`)
        console.log('STOCK FOR THIS ITEM IS:' + data.Stock)
        dispatch({type: ADD_TO_CART, payload: {
            ...data,
            qty 
        }});
        const {cart: {cartItems}} = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
        // console.log('I am here in cart add action:' + Object.getOwnPropertyNames(data))
        // console.log('I am here in cart add action:' + data.price)
    } catch (error) {
        
    }
}

const removeFromCart = (productId) => async (dispatch, getState) => {
    try {
        //const {data} = await axios.delete(`/products/${productId}`)
        //console.log('PROD TO BE REMOVED HAS ID: ' + productId)
        dispatch({type: REMOVE_FROM_CART, payload: productId});
        const {cart: {cartItems}} = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {
        
    }
}

const clearCart = () => async (dispatch, getState) => {
    try {
        dispatch({type: CLEAR_CART, payload: ''});
        const {cart: {cartItems}} = getState()
        Cookie.set("cartItems", JSON.stringify(cartItems))
    } catch (error) {
        
    }
}

export {addToCart, removeFromCart, clearCart};