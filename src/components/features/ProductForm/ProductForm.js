import React from 'react';
import styles from './ProductForm.module.scss';
import { Link } from 'react-router-dom';
import { discountPrice } from '../../../utils/utils';

const ProductForm = (props) => {

  return (
    <div className={`col-md-6 col-sm-12 col-lg-4 ${styles.root}`}>
      <div className="card text-black">
        <img src={props.image} className="card-img-top img" alt={props.name} />
        <div className="card-img-overlay">
          {
            props.discount ?
            <h5 className="card-title text-muted">discount: {props.discount}%</h5>
            :
            ''
          }
        </div>
        <div className="card-body">
          <div className="text-center mt-1">
            <h4 className="card-title" style={{ color: '#fb0473' }}>{props.name}</h4>
            {
              props.discount ? 
              <div>
                <h5 className='text-primary'>
                  Price:
                  <span className=' text-danger text-decoration-line-through ms-1'>
                    <span className='text-primary'>{props.price}$</span>
                  </span>
                  <span className="text-danger ms-1 mb-1">
                    {discountPrice(props.price, props.discount)}$
                  </span>
                </h5>
              </div>
              :
              <h5 className="text-primary mb-1 pb-3">Price: {props.price}$</h5>
            }
          </div>
          {
            props.discount ?
            <div className="p-1 mb-4 text-light" style={{ backgroundColor: '#95b4ff' }}>
              <h5 className="mb-0 text-center">Save: {discountPrice(props.price, props.discount, 'save')}$</h5>
            </div>
            :
            <div></div>
          }
          <div className="text-center">
            <div className="d-flex flex-column mb-4">
              <span className="h5 mb-0">Age: {props.age}+</span>
            </div>
          </div>
          <div className="d-flex flex-row">
            <Link to={`/product/${props.id}`} role="button" className="btn flex-fill text-light me-1" style={{ backgroundColor: '#fb0473' }} >
              More information
            </Link>
            <button type="button" className="btn btn-primary flex-fill ms-1">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductForm