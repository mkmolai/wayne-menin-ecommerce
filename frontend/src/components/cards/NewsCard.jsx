import React from 'react';
import {Link} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';

export default function NewsCard(props)
{
    return (
        
        <Row className="m-0 p-0">
            <Col lg={12} className="rounded mt-4 p-0" style={{background: "#F7FCFF"}}>
                <div className="d-flex flex-start m-0 p-0">
                    <img src={props.image} style={{width: "300px", height: "200px"}} className="rounded"/>
                    <div className="ml-4 d-flex flex-column align-items-start justify-content-center">
                    <Link to={'/newsinfo/1'}><h3 className="news-heading">Branston Athletics team ranked 1st nationwide.</h3></Link>
                        <p>Amid so many brilliant teams accross the Nation, our outstanding team of talented track and field athletes were unmatched at the ...</p>
                        <h5>Student Author: Donald Damu</h5>
                    </div>
                </div>
            </Col>
        </Row>
    )
}