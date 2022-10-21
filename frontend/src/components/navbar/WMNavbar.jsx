import React, { useEffect, useState, useRef } from 'react';
import {useSelector} from 'react-redux'
import {Link, BrowserRouter, useHistory, useLocation} from 'react-router-dom';
import { Nav, NavbarBrand, Navbar, NavLink, NavDropdown, Col, Row, Container, DropdownButton, Dropdown } from 'react-bootstrap';
import logo from '../../assets/Logo@2x.png';
import gsap, {TweenMax, Power3,  } from 'gsap';
import {useDispatch} from 'react-redux'
import { logout, signIn } from '../../actions/userActions';

  
const navdata = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Shop',
        path: `/shop/${'all' || 'clothing' || 'headgear'}`
    },
    
    {
        display: 'Contact Us',
        path: '/getintouch'
    },
    {
        display: 'Products',
        path: '/products'
    },
    // {
    //     display: 'Blog',
    //     path: '/blog'
    // },
]

export default function WMNavbar() {

    let HEADING = useRef(null);
    const history = useHistory();
    const dispatch = useDispatch();
    const {userInfo, loading, error} = useSelector(state => state.userSignIn);
    const {cartItems} = useSelector(state => state.cart); 
    const [loginInfo, seLoginInfo] = useState({})
    

    const {pathname} = useLocation();

    const active = navdata.findIndex(item => item.path === pathname)



    useEffect(()=>{
        //TweenMax.from(HEADING, 0.5, {opacity: 0, ease: Power3.easeIn, delay: 0.6});
        if(userInfo)
        { seLoginInfo({...userInfo})}

    }, [userInfo]);

    const handleClick = (path) => {
        history.push(path)
    }

    const loginButton = useRef(null)

    const handleLogout = () => {
        const value = loginButton.current.innerHTML;
        if (value === 'Logout') {
            
            dispatch(logout())
        }
        else{
            history.push('/login')

        }
        console.log('value of button is: ' + value )
    }

    return ( 

    <div className="grid-container" >
        {/* <h1>remi, hi. userinfo has{loginInfo.name}</h1> */}
        <div className="wm-flash-container d-flex justify-content-center text-light pt-1">Free shipping, globally</div>
        <Navbar collapseOnSelect expand="lg" variant="dark" fixed-top className="wm-navbar d-flex  align-items-center" >
            <Navbar.Brand href="/" class="ml-5"><img className="wm-logo ml-5" src={logo} ref={el => HEADING = el}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav"> 
                <Nav className="mr-auto wm-nav ml-5 py-4">
                    {
                        navdata.map((item, index) => 
                        
                        <Nav.Link key={index} className={`${index === active? 'active' : null}`} onClick={()=> handleClick(item.path)}>{item.display}</Nav.Link>)
                    }
                    
                </Nav>
                <Nav>
                
                 <NavDropdown
                    id="nav-dropdown-dark-example"
                    title={loginInfo.email ? loginInfo.name : 'Login'}
                    menuVariant="dark"
                    >
                    <NavDropdown.Item className="drop-link" onClick={()=> handleClick('/profile')}>Profile</NavDropdown.Item>
                    <NavDropdown.Item className="drop-link" href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item className="drop-link" href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="drop-link" onClick={handleLogout} ref={loginButton}>
                        {loginInfo.email? 'Logout' : 'Login'}
                    </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link eventKey={2} onClick={()=> handleClick('/cart')}>
                    Cart ({cartItems.reduce((a,c) => a + c.qty, 0)})
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            
</div>

  );
}
