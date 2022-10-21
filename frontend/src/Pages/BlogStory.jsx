import React from 'react';
import {Link} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import BlogMiniCard from '../components/cards/BlogMiniCard';
import construction from '../assets/Blog/Construction.jpg';
import plant from '../assets/Blog/Plant.jpg';
import biker from '../assets/Blog/Biker.jpg';
import welder from '../assets/Blog/Welder.jpg';


export default function BlogStory()
{
    return (
        <div className="">
            <div className="title-lining">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <div className="title-text d-flex">
                        <h2 className="px-5 py-4">Blog Story</h2>
                    </div>
                </div>
            </div>
            <Container fluid className="blog-story p-5 mx-3">
                <Container fluid >
                    <Row className="story-header d-flex justify-content-around mt-5">
                        <Col lg={4} xs={12}>
                            <img src={construction}/>
                        </Col>
                        <Col lg={7} xs={12} className="w-100">
                            <h2 className="story-title">Thoughts on the New Construction regulations</h2>
                            <p>I'm just typing just so there's some text here. This text is just placeholder text.</p>
                            <p>I'm just typing just so there's some text here. Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour. I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour
                            </p>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="story-body mt-4 mx-4">
                    <p>I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                        sit in this place here with a smaill light font
                        with a light colour I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                        sit in this place here with a smaill light font
                        with a light colour. I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                        sit in this place here with a smaill light font
                        with a light colour I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                        sit in this place here with a smaill light font
                        with a light colour
                    </p>
                </Container>
                <Container fluid >
                    <Row className="story-body mt-4 justify-content-around">
                        <Col lg={7} xs={12} className="w-100">
                            <h2 className="story-subtitle mt-5 mb-3">Where to register for the "plus" license?</h2>
                            <p>I'm just typing just so there's some text here. This text is just placeholder text.</p>
                            <p>I'm just typing just so there's some text here. Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour. I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour I'm just typing just so there's some text here. This text is just placeholder text.Some product description will come
                                sit in this place here with a smaill light font
                                with a light colour
                            </p>
                        </Col>

                        <Col lg={4} xs={12}>
                            <img className="blog-image-2" src={plant}/>
                        </Col>
                    </Row>
                </Container>
            <Container fluid className="blog-story-end mb-5 pb-5">
                <div className=" mt-2 pt-5">
                    <h5 className="w-100 ml-5 text-dark">Story end</h5>
                    <hr/>
                </div>

                <Row className="d-flex justify-content-around w-75 pb-5 my-5">
                    <Col lg={3} className="text-dark">
                        <h5>Prev</h5>
                        <BlogMiniCard image={welder}/>
                    </Col>
                    <Col lg={3} >
                        <h5>Next</h5>
                        <BlogMiniCard className="text-dark ml-5 pl-5" image={biker}/>
                    </Col>
                </Row>
            </Container>
            </Container>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>



            
        </div>
    )
}