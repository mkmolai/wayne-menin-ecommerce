import React, { useState } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Modal, Button, Form } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { saveProduct } from '../../actions/productActions';

const ProductModal = ({product}) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const {loading, success, error} = useSelector(state => state.productSave);

    const [item, setItem] = useState({
        name: '',
        price: '',
        image: '',
        brand: '',
        category: '',
        stock: '',
        description: '',
    });


    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        
        if(name === 'image')
        {
            const image = e.target.files[0];
            setItem({
                ...item,
                [name]: image
            })
        }
        else{
            setItem({
                ...item,
                [name]: value
            })
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', item.name);
        formData.append('brand', item.brand);
        formData.append('price', item.price);
        formData.append('description', item.description);
        formData.append('image', item.image);
        formData.append('stock', item.stock);

        dispatch(saveProduct(formData))
    }

    return (
        <>
           
                <Form className="wm-form-product"  encType="multipart/form-data">
                    
                    <div className="title">
                        <h1 >Enter product details.</h1>
                    </div>

                    {/* <hr/> */}
                    <div>{loading && 'Loading ...'}</div>
                    <div>{error && error }</div>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Product name</Form.Label>
                        <Form.Control name="name" type="text" size="sm" value={item.name} onChange={handleChange} placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Brand</Form.Label>
                        <Form.Control name="brand" type="text" size="sm" value={item.brand} onChange={handleChange} placeholder="Brand" />
                    </Form.Group>
                    
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name="price" type="number" size="sm" value={item.price} onChange={handleChange} placeholder="Price" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control name="description" type="text" size="sm" value={item.description} onChange={handleChange} placeholder="Description" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Image</Form.Label>
                        <Form.Control name="image" type="file" size="sm" onChange={handleChange} placeholder="Image" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Stock</Form.Label>
                        <Form.Control name="stock" type="text" size="sm" value={item.stock} onChange={handleChange} placeholder="Stock" />
                    </Form.Group>
                    
                    <Button onClick={handleSubmit} variant="primary" type="submit">
                        Save product.
                    </Button>
                </Form>     
        </>
    )
}

export default ProductModal
