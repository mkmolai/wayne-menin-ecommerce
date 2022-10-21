import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { productList } from '../actions/productActions';
import { Container, Row, Col, Spinner, Jumbotron, Image } from 'react-bootstrap';
import black from '../images/black.jpg';
import gsap, {TweenMax, Power3,  } from 'gsap';
import Card from '../components/cards/Card';
import data from '../data';
//import ProductsList from '../components/products/ProductsList';


function StorePage(props)
{
    let headerText = useRef(null);
    let headerText2 = useRef(null);
    let textOne = useRef(null);
    let textTwo = useRef(null);
    let slider = useRef(null);

    const productsList = useSelector(state => state.productList);
    const {loading, products, error} = productsList;
    const dispatch = useDispatch();

    const filterSelection = (kind)=> 
    {
        console.log('clicked');
        let i, allElements;
        //let gadgets = [];
        allElements = document.getElementsByClassName('product');
        console.log(allElements.length)
        if(kind == 'all')
        kind = '';

        for(i=0; i<allElements.length; i++)
        {
            removeClass(allElements[i], 'product');
            if(allElements[i].className.indexOf(kind) > -1)
            {
                addClass(allElements[i], 'show');
            }
        }
        
    }

    const addClass = (element, classs) =>
    {
        let i;
        let wantedClassList = element.className.split('');
        let classList = classs.split('');
        for(i=0; i<classList.length; i++)
        {
            if (wantedClassList.indexOf(classList[i]) == -1) {element.className += " " + classList[i];}
        }
    }
    const removeClass = (element, name) =>
    {
        let i, arr1, arr2;
        arr1 = element.className.split(" ");
        arr2 = name.split(" ");
        for (i = 0; i < arr2.length; i++) {
            while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);     
            }
        }
        element.className = arr1.join(" ");
    }
    
  useEffect(() =>{
      //dispatch(ProductsList());
          TweenMax.staggerFrom([headerText, headerText2], .8, {opacity: 0, y: 100, ease: Power3.easeOut}, .2);
          TweenMax.fromTo(slider, .8, {opacity: 0, width:'0%', ease: Power3.easeOut},{opacity: 1, width: '100%', ease: Power3.easeOut})
          TweenMax.fromTo(slider, .5, {opacity:1, width: '100%', ease: Power3.easeOut}, {opacity:1, width: '0%', ease: Power3.easeOut, delay: 1});
          TweenMax.staggerFrom([textOne, textTwo], .8, {opacity: 0, y: 30, ease: Power3.easeOut, delay: 1.5}, .2);
      }, []);

    return <div>
      
      
      <Container className="mb-5">
            <Jumbotron fluid id="jumbo" className="mt-5">
                <Container className="d-flex flex-column flex-wrap align-items-center">
                    <img src={black}/>
                    <h1 ref={el => {headerText = el}} className="title">General store.</h1>
                    <h3 ref={el => {headerText2 = el}} className="mt-2">Welcome to our store</h3>
                    <p className="mt-3">
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                    </p>
                </Container>
            </Jumbotron>
            <Row>
                <Col>
                    <div className="supporting-container p-3 mt-5 mb-5" variant="dark">
                        <div ref={el => {slider = el}} className="slider"></div>
                        <h1 ref={el => {textOne = el}} className="title">Kay products.</h1>
                        <p ref={el => {textTwo = el}} className="mt-2 ">Today we have a discount on every item availble in our store.</p>
                        
                    </div>
                </Col>
            </Row>
    </Container>
            
            <Container fluid>
                <Row>
                    <Col className="text-center" lg={3}>
                        <div>
                            <div className="d-flex side flex-column text-left mx-5">
                                <h4 className="d-inline-block py-3 pl-3 ml-2">Categories</h4>
                                <Link><a className="d-block mt-4 py-3 pl-3">Link one</a></Link>
                                <Link><a className="d-block mt-4 py-3 pl-3">Gadgets</a></Link>
                                <Link><a className="d-block mt-4 py-3 pl-3">Vector pieces</a></Link>
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                    <Container>
                        <div className="posi-helper">
                            <div>
                                <div className="d-flex top justify-content-around align-items-center text-left">
                                    <Link><a className="d-block" onClick={() => filterSelection('gadget')}>SHOWING</a></Link>
                                    <Link><a className="d-block" onClick={() => filterSelection('gadget')}>GADGETS</a></Link>
                                    <Link><a className="d-block" onClick={() => filterSelection('art')}>ART</a></Link>
                                    <Link><a className="d-block" onClick={() => filterSelection('art')}>OTHER</a></Link>
                                    <Link><a className="d-block" onClick={() => filterSelection('art')}>SORT BY</a></Link>
                                </div>
                            </div>
                            <img id="gadgets" className="mb-5" src={''}/>
                            {loading?  <Spinner id="spinner" animation="border" variant="info"/>:
                            <div className="products-container mb-5">
                            <Row className="mt-5">
                                
                            { loading? '': data.products.map(product => 
                                <Col lg={3}>
                                <Link to={'/product/'+ product._id}>
                                    <Card product={product}>{product.name}</Card>
                                </Link>
                                </Col>
                                )} 

                            </Row>
                            </div>
                        }
                        </div>
                    </Container>
                    </Col>
                    </Row>
            </Container>
            
    
        
        </div>
   
}

export default StorePage;