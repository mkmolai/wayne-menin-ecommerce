import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch}  from 'react-redux';
import { category } from '../../config/arguments';
import { productsByNew_PopularityList, productsList, productsByCategory } from '../../actions/productActions';
import ProductCard from '../cards/ProductCard';


const ProductGrid = (props) => {

    const dispatch = useDispatch();
    const [items, setItems] = useState([])
    const {categoryList, loading_category} = useSelector(state => state.categoryList);
    //const {newProducts} = useSelector(state => state.newProductList);
    //const {trendingProducts} = useSelector(state => state.trendingProductList);

    useEffect(() => {

        console.log('first effect fired with: ' + props.category)
      
        
            if(props.category === category.headgear)
            {
                dispatch(productsByCategory('headgear'))
            }
            else if(props.category === category.clothing)
            {
                dispatch(productsByCategory('clothing'))
            }
            else if(props.category === category.all)
            {
                dispatch(productsByCategory('all'))
            }
            else{

                console.log('HIT THE DEFAULT HERE')
            } 

    }, [props.category])


    useEffect(() => {

        console.log('THIRD effect fired with : ' + props.category)
        if(categoryList)
        {
            setItems([...categoryList])
        }

    }, [categoryList])

    return (
        <>
            {
                loading_category? 'loading' : items.map(
                    product => <ProductCard product={product}/>
                )
            }
        </>
    )
}

export default ProductGrid

 // if(props.category === category.headgear)
        // {
        //     setItems([...newProducts])
        // }
        // if(props.category === category.clothing)
        // {
        //     setItems([...trendingProducts])
        // }