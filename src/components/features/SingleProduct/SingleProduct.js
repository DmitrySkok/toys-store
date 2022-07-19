import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Col, Row, Card, Button } from 'react-bootstrap';
import styles from './SingleProduct.module.scss';
import { discountPrice } from '../../../utils/utils';
import { getProductsById } from '../../../redux/productsReducer';

const SingleProduct = () => {
  const { id } = useParams();
  const productData = useSelector(state => getProductsById(state, id));

  return (
    <Row className={`${styles.root}`}>
      <Col data-aos="fade-right" data-aos-duration="1000" md={12} lg={5} className={`rounded ${styles.imageBlock}`}
        style={{
          background: `url("${productData.image}") center center/cover no-repeat`,
        }}>
        {
          productData.discount ?
            <>
              <Row className='mt-2 p-2' style={{ backgroundColor: '#95b4ff', opacity: '0.85' }}>
                <Col xs={6} md={6} lg={6}>
                  <h5 className="text-light m-0">discount: {productData.discount}%</h5>
                </Col>
                <Col xs={6} md={6} lg={6}>
                  <h5 className="text-light m-0 text-end">Save: {discountPrice(productData.price, productData.discount, 'save')}$</h5>
                </Col>
              </Row>
            </>
            :
            ''
        }
      </Col>
      <Col data-aos="fade-left" data-aos-duration="1000" md={12} lg={7} className={styles.textBlock}>
        <Card>
          <Card.Body>
            <Card.Title style={{ color: '#fb0473' }}><h2>{productData.name}</h2></Card.Title>
            <Card.Text>
              {
                productData.discount ?
                  <div>
                    <h4 className='text-primary'>
                      Price:
                      <span className=' text-danger text-decoration-line-through ms-1'>
                        <span className='text-primary'>{productData.price}$</span>
                      </span>
                      <span className="text-danger ms-1 mb-1">
                        {discountPrice(productData.price, productData.discount)}$
                      </span>
                    </h4>
                  </div>
                  :
                  <h5 className="text-primary mb-1 pb-3">Price: {productData.price}$</h5>
              }
              <div className="d-flex flex-column">
                <span className="h5 text-primary">
                  Availability:
                  {
                    productData.availability ?
                    <span className="text-success ms-1">In stock</span>
                    :
                    <span className="text-warning ms-1">Out of stock</span>
                  }
                </span>
                <span className="h5"><span className="text-primary">Age:</span> {productData.age}+</span>
                <span className='h5'><span className='text-primary'>Description:</span> {productData.description}</span>
              </div>
            </Card.Text>
            <div className="d-grid gap-2">
              {
                productData.availability ?
                <Button variant="outline-primary" size="lg">
                  Add product to cart
                </Button>
                :
                <Button variant="outline-secondary" size="lg" disabled>
                  Add product to cart
                </Button>
              }
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SingleProduct