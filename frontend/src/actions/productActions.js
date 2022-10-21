import { PROD_LIST_REQUEST, PROD_LIST_SUCCESS, PROD_LIST_FAIL, PROD_DETAIL_REQUEST, PROD_DETAIL_SUCCESS, PROD_DETAIL_FAIL, PROD_LIST_ITEM, PROD_SAVE_REQUEST, PROD_SAVE_SUCCESS, PROD_NEW_LIST_REQUEST, PROD_NEW_LIST_SUCCESS, PROD_NEW_LIST_FAIL, PROD_TRENDING_LIST_REQUEST, PROD_TRENDING_LIST_SUCCESS, PROD_TRENDING_LIST_FAIL, PROD_CATEGORY_LIST_REQUEST, PROD_CATEGORY_LIST_SUCCESS, PROD_CATEGORY_LIST_FAIL, PROD_SAVE_FAIL, PROD_DELETE_REQUEST, PROD_DELETE_SUCCESS, PROD_DELETE_FAIL, PROD_UPDATE_REQUEST, PROD_UPDATE_SUCCESS, PROD_UPDATE_FAIL } from "../constants/productConstants";
import api from '../config/apiConfig';
/* server side replacement */
import data from '../data';
import { userInfo } from "os";


const productsList = (category) => async (dispatch) =>
{
    const myData =[1]
    try {
        dispatch({type: PROD_LIST_REQUEST});
        const {data} = await api.get(`/products/`)
        console.log('FROM THE SERVER IS:' + '')
        dispatch({type: PROD_LIST_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: PROD_LIST_FAIL, payload: error});
    }
} 
const productsByCategory = (category) => async (dispatch) =>
{
    
    try {
        dispatch({type: PROD_CATEGORY_LIST_REQUEST});
        const {data} = await api.get(`/products/category/${category}`)
        console.log('FROM THE SERVER IS:' + data.length)
        dispatch({type: PROD_CATEGORY_LIST_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: PROD_CATEGORY_LIST_FAIL, payload: error});
    }
} 
 

const productsByNew_PopularityList = (category) => async (dispatch) =>
{
    
    try {
        dispatch({type: PROD_NEW_LIST_REQUEST});
        const {data} = await api.get(`/products/category/${category}`)
        console.log('FROM THE SERVER IS:' + data)
        dispatch({type: PROD_NEW_LIST_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: PROD_NEW_LIST_FAIL, payload: error});
    }
} 
const productsByTrending_PopularityList =(category) => async (dispatch) =>
{
    
    try {
        dispatch({type: PROD_TRENDING_LIST_REQUEST});
        const {data} = await api.get(`/products/category/${category}`)
        console.log('FROM THE SERVER IS:' + '')
        dispatch({type: PROD_TRENDING_LIST_SUCCESS, payload: data})
        
    } catch (error) {
        dispatch({type: PROD_TRENDING_LIST_FAIL, payload: error});
    }
} 

const saveProduct = (product) => async (dispatch, getState) => {
    try {
        const {category} = product;
        console.log('PRODUCT.CATEGORY =: ' + category)
        dispatch({type: PROD_SAVE_REQUEST});
        const {userSignIn: {userInfo}} = getState()
        console.log('USERINFO.TOKEN =: ' + userInfo.token)
        //console.log('REACHING PRODUCT SAVE ACTION with name of product as: ' + 'i should get from formdata here')
        const {data} = await api.post(`/products/create`, product, {
            headers: {
                'Authorization': 'Bearer' + userInfo.token,
                // 'Content-Type': 'multipart/form-data'
            }
        });
        dispatch({type: PROD_SAVE_SUCCESS, payload: product})
    } catch (error) {
        dispatch({type: PROD_SAVE_FAIL, payload: error.message})
        
    }
}

const editProduct = (newProductDetails) => async (dispatch, getState) => {
    console.log('have reached edit function in action with id:' + newProductDetails.id)
    try {
        dispatch({type: PROD_UPDATE_REQUEST});
        const {data} = await api.put(`/products`, newProductDetails);
        dispatch({type: PROD_UPDATE_SUCCESS, payload: newProductDetails})
    } catch (error) {
        dispatch({type: PROD_UPDATE_FAIL, payload: error.message})
        
    }
}

const deleteProduct = (productID) => async (dispatch, getState) => {
    console.log('have reached delete function in action with id:' + productID)
    try {
        dispatch({type: PROD_DELETE_REQUEST});
        const {data} = await api.delete(`/products/` + productID);
        dispatch({type: PROD_DELETE_SUCCESS, payload: productID})
    } catch (error) {
        dispatch({type: PROD_DELETE_FAIL, payload: error.message})
        
    }
}

const productDetails = (productId) => async (dispatch) =>
{ 
    try {
        dispatch({type: PROD_DETAIL_REQUEST});
        const {data} = await api.get("/products/" + productId);
        console.log('FROM BACKY' + data.Image);
        dispatch({type: PROD_DETAIL_SUCCESS, payload: data});   

    } catch (error) {
        dispatch({type: PROD_DETAIL_FAIL, payload: error.message});
    }
}
export {productsList, productsByCategory, productsByNew_PopularityList, productsByTrending_PopularityList, productDetails, saveProduct, editProduct, deleteProduct}