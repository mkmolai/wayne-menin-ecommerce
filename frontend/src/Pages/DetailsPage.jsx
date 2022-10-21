import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Col, Container, Row, Breadcrumb, Alert } from 'react-bootstrap';
import ProductCard from '../components/cards/ProductCard';
import AlertDismissibleExample from '../components/Alert';
import { productDetails } from '../actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import data from '../data';


export default function DetailsPage(props)
{

    const {loading, product, error} = useSelector(state => state.productDetails);
    const description = 'The product description will come here and will occupy about two or three lines, not too long.Hello, hi, i am just typing to make this text longer.';
    const history = useHistory()
    const dispatch = useDispatch()


    const productID = props.match.params.id;
    console.log(productID); 
    //const product = data.productss.find(product => product._id == productID);
    //const headgear = data.productss.filter(product => product.category == "Headgear");

    const [qty, setQty] = useState(1);
    const [show, setShow] = useState(true);

    //const {qty, setQty} = useQuantityHook()

    const handleAdd = () => {
        setQty(qty + 1)
    }

    const handleSubtract = () => {
        setQty(qty - 1)
    }

    useEffect(() => {
        dispatch(productDetails(productID))
    }, [])


    return (
        <div>
           <div className="title-lining">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <div className="title-text d-flex justify-content-center align-items-center">
                        <span className="py-5">Product</span>
                        <h2 className="py-4 ml-2">{loading? '' :product.Name}</h2>
                    </div>
                </div>
            </div>
            <Container className="mt-5">
                <Row> 
                    <Col lg={4} >
                        <img className="product-details-image" src={loading? '' : `http://localhost:9000/${product.Image}`} />
                        
                    </Col>
                    <Col lg={8}>
                        <div className="product-description">
                            <h1>{loading? '' : product.Name}</h1>
                            <h3>Bike Helmet</h3>
                            <p>{description}</p>
                            <p className="text-warning">Items in stock: {loading? '' :product.stock}</p>
                            <div className="d-flex justify-content-start">
                                <div className="d-flex justify-content-around color-palette mb-4">
                                    <div className="" style={{background: "black"}}></div>
                                    <div className="" style={{background: "purple"}}></div>
                                    <div className="" style={{background: "red"}}></div>
                                    <div className="" style={{background: "pink"}}></div>
                                </div>
                            </div>
                            <h2>{loading? '' :product.price}</h2>
                            <div className="add-to-cart mt-4 d-flex justify-content-around align-items-end">
                                <button onClick={()=> history.push(`/cart/${productID}?qty=${qty}`)} className="label d-flex justify-content-center">Add to Cart</button>
                                <button onClick={()=> handleSubtract()}><h5>-</h5></button>
                                <h5>{qty}</h5>
                                <button onClick={()=> handleAdd()}><h5>+</h5></button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="mt-5 w-100 delivery-time-row">
                <div className=" d-flex justify-content-around align-items-center pt-3">
                   
                         <div className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h5>Delivery Time</h5>
                                {/* <i class="fa fa-clock-o" aria-hidden="true"></i> */}
                            </div>
                            <p>3 - 4 days</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h5>Buyers reviews</h5>
                                {/* <i class="fa fa-clock-o" aria-hidden="true"></i> */}
                            </div>
                            <p>15</p>
                        </div>
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <h5>Product in pictures</h5>
                                {/* <i class="fa fa-clock-o" aria-hidden="true"></i> */}
                            </div>
                            <p>14 features</p>
                        </div>
                </div>
            </Container>
            {/* <Container  className="mt-5 pt-5">
                <h1>Related products</h1>
                <Row>
                    {
                        headgear.map(product => <ProductCard product = {product}/>)
                    }
                </Row>
            </Container> */}
        </div>
    )
}