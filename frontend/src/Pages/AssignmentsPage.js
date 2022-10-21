import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import gsap, {TweenMax, Power3,  } from 'gsap';
import Assignment from '../components/Assignment';

function AssignmentsPage()
{
    useEffect(()=>{

    }, []);

    return <div>
        <Container fluid>
            <div className="heading">
                <h1  className="text-primary">Your assignments</h1>
            </div>
            <Assignment subject= "Biology"/>
            <Assignment subject= "Calculus"/>
            <Assignment subject= "Business Studies"/>
            <Assignment subject= "Chemistry"/>
        </Container>
    </div>
}

export default AssignmentsPage;