import React, { useEffect, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Nav, NavbarBrand, Navbar, NavLink, Breadcrumb, NavDropdown, Col, Row, Container, Form, Button } from 'react-bootstrap';
import logo from '../assets/Logo@2x.png';
import { signIn, register } from '../actions/userActions';


export default function Register()
{
    const dispatch = useDispatch();
    const history = useHistory();
    const {userInfo, loading, error} = useSelector(state => state.userSignIn);
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRePassword] = useState()

    useEffect(() => {
        if(userInfo)
        {
            history.push('/')
        }

    }, [userInfo])

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(register({name, email, password}))
    }


    return (
        <div className="login">
            <Navbar collapseOnSelect expand="lg" variant="dark" fixed-top className="wm-navbar-login d-flex  align-items-center">
                <Navbar.Brand href="/" class="ml-5"><img className="wm-logo ml-5" src={logo}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto wm-nav ml-5 py-4">
                        <Nav.Link href="/">TRENDING</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="/login">LOGIN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <div className="title-lining-login">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <h1 className="login-title">Register.</h1>
                </div>
            </div>
           
            <Form className="wm-form">
                <div className="title">
                    <h1 >Enter your details.</h1>
                </div> 
                <hr/>
                <div>{loading && 'Loading ...'}</div>
                <div>{error && error }</div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                    <Form.Text className="text-muted"> We'll never share your email with anyone else.</Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control type="password" value={rePassword} onChange={(e)=> setRePassword(e.target.value)} placeholder="Re-enter your password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button onClick={handleRegister} variant="primary" type="submit">
                    Get me registered.
                </Button>
            </Form>
               
        </div>
    )
}