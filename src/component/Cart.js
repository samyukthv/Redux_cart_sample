import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {remove} from '../store/cartSlice'





function Cart() {
  const products= useSelector(state=>state.cart)
const dispatch= useDispatch()


const RemoveFromCart=(id)=>{
  //dispatch a remove action
    dispatch(remove(id))
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
          <Button variant='danger' onClick={()=>RemoveFromCart(product.id)}>Remove Item</Button>

        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <h1>Cart</h1>
      <div className='row'>
          {card}
    </div>
    </div>
  )
}

export default Cart
