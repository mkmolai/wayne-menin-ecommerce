import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import gsap, {TweenMax, Power3,  } from 'gsap';
import News from '../components/News';
import NewsCard from '../components/cards/NewsCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function NewsPage()
{
    useEffect(()=>{

    }, []);

    return <div>
        <Container fluid>
                <Row className="m-0 p-0">
                    <Col lg={4} className="rounded mt-4 p-0" style={{background: "#F7FCFF"}}>
                    <Breadcrumb>
                        <Breadcrumb.Item active>News</Breadcrumb.Item>
                        <Breadcrumb.Item active>Categories</Breadcrumb.Item>
                    </Breadcrumb>
                    </Col>
                </Row>
                <h1>Latest news.</h1>
                <News>
                    <NewsCard image={''}/>
                </News>
                <h1>Other categories.</h1>
                <News>
                    <NewsCard image={''}/>
                </News>
        </Container>
    </div>
}
