import React from 'react'
import { useSelector } from 'react-redux'
import { getAllCartItems } from '../../../redux/cartItemsReducer'

const CartItems = () => {
  const itemsInCart = useSelector(getAllCartItems)

  if(!itemsInCart) {return <h2 className='text-center text-light'>No products in cart</h2>}
  else {
    return (
      <div>CartItems</div>
    )
  }
}

export default CartItems