import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { useSelector } from 'react-redux';
import { getAllCarouselItems } from '../../../redux/carouselItemsReducer';
import styles from './CarouselForm.module.scss';

const CarouselForm = () => {
  const carouselItems = useSelector(getAllCarouselItems);

  return (
    <Carousel className={`my-2 ${styles.root}`} interval={2000} fade indicators={false}>
      {carouselItems.map(carouselItem => (
        <Carousel.Item key={carouselItem.name + carouselItem.id}>
        <img
          className="d-block w-75 rounded-3 mx-auto"
          src={carouselItem.image}
          alt={carouselItem.name}
        />
        <Carousel.Caption>
          <h3 className='text-primary'>{carouselItem.title}</h3>
          <h4 className='text-secondary'>{carouselItem.description}</h4>
        </Carousel.Caption>
      </Carousel.Item>
      ))}
    </Carousel>
  )
}

export default CarouselForm