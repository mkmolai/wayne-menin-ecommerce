import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import { Col, Container, Form } from 'react-bootstrap';
import blackHelmet from '../../assets/Black helmet.png'
import { addToCart, removeFromCart } from '../../actions/cartActions';

 
export default function CartCard({item})
{
    const dispatch = useDispatch();
    const history = useHistory()

    const handleChange = (e) => {
        const {id, value} = e.target;
        console.log('clikc: ' + id)
        dispatch(addToCart(id, value))
    }

    const handleRemoveItem = (Id) => {

        dispatch(removeFromCart(Id))
    }

    const [readyToDelete, setReadyToDelete] = useState(false)

    return (
            <div className="cart-card">
                <div className="cart-image">
                    {/* <img src={blackHelmet}/> */}
                    <img src={`http://localhost:9000/${item.Image}`} onClick={() => history.push('/product/'+ item.Id)}/>
                </div>
                <div className="cart-details">
                    <div className="description">
                        <h1>{item.Name}</h1>
                        <p>{item.Description}</p>
                    </div>
                    <div className="quantity">
                        <div className="qty">
                            <span>QTY</span> 
                            <Form.Control id={item.Id}  type="text" as="select" size="sm" value={item.qty} onChange={handleChange}>
                                {[...Array(item.Stock).keys()].map(x => 
                                <option key={x+1} value={x+1}>{x+1}</option>
                                    )}
                            </Form.Control>
                        </div>
                            
                        <h2 className="text-warning mt-2">${item.Price}.00</h2>
                        <button className="checkout" onMouseEnter={()=> setReadyToDelete(true)} onMouseLeave={()=> setReadyToDelete(false)} onClick={()=> handleRemoveItem(item.Id)}>{readyToDelete? 'x remove item' : `#${item.Popularity}`}</button>
                    </div>
                </div>
            </div>
    )
}

{/* <CartCard image={blackHelmet}/> */}