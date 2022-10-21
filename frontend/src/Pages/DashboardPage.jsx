import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import gsap, {TweenMax, Power3,  } from 'gsap';
import News from '../components/News';
import NewsCard from '../components/NewsCard';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import aths from '../assets/Athletics.jpeg';
// import paget from '../assets/Paget.jpeg';
import DashboardItem from '../components/DashboardItem';
import DashboardItemTwo from '../components/DashboardItemTwo';

export default function DashboardPage()
{
    useEffect(()=>{

    }, []);

    return <div>
        <Container fluid>
                <Row className="m-0 p-0">
                    <Col lg={4} className="rounded mt-4 p-0" style={{background: "#F7FCFF"}}>
                    <Breadcrumb>
                        <Breadcrumb.Item active>Your summary</Breadcrumb.Item>
                        <Breadcrumb.Item active>This week</Breadcrumb.Item>
                    </Breadcrumb>
                    </Col>
                </Row>

                <Row className="mt-4">
                    <DashboardItem/>
                    <DashboardItem/>
                    {/* <DashboardItemTwo/> */}
                </Row>
        </Container>
    </div>
}
