import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';
import blackHelmet from '../../assets/Black helmet.png'
import { useState } from 'react';

 
export default function ProductCard(props)
{
    const [qty, setQty] = useState(1);
    const history = useHistory();

    const handleAddToCart = () => {
        history.push(`/cart/${props.product.Id}?qty=${qty}`)
    }
    
    return ( 
            <Col lg={3} sm={6} xs={6} className="product-card mb-5 pb-5 mt-5 pt-4">
                <div className="product-card-content p-5">

                    {/* <div className="product-card-img"> */}
                    <Link to={"/product/"+ props.product.Id} className="product-card-img-container">
                        <img src={`http://localhost:9000/${props.product.Image}`} className="product-card-img" />
                    </Link> 
                    {/* </div> */} 

                    <div className="product-card-label pt-3 d-flex flex-column align-items-center">
                        <h3>{props.product.Name}</h3>
                        <div className="d-flex w-100 justify-content-around align-items-center">
                            <p>{props.product.Category}</p>
                            <p className="in-stock-qty">Quantity: {props.product.Stock}</p>
                        </div>
                        <div className="add-to-cart d-flex justify-content-around align-items-center py-1 px-2">
                            <button onClick={handleAddToCart}>Add to cart</button>
                            <span style={{color: "#6F04FC"}}>|</span>
                            <h5>${props.product.Price}</h5>
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
                <br/>
            </Col>
    )
}




// import React from 'react';
// import {Link} from 'react-router-dom';
// import { Col, Container } from 'react-bootstrap';
// import blackHelmet from '../../assets/Black helmet.png'


// export default function ProductCard(props)
// {
//     return ( 
//             <Col lg={3} sm={6} xs={6} className="product-card mb-5 pb-5 mt-5 pt-4">
//                 <div className="product-card-content p-5">

//                     {/* <div className="product-card-img"> */}
//                     <Link to={"/product/"+ props.product._id}>
//                         <img src={props.product.image}/>
//                     </Link>
//                     {/* </div> */} 

//                     <div className="product-card-label pt-3 d-flex flex-column align-items-center">
//                         <h3>{props.product.name}</h3>
//                         <div className="d-flex w-100 justify-content-around align-items-center">
//                             <p>{props.product.type}</p>
//                             <p className="in-stock-qty">Quantity: {props.product.stock}</p>
//                         </div>
//                         <div className="add-to-cart d-flex justify-content-around align-items-center py-1 px-2">
//                             <button>Add to cart</button>
//                             <span style={{color: "#6F04FC"}}>|</span>
//                             <h5>{props.product.price}</h5>
//                         </div>
//                     </div>
//                 </div>
//                 <br/>
//                 <br/>
//                 <br/>
//             </Col>
//     )
// }