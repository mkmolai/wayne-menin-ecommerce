import React, { useState, useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import { Modal, Button, Form, Row, Alert } from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import { saveProduct, productsList, deleteProduct, editProduct } from '../actions/productActions';
import '../style/products-page/products_page.css'
import { validate } from '../helpers/validate';
import WMAlert from '../components/alert/WMAlert';
import BasicTable from '../components/table/BasicTable';


export default function ProductsPage(props)
{
    
    const dispatch = useDispatch()
    const history = useHistory()
    const [errors, setErrors] = useState({})

    const [items, setItems] = useState([])
    const {loading, products} = useSelector(state => state.productList);
    // const {loading_save, success, error} = useSelector(state => state.productSave);
 
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(item))
        console.log('ERRORS AT THIS LEVEL: ' + errors.name)

        if(!item.name || !item.image)
        { setAlert({ show: true, msg: 'All fields should be filled in. Especially the name and image fields'}) }
        else
        {
            console.log('IN HSUBMIT: ' + item.name)
    
            const formData = new FormData();
            formData.append('name', item.name);
            formData.append('category', item.category);
            formData.append('popularity', item.popularity);
            formData.append('brand', item.brand);
            formData.append('price', item.price);
            formData.append('description', item.description);
            formData.append('image', item.image);
            formData.append('stock', item.stock);
    
            dispatch(saveProduct(formData))
            closeModal();
            
        }
        
        
        
    }

    const handleEdit = (e) => {
        e.preventDefault()
        dispatch(editProduct({id: targetID, ...item}))
        closeModal();
        console.log('target id in EDIT function is: ' + targetID)
    }

    const handleDelete = (e) => {
        e.preventDefault()
        dispatch(deleteProduct(targetID))
        closeModal();
        console.log('edit id is: ' + targetID)
    }

    

    const [modalShow, setModalShow] = React.useState(false);
    const [isActioning, setIsActioning] = useState(false)
    const [targetID, setTargetID] = useState()

    const openModal = (type, product) => {
        setModalShow(true);

        if(type === 'create'){
            setIsActioning('create') 
            setItem({
                name: '',
                description: '',
                price: '',
                image: '',
                brand: '',
                category: '',
                stock: '',
            })
        }
        else if(type === 'edit'){
            setIsActioning('edit')
            setTargetID(product.Id)

            setItem({
                name: product.Name,
                description: product.Description,
                price: product.Price,
                popularity: product.Popularity,
                image: product.Image,
                brand: product.Brand,
                category: product.Category,
                stock: product.Stock,
            })
        }
        else {
            setIsActioning('delete');
            setTargetID(product.Id)

            setItem({
                name: product.Name,
                description: product.Description,
                price: product.Price,
                popularity: product.Popularity,
                image: product.Image,
                brand: product.Brand,
                category: product.Category,
                stock: product.Stock,
            })
        }

    }

    const closeModal = () => {
        setModalShow(false);
        setIsActioning(false)
    }

    const [alert, setAlert] = useState({
        show: false,
        msg: ''
    })


    return (

        <div className="products-page">
            <div className="title">
                <h1 >WM products.</h1>
                <h1 >({items.length})</h1>
            </div>
            <div className="summary">
                <div className="category">
                    <h4 >Headgear</h4>
                    <h4 >{(items.filter(x => x.Category === 'headgear').length)}</h4>
                </div>
                <div className="category">
                    <h4 >Clothing</h4>
                    <h4 >{(items.filter(x => x.Category === 'clothing').length)}</h4>
                </div>
            </div>
            <hr/>
            
            {alert.show? <WMAlert alert={alert} onClose={()=> setAlert({...alert, show: false})}/>: '' }

            <Button className="button-create" variant="primary" onClick={() => openModal('create', {})}> {isActioning === 'create'? 'Creating product' : isActioning === 'edit'? 'Editing product': isActioning === 'delete'? 'Deleting product' : 'Create product' } </Button>
            <br/>
            { isActioning?
                <Button className="button-cancel" variant="primary" onClick={() => closeModal()}> Cancel</Button>
                :''
            }

        {modalShow && 
            <Form className={`wm-form-product ${isActioning === 'delete'? 'delete' : ''}`}  encType="multipart/form-data">
                <div className="title">
                    <h1 >{isActioning === 'create'? 'Enter product details.' : isActioning === 'edit'? 'Update product details.' : 'Delete product'}</h1>
                </div>

                <hr/>
                {/* <div>{loading_save && 'Loading ...'}</div> */}
                {/* <div>{error && error }</div> */}
                {
                    isActioning === 'delete'? 
                    <>
                    <Form.Group controlId="formBasicEmail" >
                        <Form.Label>Product name</Form.Label>
                        <Form.Control  name="name" type="text" size="sm" value={item.name} onChange={handleChange} placeholder="Enter your name" />
                            {/* {errors.name && <p className="text-danger">{errors.name}</p>} */}
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Category</Form.Label>
                        <Form.Control name="category" type="text" as="select" size="sm" value={item.category} onChange={handleChange} placeholder="Enter your name">
                            <option>--- Select category ---</option>
                            <option value="headgear">Headgear</option>
                            <option value="clothing">Clothing</option>
                        </Form.Control>
                    </Form.Group>
                    <Button onClick={isActioning === 'delete'? handleDelete : handleSubmit} className="button-submit" variant="primary" type="submit">
                            {isActioning === 'create'? 'Save product.' : isActioning === 'edit'? 'Update product.' : 'Delete product' }
                    </Button>
                    </>
                    : 
                    <>
                        <Form.Group controlId="formBasicEmail" >
                            <Form.Label>Product name</Form.Label>
                            <Form.Control  name="name" type="text" size="sm" value={item.name} onChange={handleChange} placeholder="Enter your name" />
                                {/* {errors.name && <p className="text-danger">{errors.name}</p>} */}
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Category</Form.Label>
                            <Form.Control name="category" type="text" as="select" size="sm" value={item.category} onChange={handleChange} placeholder="Enter your name">
                                <option>--- Select category ---</option>
                                <option value="headgear">Headgear</option>
                                <option value="clothing">Clothing</option>
                            </Form.Control>
                        </Form.Group>
                    
                        <Row>
                            <Form.Group controlId="formBasicEmail" className="col-4">
                                <Form.Label>Popularity</Form.Label>
                                <Form.Control name="popularity" type="text" as="select" size="sm" value={item.popularity} onChange={handleChange} placeholder="No">
                                    <option>--- Select popularity ---</option>
                                    <option value="new">New</option>
                                    <option value="trending">Trending</option>
                                    <option value="none">None</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formBasicEmail" className="col-4">
                                <Form.Label>Brand</Form.Label>
                                <Form.Control name="brand" type="text" size="sm" value={item.brand} onChange={handleChange} placeholder="Brand" />
                            </Form.Group>
                            
                            <Form.Group controlId="formBasicEmail" className="col-4">
                                <Form.Label>Price</Form.Label>
                                <Form.Control name="price" type="number" size="sm" value={item.price} onChange={handleChange} placeholder="Price" />
                            </Form.Group>
                        </Row>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name="description" type="text" size="sm" value={item.description} onChange={handleChange} placeholder="Description" />
                        </Form.Group>
                        
                        <Row>
                            <Form.Group controlId="formBasicPassword" className="col-6">
                                <Form.Label>Image</Form.Label>
                                <Form.Control name="image" type="file" size="sm" onChange={handleChange} placeholder="Image" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className="col-6">
                                <Form.Label>Stock</Form.Label>
                                <Form.Control name="stock" type="text" size="sm" value={item.stock} onChange={handleChange} placeholder="Stock" />
                            </Form.Group>
                        </Row>
                        
                        <Button onClick={isActioning === 'edit'? handleEdit : handleSubmit} className="button-submit" variant="primary" type="submit">
                            {isActioning === 'create'? 'Save product.' : isActioning === 'edit'? 'Update product.' : 'Delete product' }
                        </Button>
                    </>
                 }
            </Form> 
        }
        {
            isActioning === 'create' || isActioning === 'edit' || isActioning === 'delete' ? ''
            :
                <div className="products-list-mgt"> 
                    <BasicTable openModal={openModal}/>
                </div>
            }
           
            
        </div>
    )
}

// <table>
//     <thead>
//         <tr >
//             <th>ID</th>
//             <th>Name</th>
//             <th>Category</th>
//             <th>Description</th>
//             <th>Image</th>
//             <th>Price</th>
//             <th >Actions</th>
//         </tr>
//     </thead>
//     <tbody>
//         {items.map(product =>
//             <tr >
//                 <td>{product.Id}</td>
//                 <td>{product.Name}</td>
//                 <td>{product.Category}</td>
//                 <td>{product.Description}</td>
//                 <td><img className="product-list-mgt-image" src={`http://localhost:9000/${product.Image}`} /></td>
//                 <td>{product.Price}</td>
//                 <td>
//                     <Button onClick={()=> openModal('edit', product)}>Edit</Button>
//                     <Button onClick={()=> openModal('delete', product)}>Delete</Button></td>
                
//             </tr>
//             )}
//     </tbody>
// </table>