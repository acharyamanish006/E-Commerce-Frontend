import { Rating } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';
const ProductItem = ({product}) => {
  return (
    <Link to={`/product/${product.id}`}>
    <div className='product-item'>
        <div className="product-image">
            <img src={product.image} alt="Product" draggable='false' />
        </div>
        <div className="product-description">
            <p className='product-title'>{product.title } </p>
            <p className='product-price'> Rs. {product.price}</p>
            <div className="product-rating">
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
            </div>
        </div>
    </div>
    </Link>
  )
}

export default ProductItem