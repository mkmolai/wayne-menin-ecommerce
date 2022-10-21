import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Col, Container, Row, Breadcrumb, Alert } from 'react-bootstrap';
import blackHelmet from '../assets/Black helmet.png';
import redhelmet from '../assets/Bike helmet.png';
import ProductCard from '../components/cards/ProductCard';
import data from '../data';
import { useState } from 'react';
import AlertDismissibleExample from '../components/Alert';


export default function DetailsPage(props)
{
    const productID = props.match.params.id;
    console.log(productID); 
    const product = data.productss.find(product => product._id == productID);
    const headgear = data.productss.filter(product => product.category == "Headgear");
    const history = useHistory()

    const [qty, setQty] = useState(1);
    const [show, setShow] = useState(true);

    const handleAdd = () => {
        
    }

    const handleSubtract = () => {

    }

    return (
        <div>
            <div className="title-lining">
                <div className="title-space d-flex justify-content-center align-items-center">
                <Breadcrumb>
                        <Breadcrumb.Item ><Link to='/store'>Shop</Link></Breadcrumb.Item>
                        <Breadcrumb.Item ><Link to='/headgear'>Headgear</Link></Breadcrumb.Item>
                        <Breadcrumb.Item active><Link className="breads" to='/headgear'>{product.name}</Link></Breadcrumb.Item>
                    </Breadcrumb>
                    {/* <Alert variant="primary" onClose={() => setShow(false)} dismissible>
                        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
                        <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                        </p>
                    </Alert> */}
                </div>
            </div>
            <Container className="mt-5">
                <Row> 
                    <Col lg={4}>
                        <img className="product-details-image" src={product.image}/>
                    </Col>
                    <Col lg={8}>
                        <div className="product-description">
                            <h1>{product.name}</h1>
                            <h3>Bike Helmet</h3>
                            <p>{product.description}</p>
                            <p className="text-warning">Items in stock: {product.stock}</p>
                            <div className="d-flex justify-content-start">
                                <div className="d-flex justify-content-around color-palette mb-4">
                                    <div className="" style={{background: "black"}}></div>
                                    <div className="" style={{background: "purple"}}></div>
                                    <div className="" style={{background: "red"}}></div>
                                    <div className="" style={{background: "pink"}}></div>
                                </div>
                            </div>
                            <h2>{product.price}</h2>
                            <div className="add-to-cart mt-4 d-flex justify-content-around align-items-end">
                                <button onClick={()=> history.push(`/cart/1?qty=4`)} className="label d-flex justify-content-center">Add to Cart</button>
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
            <Container  className="mt-5 pt-5">
                <h1>Related products</h1>
                <Row>
                    {
                        headgear.map(product => <ProductCard product = {product}/>)
                    }
                </Row>
            </Container>
        </div>
    )
}