import React,{useEffect,useState} from 'react'
import axios from 'axios'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {useDispatch} from 'react-redux'
import {add} from '../store/cartSlice'


function Product() {
const dispatch=useDispatch()

    const [products,getProducts]=useState([]);
    useEffect(()=>{
        //api call
        fetch('https://fakestoreapi.com/products')
        .then(data=>data.json())
        .then(result=>getProducts(result))
        

    },[]);
           const addToCart=(Product)=>{
              // dispatch an add action
              dispatch(add(Product))
           }


    const card = products.map((product) => (
        <div className='col-md-3' style={{ marginBottom: '10px' }}>
          <Card key={product.id} className='h-100' style={{}}>
            <div className='content-center'>
              <Card.Img
                variant='top'
                src={product.image}
                style={{ width: '100px', height: '130px',marginTop:"50px" }}
              />
            </div>
            <Card.Body style={{ height: '200px' }}>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text> &#8377;{product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{backgroundColor:"white"}}>
              <Button variant='primary' onClick={()=>addToCart(product)}>Add To Cart</Button>

            </Card.Footer>
          </Card>
        </div>
      ));
      


  return (
    <div>
      <h1>Product dashboard</h1>
    <div className='row'>
          {card}
    </div>
    </div>
  )
}

export default Product
