import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Cookie from 'js-cookie';
import { productReducer, productDetailsReducer, productSaveReducer, productNewReducer, productTrendingReducer, productCategoryReducer } from './reducers/productReducer';
import { cartReducer } from './reducers/cartReducer';
import { userSignInReducer, userRegisterReducer, userLogoutReducer } from './reducers/userReducer';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || {
    _id: '',
    name: '',
    email: '',
    password: '',
    isAdmin: '',
    token: '',
};


const initialState = { 
    cart: {cartItems}, 
    userSignIn: {userInfo}
};

const reducer = combineReducers({
    productList: productReducer,
    categoryList: productCategoryReducer,
    newProductList: productNewReducer,
    trendingProductList: productTrendingReducer,
    productDetails: productDetailsReducer,
    //productSave: productSaveReducer,
    
    cart: cartReducer,
    
    userSignIn: userSignInReducer,
    userRegister: userRegisterReducer,
}); 

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));
//const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store; 