import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import { Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import {useSelector, useDispatch}  from 'react-redux';
import blackHelmet from '../assets/Black helmet.png';
import helmy from '../assets/Helmy.png'
import ProductCard from '../components/cards/ProductCard';
import {productList} from '../actions/productActions';
import data from '../data';


const Headgear = () => {

   const history = useHistory();

  const handleNavigate = (page) => {
    history.push(`/${page}`)
  }

    return (
        <div>
          <div className="title-lining">
              <div className="title-space d-flex justify-content-center align-items-center">
                  <div className="title-text">
                      <h2 className="px-5 py-4">Headgear</h2>
                  </div>
              </div>
          </div>

          <div className="product-range-buttons">
              <button onClick={()=> handleNavigate('shop')} >All</button>
              <button onClick={()=> handleNavigate('protectiveclothing')}>Protective Clothing</button>
              <button onClick={()=> handleNavigate('headgear')} className="button-active">Protective Headgear</button>
            </div>
          
          <Container className="mt-5">
              <Row className="py-4">
                  <Col lg={3} xs={12}>
                  <DropdownButton id="dropdown-item-button" title="Sort headgear items">
                          <Dropdown.ItemText>Choose from sort options</Dropdown.ItemText>
                          <Dropdown.Item as="button">by Racing gear</Dropdown.Item>
                          <Dropdown.Item as="button">by Swimming gear</Dropdown.Item>
                          <Dropdown.Item as="button">by Industrial gear</Dropdown.Item>
                          <Dropdown.Item as="button">by Boxing gear</Dropdown.Item>
                      </DropdownButton>
                  </Col>
              </Row>
              <Row className="">
                {data.productss.map(product => 

                  <ProductCard product={product}/>

                )}
                  {/* <ProductCard image={helmy}/>
                  <ProductCard image={blackHelmet}/>
                  <ProductCard image={helmy}/>
                  <ProductCard image={helmy}/>
                  <ProductCard image={helmy}/>
                  <ProductCard image={helmy}/>
                  <ProductCard image={helmy}/> */}
                  {/* <ProductCard image={redhelmet}/>
                  <ProductCard image={redhelmet}/> */}
              </Row>

          </Container>
        </div>)

  
  }
    


{/* [
  'primary',
  'secondary',
  'success',
  'danger',
  'warning', 
  'info',
  'light',
  'dark',
].map((variant, idx) => (
  <Alert key={idx} variant={variant}>
    This is a {variant} alert—check it out!
  </Alert>
)); */}

{/* function AlertDismissibleExample() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          Change this and that and try again. Duis mollis, est non commodo
          luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
          Cras mattis consectetur purus sit amet fermentum.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

render(<AlertDismissibleExample />); */}

export default Headgear;