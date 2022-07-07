import React from 'react'
import styles from './Header.module.scss';

import NavBar from '../NavBar/NavBar';


const Header = () => {
  return (
    <div data-aos="fade-down" data-aos-duration="900" className={styles.root}>
      <NavBar />
    </div>
  )
}

export default Header