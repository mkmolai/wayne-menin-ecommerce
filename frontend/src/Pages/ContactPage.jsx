import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import blackHelmet from '../assets/Black helmet.png';
import helmy from '../assets/Helmy.png';
import contact from '../assets/contact us.jpg';
import CartCard from '../components/cards/CartCard';
import gsap, {TweenMax, Power3,  } from 'gsap';


export default function ContactPage()
{
    let HEADING = useRef(null); 
    let BODY = useRef(null);



    useEffect(()=>{
        TweenMax.from(HEADING, 0.5, {opacity: 0, ease: Power3.easeIn, delay: 1});
        TweenMax.from(BODY, 0.5, {opacity: 0, y: 70, ease: Power3.easeIn, delay: 1});

    }, []);
    return (
        <div className="contacts-page">
            <div className="title-lining">
                <div className="title-space  d-flex justify-content-center align-items-center">
                    <div className="title-text d-flex" ref={el => HEADING = el}>
                        <h2 className="px-5 py-4">GET IN TOUCH</h2>
                    </div>
                </div>
            </div>
            <Container  className="contact mt-5 p-3" ref={el => BODY = el}>
                <Row>
                    <Col>
                        <h1>Our Location</h1>
                        <hr/>
                        <div className="mt-5">
                            <h3>Street Address</h3>
                            <h4>388k Mharapara Rd, Old Windsor Park</h4>
                            <h3>Town/City</h3>
                            <h4>Ruwa</h4>
                            <h3>Country</h3>
                            <h4>Zimbabwe</h4>
                        </div>
                    
                    </Col>
                    <Col>
                        <h1>Social media</h1>
                        <hr/>
                        <div className="mt-5">
                            <h3>Instagram</h3>
                            <h4>remikayIG</h4>
                            <h3>Facebook</h3>
                            <h4>remikayFB</h4>
                            <h3>LinkedIn</h3>
                            <h4>remikayLi</h4>
                        </div>
                    </Col>
                </Row>
                <br/>
                <hr/>
                <br/>
                <Row className="mt-5 d-flex justify-content-center">
                    <Col lg={5}>
                        <img className="contact-us" src={contact}/>
                    </Col>
                    <Col lg={7}>
                    <Form className="wm-form">
                        <h1 className="py-4">Contact form.</h1>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Here from us
                        </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}