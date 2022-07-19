import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductsByCategory } from '../../../redux/productsReducer';
import ProductForm from '../ProductForm/ProductForm';
import { Row } from 'react-bootstrap';

const SingleCategory = () => {
  const { categoryName } = useParams();
  const categoryData = useSelector(state => getProductsByCategory(state, categoryName));
  if(!categoryData || categoryData.length === 0) return <h1 className='text-center'>No products with this category</h1>
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {categoryData.map(product=>(
        <ProductForm 
          key={product.id}
          id = {product.id}
          name = {product.name}
          price = {product.price}
          discount = {product.discount}
          age = {product.age}
          image = {product.image}
        />
      ))}
    </Row>
  )
}

export default SingleCategory