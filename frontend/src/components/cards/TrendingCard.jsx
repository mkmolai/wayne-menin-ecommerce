import React from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';

  
export default function TrendingCard(props)
{
    return (
        <Col lg={3} xs={6} className="d-flex flex-column align-items-center cardw-lining2 my-5 pb-5 ml-5 w-100">
                <div className="cardw-lining2-content">
                    <div className="cardw-lining2-img">
                        <img src={props.trendingProduct.image}/>
                    </div> 
                </div>
                <div className="cardw-lining2-label pt-3">
                    <h5 className="text-secondary">Some text here</h5>
                    <Link to={'/product/'+ props.trendingProduct._id}><h3>{props.trendingProduct.name}</h3></Link>
                </div>
        </Col> 
    )
}