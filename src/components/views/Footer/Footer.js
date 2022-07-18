import React from 'react'
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className={styles.root}>
      <div className={`${styles.footer}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-4 col-xs-12">
              <div className= {styles.single_footer}>
                <h4>Services</h4>
                <ul>
                  <li><Link to='/'>Lorem Ipsum</Link></li>
                  <li><Link to='/'>Simply dummy text</Link></li>
                  <li><Link to='/'>The printing and typesetting </Link></li>
                  <li><Link to='/'>Standard dummy text</Link></li>
                  <li><Link to='/'>Type specimen book</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className={clsx(styles.single_footer, styles.single_footer_address)}>
                <h4>Page Link</h4>
                <ul>
                  <li><Link to='/'>Lorem Ipsum</Link></li>
                  <li><Link to='/'>Simply dummy text</Link></li>
                  <li><Link to='/'>The printing and typesetting </Link></li>
                  <li><Link to='/'>Standard dummy text</Link></li>
                  <li><Link to='/'>Type specimen book</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className={clsx(styles.single_footer, styles.single_footer_address)}>
                <h4>Subscribe today</h4>
                <div className="signup_form">
                  <form action="#" className={styles.subscribe}>
                    <input type="email" className={styles.subscribe__input} placeholder="Enter Email Address" />
                    <button type="button" className={styles.subscribe__btn}><FontAwesomeIcon icon={faPaperPlane} /></button>
                  </form>
                </div>
              </div>
              <div className={styles.social_profile}>
                <ul>
                  <li><Link to='/'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                  <li><Link to='/'><FontAwesomeIcon icon={faTwitter} /></Link></li>
                  <li><Link to='/'><FontAwesomeIcon icon={faGooglePlusG} /></Link></li>
                  <li><Link to='/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <p className={styles.copyright}>Copyright © 2022 <Link to='/'>Toys.store</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer