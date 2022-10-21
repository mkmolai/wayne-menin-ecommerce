import React from 'react';
import {Link} from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';


export default function BlogCard(props)
{
    return ( 
            <Col lg={3} sm={6} xs={12} className="blog-card my-5 pb-5 pt-4">

                    <div className="blog-card-img">
                        <Link to="/blogstory">
                            <img src={props.image}/>
                        </Link>
                    </div> 
                    <div className="blog-card-details">
                        <h2>Thoughts on</h2>
                        <h2>New construction regulations</h2>
                        <hr/>
                        <h5>By Archie Bren</h5>
                    </div>
            </Col>
    )
}