import { SIGNIN_REQUEST, SIGNIN_SUCCESS, SIGNIN_FAIL, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAIL } from "../constants/userConstants";


const initialState = {
    userInfo: {
        _id: '',
        name: '',
        email: '',
        password: '',
        isAdmin: '',
        token: '',
    }
}

// --------- reducers are just functions that manipulate my state
function userSignInReducer( state = initialState, action ) //carts is an array that we're getting from state

{
    switch(action.type)
    { 
        case GET_USER_REQUEST:
            
            return {
                loading: true
            }; 
            

        case GET_USER_SUCCESS:
            return {
                loading: false,
                userInfo: {...state.action.payload}
            }

        case GET_USER_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case SIGNIN_REQUEST:
            
            return {
                loading: true
            }; 
            

        case SIGNIN_SUCCESS:
            //console.log('in signin success reducer with : ' + state.userInfo.name)
            return {
                loading: false,
                userInfo: {...action.payload}
            }

        case SIGNIN_FAIL:
            return {
                loading: false,
                error: action.payload
            }
//---  -----------  logout ------------------ --------------------------

            case LOGOUT_REQUEST:
            return {
                loading: true,
            }
        case LOGOUT_SUCCESS:
            return {
                loading: false,
                userInfo: {}
            }
        case LOGOUT_FAIL:
            return {
                error: action.payload
            }
            
        default:
            return state;
}
}
function userRegisterReducer(state = initialState, action) //carts is an array that we're getting from state

{
    switch(action.type)
    {  
        case REGISTER_REQUEST:
            
            return {
                loading: true
            };
            

        case REGISTER_SUCCESS:
            return {
                loading: false,
                userInfo: action.payload
            }

        case REGISTER_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            
        default:
            return state;
}
}

// function userLogoutReducer(state = initialState, action) {

//     switch (action.type) {
        
//         default:
//             return state;
//     }

// }

export {userSignInReducer, userRegisterReducer};