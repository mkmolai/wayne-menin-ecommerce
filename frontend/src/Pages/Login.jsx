import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Nav, NavbarBrand, Navbar, NavLink, Breadcrumb, NavDropdown, Col, Row, Container, Form, Button } from 'react-bootstrap';
import logo from '../assets/Logo@2x.png';
import { signIn, getUser } from '../actions/userActions';


export default function Login()
{
    const dispatch = useDispatch();
    const history = useHistory();
    const {userInfo, loading, error} = useSelector(state => state.userSignIn);
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()



    //console.log('IN LOGIN, USERINFO HAS name: ' + userInfo.name)
    // useEffect(() => {
    //     dispatch(getUser())

    // }, [])

    useEffect(() => {
        if(userInfo)
        {
            history.push('/login')
        }
        else
        {
            history.push('/')
        }

    }, [userInfo])

    const handleSignIn = (e) => {
        e.preventDefault();
        dispatch(signIn({email, password}))
       
    }


    return (
        <div className="login">
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed-top className="wm-navbar-login d-flex  align-items-center">
                <Navbar.Brand href="/" class="ml-5"><img className="wm-logo ml-5" src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto wm-nav ml-5 py-4">
                        <Nav.Link href="/">WAYNE MENIN</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/register">REGISTER</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="title-lining-login">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <h1 className="login-title">Login.</h1>
                </div>
            </div>
           
            <Form className="wm-form">
                <div className="title">
                    <h1 >Enter login details.</h1>
                </div>
                <hr/>
                <div>{loading && 'Loading ...'}</div>
                <div>{error && error }</div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                    <Form.Text className="text-muted"> We'll never share your password with anyone else.</Form.Text>
                </Form.Group>
                {/* <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                <Button onClick={handleSignIn} variant="primary" type="submit" className="mt-3">
                    Go In
                </Button>
            </Form>
            
               
        </div>
    )
}