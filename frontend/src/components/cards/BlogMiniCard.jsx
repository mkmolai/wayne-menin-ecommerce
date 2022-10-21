import React from 'react';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import construction from '../../assets/Blog/Construction.jpg';


export default function BlogMiniCard(props)
{
    return ( 
                        <div className="blog-mini_card"> 
                            <div className="blog-mini_card-items d-flex justify-content-start align-items-center">
                                <Col lg={4} className="blog-mini_card-img p-0">
                                        <img src={props.image}/>
                                </Col>
                                <Col lg={8} className="blog-mini_card-details">
                                        <h6 className="heading">Thoughts on New construction regulations</h6>
                                        <hr className="mt-2"/>
                                        <div className="d-flex justify-content-between align-items-center mt-2">
                                            <h6 className="">23/05/2021</h6>
                                            <h6 className="tag">#Construction</h6>
                                        </div>
                                </Col>
                            </div>
                        </div>
    )
}