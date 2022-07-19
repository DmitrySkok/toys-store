import React from 'react'
import CarouselForm from '../../common/CarouselForm/CarouselForm'
import AllProducts from '../../views/AllProducts/AllProducts'
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.root}>
      <div>
        <CarouselForm />
        <AllProducts />
      </div>
    </div>
  )
}

export default Home