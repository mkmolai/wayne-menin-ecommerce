import React from 'react';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import blackHelmet from '../assets/Black helmet.png';
import helmy from '../assets/Helmy.png';
import redhelmet from '../assets/Bike helmet.png';
import CartCard from '../components/cards/CartCard';
import BlogCard from '../components/cards/BlogCard';
import construction from '../assets/Blog/Construction.jpg';
import biker from '../assets/Blog/Biker.jpg';
import welder from '../assets/Blog/Welder.jpg';


export default function BlogPage()
{
    return (
        <div>
            <div className="title-lining">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <div className="title-text d-flex">
                        <h2 className="px-5 py-4">WM Blog</h2>
                    </div>
                </div>
            </div>
            <Container fluid className="d-flex justify-content-center mt-5">
                Really good blog with nice layout to come here
            </Container>
            
            <Container fluid className="d-flex justify-content-around my-5 pb-5 px-5">
                <BlogCard image={construction}/>
                <BlogCard image={biker}/>
                <BlogCard image={welder}/>
            </Container>
            <br/>
            <br/>
            <br/>
            
        </div>
    )
}