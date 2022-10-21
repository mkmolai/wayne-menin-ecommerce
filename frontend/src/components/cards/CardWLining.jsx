import React from 'react';
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import blackHelmet from '../../assets/Black helmet.png'

export default function CardWLining(props)
{
    
    return ( 
        <Col lg={3} xs={6} className="cardw-lining mt-5 ml-5">
            <Link to={'/product/'+ props.newProduct.Id}>
                <div className="helper">
                    <div className="cardw-lining-content p-5">
                        <div className="cardw-lining-img" style={{backgroundImage: `url(${props.newProduct.Image})`}}>
                            {/* <img src={props.newProduct.Image} alt="Product Image"/> */}
                        </div> 
                        <div className="cardw-lining-label text-center">
                            <p>#WMApproved</p>
                            <Link to={'/product/'+ props.newProduct.Id} className="px-3 py-2">{props.newProduct.Name}</Link>
                        </div>
                    </div>

                </div>
            </Link>
        </Col>
    )
}