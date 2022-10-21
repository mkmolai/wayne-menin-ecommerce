import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import { Col, Container, Row, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import {useDispatch, useSelector} from 'react-redux'
import {addToCart, removeFromCart, clearCart} from '../actions/cartActions';
import { useEffect } from 'react';
import blackHelmet from '../assets/Black helmet.png';
import emptycart from '../assets/emptycart.png';
import '../style/cart-page/cart_page.css';
import CartCard from '../components/cards/CartCard';

 
export default function CartPage(props)
{
    const productId = props.match.params.id;
    const {cartItems, loading} = useSelector(state => state.cart); 
    const qty = props.location.search? Number(props.location.search.split("=")[1]) : 1;
    console.log('CART PAGE, QTY IS: ' + qty)
 
    const dispatch = useDispatch() 
    const history = useHistory()

    
    
    const handleClearCart = () => {

        dispatch(clearCart())
    }

    useEffect(() => {
       
            dispatch(addToCart(productId, qty))
        
    }, [])

    

    const checkoutHandler = () => {
        history.push('/signin?redirect=shipping')
    }
    


    return (
        <div className="cart">
            <div className="title-lining">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <div className="title-text">
                        <h2 className="px-3 ">Your cart</h2>
                        <div className=" cart-number">
                            <div className="digit">
                                <h4 className="digit-value">{cartItems.reduce((a,c) => a + c.qty, 0)}</h4>
                                <h4 className="digit-helper">items</h4>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            
            <Container fluid className="cart-items">
                { cartItems == ''?
                <div className="empty-cart">
                    <h1 style={{textAlign: 'center', margin: '40px 0', color: 'lightgray'}}>There are no items in your cart</h1>
                    <img src={emptycart} alt=""/>
                </div>
                :
                cartItems.map((item, index) => 
                    <CartCard item={item}/>
                )}
            </Container>
            <hr className="mt-5"/>
            <Container fluid className="total-price mt-5 pr-5">
                <div className="d-flex w-100 flex-column justify-content-end align-items-end">
                    <h3>Subtotal ({cartItems.reduce((a,c) => a + c.qty, 0)} items)</h3>
                    <div className="d-flex justify-content-end align-items-center w-50 mb-3">
                        <h2>Total:</h2>
                        <h1>${cartItems.reduce((a , c) => a + c.Price * c.qty, 0)}.00</h1>
                    </div>
                    <div className="d-flex w-25 justify-content-end ">
                        <button className="checkout-all" onClick={checkoutHandler}>Proceed to Checkout</button>
                        <button className="clear-all" onClick={()=> handleClearCart}>Clear All</button>
                    </div>
                </div>
            </Container>
            
        </div>
    )
}


 {/* <Col lg={1} className="">
                            <Button onClick={()=> handleRemoveItem(item.Id)} className="bg-light text-warning rounded">X</Button>
                        </Col> */}