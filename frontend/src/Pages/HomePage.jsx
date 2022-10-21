import React, { useEffect, useState, useRef } from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import gsap, {TweenMax, Power3,  } from 'gsap';
import News from '../components/News';
import NewsCard from '../components/cards/NewsCard';
import CardWLining from '../components/cards/CardWLining';
import logoText from '../assets/LogoText@2x.png';
import firstGrey from '../assets/first-view grey@2x.png';
import child from '../assets/Child In Yellow.png';
import BigHomeAd from '../components/BigHomeAd';
import TrendingCard from '../components/cards/TrendingCard';
import data from '../data';
import ProductSlider from '../components/Slider';
import NewProductsList from '../components/products/NewProductsList';
import TrendingProductsList from '../components/products/TrendingProductsList';
import { category } from '../config/arguments';
 
export default function HomePage()
{
 
    
    let NEW_ARRIVALS = useRef(null);
    let LOGO_TEXT = useRef(null);
    let SHOP_NOW = useRef(null);


    //My states

    const[trending, setTrending] = useState(data.productss.filter(item => item.trending === true));
    const[arrivals, setArrivals] = useState(data.productss.filter(item => item.new === true));

    useEffect(()=>{

        TweenMax.from(NEW_ARRIVALS, 0.5, {opacity: 0, ease: Power3.easeIn, delay: 0.6});
        TweenMax.from(SHOP_NOW, 0.8, {opacity: 0, y: 50, ease: Power3.easeIn, delay: 1.2});
        TweenMax.from(LOGO_TEXT, 0.8, {opacity: 0, y: 50, ease: Power3.easeIn, delay: 0.5});

    }, []);

    return <div>
        
        <div className="wm-first-visual-lining">
                <div className="wm-first-visual">
                    <div className="wm-first-visual-items">
                        <div className="wm-first-visual-logo">
                            <img src={logoText} ref={el => LOGO_TEXT = el}/>
                        </div>
                        <div className="wm-first-visual-btn">
                            <Link to="/shop"><button className="wm-cta-all text-light px-5 py-2"><h5 ref={el => SHOP_NOW = el}>Shop now</h5></button></Link>
                        </div>
                        <div className="wm-first-visual-img">
                            <img src={child}/>
                        </div>
                    </div>
                </div>
            </div>
        <Container>
            {/* <ProductSlider/> */}
        </Container>
        <Container>
                <div className="d-flex justify-content-center my-2 pt-5">
                    <h1 className="NEW_ARRIVALS" style={{color: '#D9D9D9'}} ref={el => NEW_ARRIVALS = el} >NEW ARRIVALS.</h1>
                </div>
                <NewProductsList category={category.new}/>
                <br/>
                <br/>
                <div className="only-at-wm d-flex justify-content-around">
                    <div className="d-flex justify-content-around align-items-center"><h5 className="pr-2">Only at</h5><h3 className="w">W</h3><h3 className="m">M</h3></div>
                    <h4>Global shipping</h4>
                    <h4>Awesome discounts</h4>
                    <h4>24hr support</h4>
                </div>
        </Container>
        <Container>
                <div className="d-flex justify-content-center my-2x pt-5">
                    <h1 className="TRENDING" style={{color: '#D9D9D9'}}>TRENDING.</h1>
                </div>
                <TrendingProductsList category={category.trending}/>
        </Container>
        <Container fluid>
                <div className="d-flex justify-content-center my-5 pt-5">
                    <BigHomeAd/>
                </div>
        </Container>
        <Container fluid>
                <div className="d-flex justify-content-center my-5 pt-5">
                    <h1>Meet the team!</h1>
                </div>
        </Container>

    </div>
}