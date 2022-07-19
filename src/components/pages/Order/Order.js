import React from 'react'
import styles from './Order.module.scss';
import OrderForm from '../../features/OrderForm/OrderForm';
import { Container } from 'react-bootstrap';

const Order = () => {
  return (
    <Container>
      <div className={styles.root} >
        <h2 data-aos="fade-in" data-aos-duration="1000" className='text-center text-white'>Please enter your delivery details</h2>
        <div data-aos="fade-in" data-aos-duration="1500">
          <OrderForm />
        </div>
      </div>
    </Container>
  )
}

export default Order