import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../constants/cartConstants";

const initialState = {
    loading: '',
    cartItems: [],
} 
function cartReducer(state = initialState, action) //carts is an array that we're getting from state

{
    switch(action.type)
    { 
        case ADD_TO_CART:
            const item = action.payload;
            const product = state.cartItems.find(cartItem => cartItem.Id === item.Id);
            console.log('Cart add-reducer has :' + item.Price)
            if(product)
            {
                return { cartItems:  state.cartItems.map( cartItem => cartItem.Id === product.Id? item : cartItem)}
            }
            return {
                cartItems: [...state.cartItems, item]
            };
            

        case REMOVE_FROM_CART:
            return {
                cartItems: [...state.cartItems.filter(x => x.Id !== action.payload)]
            }

        case CLEAR_CART:
            return {
                cartItems: []
            }
        default:
            return state;
}
}

export {cartReducer};