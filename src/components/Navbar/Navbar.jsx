import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss';
import Tooltip from '@mui/material/Tooltip';
const Navbar = ({products,setproducts}) => {
  const [searchProduct,setsearchProduct] = useState("");
  const handleSearch = (e)=>{
    e.preventDefault();

      const filteredProduct =   products.filter((product)=>{
        const {title} = product;
        return title.toLowerCase().includes(searchProduct.toLowerCase())
      })
      console.log(filteredProduct);
      setproducts(filteredProduct)
  }
  return (
    <div className='navbar'>
      <div className="logo">
        <Tooltip title='Brand Name' arrow>
        <Link to={'/'}>Brand Name</Link>
        </Tooltip>
      </div>
      <div className="serach-bar">
        <form onSubmit={handleSearch} >
        <input type="text" placeholder='Search aything ...' value={searchProduct} onChange={e=>setsearchProduct(e.currentTarget.value)} />
        </form>
      </div>
      <nav>
        <ul>
          <li><Tooltip title='Home' arrow ><Link to={'/'}>   <span > Home</span> </Link></Tooltip></li>
          <li><Tooltip title='My Orders' arrow ><Link to={'/'}>   <span > My Orders</span> </Link></Tooltip></li>
          <li><Tooltip title='Cart' arrow ><Link to={'/'}>   <span > Cart</span> </Link></Tooltip></li>
          <li><Tooltip title='Wish List' arrow ><Link to={'/'}>   <span > Wish List</span> </Link></Tooltip></li>
          <li><Tooltip title='Account' arrow ><Link to={'/'}>   <span > Account</span> </Link></Tooltip></li>
        </ul>
      </nav>


    </div>
  )
}

export default Navbar