import React, { useState } from 'react'
import ProductItem from '../../components/Product Item/ProductItem';
import './home.scss';
import Divider from '@mui/material/Divider';
const Home = ({products}) => {
 
  return (
    <div className='home'>
      <div className="featured-section">
        <div className="title">
      <p>Featured Product</p>
        <Divider/>
        </div>
      <div className="featured-products">
        {
          products.map((product)=>{
            // console.log(product)
            return <ProductItem product={product} key={product.id}/>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default Home