import React from 'react';
import { Col } from 'react-bootstrap';
import {useHistory} from 'react-router-dom';
import child from '../assets/Child@2x.png'

export default function BigHomeAd()
{
    const history = useHistory()
    
    return (
        <Col lg={10} className="big-home-ad mt-5 ml-5 p-5 rounded-lg">
                <div className="ad-text">
                    <h4>Marques Ben</h4>
                    <h4>Helmet</h4>
                    <hr/>
                    <p>Here i will place the description of the product that will be on this Ad station.</p>
                </div>
                <div className="ad-image">
                    <img src={child}/>
                </div>
                <button className="px-4 py-2" onClick={()=> history.push('/shop/all')}>Shop now</button>
        </Col>
    )
}