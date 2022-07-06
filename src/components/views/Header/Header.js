import React from 'react'
import styles from './Header.module.scss';

import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <div className={styles.root}>
      <NavBar />
    </div>
  )
}

export default Header