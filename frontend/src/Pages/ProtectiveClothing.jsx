import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Col, Container, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import ProductCard from '../components/cards/ProductCard';
import data from '../data';


const ProtectiveClothing = () => {

    const history = useHistory();

    const handleNavigate = (page) => {
      history.push(`/${page}`)
    }
   
 
        return(
            <div>
            <div className="title-lining">
                <div className="title-space d-flex justify-content-center align-items-center">
                    <div className="title-text">
                        <h2 className="px-5 py-4">Protective Clothing</h2>
                    </div> 
                </div>
            </div>
            <div className="product-range-buttons">
                <button onClick={()=> handleNavigate('shop')}>All</button>
                <button onClick={()=> handleNavigate('protectiveclothing')} className="button-active">Protective Clothing</button>
                <button onClick={()=> handleNavigate('headgear')}>Protective Headgear</button>
            </div>
            <Container className="mt-5">
                <Row className="py-4">
                    <Col lg={3} xs={12}>
                        {/* <button className="sort d-flex justify-content-around align-items-center pb-0 p-2">
                            <h3>Sort clothing</h3>
                            <span>></span>
                        </button> */}
                        <DropdownButton id="dropdown-item-button" title="Sort clothing items">
                            <Dropdown.ItemText>Choose from sort options</Dropdown.ItemText>
                            <Dropdown.Item as="button">by Coats</Dropdown.Item>
                            <Dropdown.Item as="button">by Shoes</Dropdown.Item>
                            <Dropdown.Item as="button">by Something else</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <div className="pb-5 d-flex flex-wrap">
                    {data.productss.map(product => <ProductCard product={product}/>)}
                        
                </div>

            </Container>
        </div>
        )
        
}

export default ProtectiveClothing;