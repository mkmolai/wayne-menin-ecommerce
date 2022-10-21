import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { productsList, productsByCategoryList, productsByNew_PopularityList, productsByTrending_PopularityList } from '../../actions/productActions';
import { useEffect } from 'react';
import CardWLining from '../cards/CardWLining';
import { Row } from 'react-bootstrap';
import { useState } from 'react';

const ProductsList = ({category}) => {

    const dispatch = useDispatch()


    const {loading_new, newProducts} = useSelector(state => state.newProductList);
    const [list, setList] = useState([])
 
    useEffect(() => {
        dispatch(productsByNew_PopularityList(category))
    }, [])

    useEffect(() => {
        if(newProducts)
        setList([...newProducts])
    }, [newProducts])

    return (
        <>
        <div className="horizontal-product-list">
            {
                list? list.map(
                    product => <CardWLining newProduct = {product}/>
                )
                : ''
            }
        </div>
        </>
    )
}

export default ProductsList
