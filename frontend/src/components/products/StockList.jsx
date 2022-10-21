import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { productsList } from '../../actions/productActions';
import { useEffect } from 'react';
import CardWLining from '../cards/CardWLining';
import { Row } from 'react-bootstrap';
import data from '../../data';
import ProductCard from '../cards/ProductCard';

const StockList = ({category}) => {

    const dispatch = useDispatch()


    const {loading, products} = useSelector(state => state.productList);
    // const[arrivals, setArrivals] = useState(data.productss.filter(item => item.new === true));

    useEffect(() => {
        dispatch(productsList(category))
    }, [])

    return (
        <>
        <Row>
            {
                data.productss.map(
                    product => <ProductCard product={product}/>
                )
            }
        </Row>
        </>
    )
}

export default StockList
