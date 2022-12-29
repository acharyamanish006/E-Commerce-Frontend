import { Rating } from '@mui/material';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ReviewCard from '../Review Card/ReviewCard';
import './productDetails.scss';
const ProductDetails = ({products}) => {
  const [quantity,setquantity]  = useState(1);
    const {productId} = useParams();
    const MAX_LIMIT = 20;
    // console.log(products)
    const product = products[productId-1];

  return (
    <>
    <div className='product-details-holder'>
      <div className="product-image-holder">
        <img src={product?.image} alt={product?.title} />
      </div>
      <div className="product-details">
        <h5 className='product-title'>{product?.title}</h5>
        <p className='product-description'>{product?.description}</p>
        <div className="product-rating">
            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
        </div>
        <p className='product-price'>Rs. {product?.price}</p>
        <div className="product-quantity">
          <button onClick={()=>{
            if(quantity<=1) return setquantity(1)
            setquantity(quantity-1)
            }}>-</button>
          <input type="number" value={quantity} onChange={e=>setquantity(Number(e.target.value))}  />
          <button onClick={()=>{
            if(quantity>=MAX_LIMIT) return setquantity(MAX_LIMIT)
            setquantity(quantity+1)
          }}>+</button>
        </div>
      </div>
    </div>
    <div className="product-reviews">
    <h2 className='review-title'> Rating & Reviews</h2>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
    <ReviewCard/>
  </div>
      </>
  )
}

export default ProductDetails