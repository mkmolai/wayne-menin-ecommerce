import React, {useEffect} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import {useParams} from 'react-router';
import { Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import {useSelector, useDispatch}  from 'react-redux';
import blackHelmet from '../assets/Black helmet.png';
import helmy from '../assets/Helmy.png'
import ProductCard from '../components/cards/ProductCard';
import {productList} from '../actions/productActions';
import data from '../data';
import StockList from '../components/products/StockList';
import ProductGrid from '../components/product-grid/ProductGrid';


const Headgear = () => {

  const history = useHistory();
  const {category} = useParams()

  const navdata = [
    {
        display: 'All',
        path: '/shop/all'
    },
    {
        display: 'Protective Clothing',
        path: '/shop/clothing'
    },
    
    {
        display: 'Protective Headgear',
        path: '/shop/headgear'
    },
]
  const {pathname} = useLocation();
  const active = navdata.findIndex(item => item.path === pathname)

  const handleNavigate = (page) => {
    history.push(`${page}`)
  }
 
    return (
    <div>
      <div className="title-lining">
          <div className="title-space d-flex justify-content-center align-items-center">
              <div className="title-text">
                  <h2 className="px-5 py-4">WM Products</h2>
              </div>
          </div>
      </div>
      <div className="product-range-buttons">
        {
          navdata.map((item, index) => 

            <button key={index} className={`${index === active? 'button-active' : null}`} onClick={()=> handleNavigate(item.path)}>{item.display}</button>
          
          )
        }

        {/* <button onClick={()=> handleNavigate('clothing')}>Protective Clothing</button>
        <button onClick={()=> handleNavigate('headgear')}>Protective Headgear</button> */}
      </div>

      <Container className="mt-2">
       
          <Row className="">
            {/* <StockList category=""/> */}
            <ProductGrid category={category}/>
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