import React from 'react'
import CartItems from '../../features/CartItems/CartItems';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div className={styles.root}>
      <CartItems />
    </div>
  )
}

export default Cart