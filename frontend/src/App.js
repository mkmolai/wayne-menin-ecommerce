import React from 'react';
import {Route, BrowserRouter, Link} from 'react-router-dom';
import './App.css';
import './css/bootstrap.min.css';
import { Nav, NavbarBrand, Navbar, NavLink, NavDropdown, Col, Row, Container } from 'react-bootstrap';
import ProductStorePage from './Pages/StorePage';
import gsap, {TweenMax, Power3} from 'gsap';
import { useRef } from 'react';
import { useEffect } from 'react';
import StorePage from './Pages/StorePage';
import HomePage from './Pages/HomePage';
import AssignmentsPage from './Pages/AssignmentsPage';
import NewsPage from './Pages/NewsPage';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import logo from './assets/Logo@2x.png';
import logoText from './assets/LogoText@2x.png';
import firstGrey from './assets/first-view grey@2x.png';
import Headgear from './Pages/HeadgearPage';
import ShopPage from './Pages/ShopPage';
import Login from './Pages/Login';
import WMNavbar from './components/navbar/WMNavbar';
import CartPage from './Pages/CartPage';
import ContactPage from './Pages/ContactPage';
import Register from './Pages/Register';
import ProtectiveClothing from './Pages/ProtectiveClothing';
import Profile from './Pages/ProfilePage';
import BlogPage from './Pages/BlogPage';
import BlogStory from './Pages/BlogStory';
import DetailsPage from './Pages/DetailsPage';
import ProductsPage from './Pages/ProductsPage';



const openMenu = ()=>{
  document.querySelector('.sidebar').classList.add('open');
}
const closeMenu = ()=>{
  document.querySelector('.sidebar').classList.remove('open');
}

function App() {
    


    useEffect(()=>{
        // TweenMax.from(HEADING, 0.5, {opacity: 0, ease: Power3.easeIn, delay: 0.6});

    }, []);



    return ( 
    <BrowserRouter>
    <div className="grid-container">
    <header >
        <WMNavbar/>
    </header> 
    <main> 
        <Route path="/" exact={true}  component={HomePage}/> 
        <Route path="/shop/:category" exact={true} component={ShopPage}/>
        <Route path="/products" exact={true} component={ProductsPage}/>
        <Route path="/getintouch" exact={true} component={ContactPage}/>
        <Route path="/product/:id" component={DetailsPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/> 
        <Route path="/cart/:id?" exact={true}  component={CartPage}/>
        <Route path="/blog" component={BlogPage}/>
        <Route path="/blogstory/" component={BlogStory}/>
        <Route path="/profile" component={Profile}/>
        <Container fluid>
            <div className="content mt-5">
                {/* <Route path="/store" component={StorePage}/>
                <Route path="/assignments" component={AssignmentsPage}/> */}
                {/* <Route path="/newsinfo/:id" component={NewsInfo}/> */}
            </div>
        </Container>
</main>
    <footer className="text-light d-flex justify-content-center align-items-center">
        All rights reserved
    </footer>
</div>
</BrowserRouter>
  );
}

export default App;
