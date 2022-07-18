import React from 'react';
import { Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/productsReducer';
import ProductForm from '../../features/ProductForm/ProductForm';

const AllProducts = () => {
  const products = useSelector(getAllProducts);
  return (
    <Row xs={1} md={2} lg={3} className="g-3">
      {products.map(product=>(
        <ProductForm 
          key={product.id}
          id = {product.id}
          name = {product.name}
          price = {product.price}
          discount = {product.discount}
          age = {product.age}
          availability = {product.availability}
          category = {product.category}
          description = {product.description}
          image = {product.image}
        />
      ))}
    </Row>
  )
}

export default AllProducts