import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { productsList} from '../actions/productActions';
import '../style/profile-page/profile_page.css'
import WMAlert from '../components/alert/WMAlert';
import Me from '../assets/Me.jpg'
import { Form, Container, Row, Col } from 'react-bootstrap';


export default function ProfilePage(props)
{
    
    const dispatch = useDispatch()
    const history = useHistory()

    const [items, setItems] = useState([])
    const {products} = useSelector(state => state.productList);
    const {userInfo, loading, error} = useSelector(state => state.userSignIn);
 
    useEffect(() => {
        dispatch(productsList())
    }, [])

    useEffect(() => {
        if(products)
        {
            setItems([...products])
            //dispatch(productsList())
        }
        
    }, [products])
    
    const [item, setItem] = useState({
        name: '',
        price: '',
        image: '',
        brand: '',
        category: '',
        popularity: '',
        stock: '',
        description: '',
    });


    const handleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        
        if(name === 'image')
        {
            const image = e.target.files[0];
            setItem({
                ...item,
                [name]: image
            })
        }
        else{
            setItem({
                ...item,
                [name]: value
            })
        }

    }



    const [alert, setAlert] = useState({
        show: false,
        msg: ''
    })


    return (

        <div className="profile-page">
            <div className="title">
                <h1 >{userInfo.name}</h1>
            </div>
            <div className="summary">
                <div className="category">
                    <h4 >Your Profile</h4>
                </div>
            </div>
            <hr/>
            <Row>
              <Col lg={3}>
                  <div className="profile-pic" style={{background: `url(${Me})`}}>
                  </div>
              </Col>
              <Col>
                  <Form>
                        <Form.Group controlId="formBasicEmail" >
                            <h5>isAdmin?</h5>
                            <h4>{userInfo.isAdmin}</h4>
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail" >
                            <h5>Your email</h5>
                            <h4>{userInfo.email}</h4>
                        </Form.Group>
                  </Form>

              </Col>
            </Row>
            
            {alert.show? <WMAlert alert={alert} onClose={()=> setAlert({...alert, show: false})}/>: '' }

           

       
           
            
        </div>
    )
}