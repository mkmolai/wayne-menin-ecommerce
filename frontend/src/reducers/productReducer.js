import { PROD_LIST_REQUEST, PROD_LIST_SUCCESS, PROD_LIST_FAIL, PROD_DETAIL_REQUEST, PROD_DETAIL_SUCCESS, PROD_DETAIL_FAIL, PROD_LIST_ITEM, PROD_SAVE_REQUEST, PROD_SAVE_SUCCESS, PROD_SAVE_FAIL, PROD_NEW_LIST_REQUEST, PROD_NEW_LIST_SUCCESS, PROD_NEW_LIST_FAIL, PROD_TRENDING_LIST_REQUEST, PROD_TRENDING_LIST_SUCCESS, PROD_TRENDING_LIST_FAIL, PROD_CATEGORY_LIST_REQUEST, PROD_CATEGORY_LIST_SUCCESS, PROD_CATEGORY_LIST_FAIL, PROD_DELETE_FAIL, PROD_DELETE_SUCCESS, PROD_DELETE_REQUEST, PROD_UPDATE_FAIL, PROD_UPDATE_SUCCESS, PROD_UPDATE_REQUEST } from "../constants/productConstants";

const initialState = {
    loading: '',
    loading_trending: '',
    products: [],
    categoryList: [],
    newProducts: [],
    trendingProducts: [],
    product: {}
}
function productReducer(state = initialState, action) //products is an array that we're getting from state

{
    switch(action.type)
    { 
        //GET ------------------------------------
        case PROD_LIST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case PROD_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products:[...action.payload],
            };
            case PROD_LIST_ITEM: 
            {
                return {
                    item: action.payload,
                }
            }
        case PROD_LIST_FAIL:
            return {
                error: action.payload
            };

        //CREATE ------------------------------------


        case PROD_SAVE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case PROD_SAVE_SUCCESS:
            const { category, brand, description, price, stock, popularity} = action.payload;
            console.log('in save success of reducer with category: ' + category)
            const newList = [...state.products, {Category: action.payload.category, Brand: brand, Description: description, Price: price, Stock: stock, Popularity: popularity}]
            return {
                ...state,
                loading: false,
                success: true,
                products: [...newList],
                product: action.payload,
            }
        case PROD_SAVE_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        //EDIT ------------------------------------


        case PROD_UPDATE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case PROD_UPDATE_SUCCESS:
            const {id, name} = action.payload;
            console.log('hi, champ id is: ' + id)
            let updatedList = state.products.map(x => {
                if(x.Id === id)
                {
                    return {...x, Id: id, Name: name}
                }
                else {
                    return x
                }
            })
            console.log('UPDATE LIST IN EDIT IN REDUCER --- id: ' + updatedList[0].Id + '   name ---' + updatedList[0].Name )
            return {
                ...state,
                loading: false,
                products: [...updatedList],
            };
            
        case PROD_UPDATE_FAIL:
                console.log('hi, champ: in fail with message: ' + action.payload)
            return {
                error: action.payload
            };

        //DELETE ------------------------------------


        case PROD_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case PROD_DELETE_SUCCESS:
            console.log('in delete reducer in success case with: ' + action.payload)
            const trimmedList = state.products.filter(x => x.Id !== action.payload);
            return {
                ...state,
                loading: false,
                products:[...trimmedList],
            };
            
        case PROD_DELETE_FAIL:
                console.log('in delete reducer in success case with: ' + action.payload)
            return {
                error: action.payload
            };

        default:
            return state;
}
}
function productCategoryReducer(state = initialState, action) //products is an array that we're getting from state
{
    switch(action.type)
    { 
        case PROD_CATEGORY_LIST_REQUEST:
            return {
                loading_category: true,
            };

        case PROD_CATEGORY_LIST_SUCCESS:
            return {
                loading_category: false,
                categoryList:[...action.payload],
                // item: 'Item is working',
            };
            
        case PROD_CATEGORY_LIST_FAIL:
            return {
                error: action.payload
            };

        default:
            return state;
}
}

function productNewReducer(state = initialState, action) //products is an array that we're getting from state
{
    switch(action.type)
    { 
        case PROD_NEW_LIST_REQUEST:
            return {
                loading_new: true,
            };

        case PROD_NEW_LIST_SUCCESS:
            return {
                loading_new: false,
                newProducts:[...action.payload],
                // item: 'Item is working',
            };
            
        case PROD_NEW_LIST_FAIL:
            return {
                error: action.payload
            };

        default:
            return state;
}
}
function productTrendingReducer(state = initialState, action) //products is an array that we're getting from state

{
    switch(action.type)
    { 
        case PROD_TRENDING_LIST_REQUEST:
            return {
                loading_trending: true,
            };

        case PROD_TRENDING_LIST_SUCCESS:
            return {
                loading_trending: false,
                trendingProducts:[...action.payload],
                // item: 'Item is working',
            };
            
        case PROD_TRENDING_LIST_FAIL:
            return {
                error: action.payload
            };

        default:
            return state;
}
}

function productDetailsReducer(state = initialState, action) //product is  a property of state which is an object
{
    switch(action.type)
    {
        case PROD_DETAIL_REQUEST:
            return {
                loading: true,
            };
            case PROD_DETAIL_SUCCESS:
                    console.log('GETTING SOMETHING HERE:' + action.payload.Name)
            return {
                loading: false,
                product: action.payload,
            }
        case PROD_DETAIL_FAIL:
            return {
                error: action.payload,
            }
        default:
            return state;
    }
}



export {productReducer, productCategoryReducer, productNewReducer, productTrendingReducer, productDetailsReducer};