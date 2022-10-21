import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { productsByTrending_PopularityList } from '../../actions/productActions';
import { useEffect } from 'react';
import CardWLining from '../cards/CardWLining';
import { Row } from 'react-bootstrap';

const TrendingProductsList = ({category}) => {

    const dispatch = useDispatch()


    const {trendingProducts} = useSelector(state => state.trendingProductList);
    const [list, setList] = useState([])
 
    useEffect(() => {
        dispatch(productsByTrending_PopularityList(category))
    }, [])

    useEffect(() => {
        if(trendingProducts)
        {
            setList([...trendingProducts])
        }
    }, [trendingProducts])

    return (
        <>
        <div className="horizontal-product-list">
            {
                list.length !== 0?  list.map(
                    product => <CardWLining newProduct = {product}/>
                )
                :
                <div className="empty-list" >
                    <h1>No products trending</h1>
                </div>
            }
        </div>
        </>
    )
}

export default TrendingProductsList
