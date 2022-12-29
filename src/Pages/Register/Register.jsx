import React, { useState } from 'react'
import './register.scss';
import GoogleLogo from './assets/goole.png'
import FacebookLogo from './assets/facebook.png'
import { Link } from 'react-router-dom';
const  Register = () => {
  const handleRegister = (e)=>{
    e.preventDefault();
    
  }
  const [data,setdata] = useState({name:'',email:'',password:'',cpassword:''});
  const handleChange = (e)=>{
    setdata({...data,[e.target.name]:e.target.value})
  }
     return (
      <div className="register-page">
        <div className="wrapper">
          <h1>Sign up</h1>
          <form onSubmit={handleRegister}>
          <input type="text" placeholder='Enter your Name' name='name' value={data.name}  onChange={handleChange}/>  
          <input type="text" placeholder='Enter your Email' name='email' value={data.email}  onChange={handleChange}/>  
          <input type="text" placeholder=' Password' name='password' value={data.password}  onChange={handleChange}/>  
          <input type="text" placeholder=' Confirm Password' name='cpassword' value={data.cpassword}   onChange={handleChange}/>  
          <input type="submit" value='Register' className='login-btn' />
          </form>
          <div className="other-options">
            <h3>or</h3>
            <p>Sign up with </p>
            <img src={GoogleLogo} alt="Google" />
            <img src={FacebookLogo} alt="Facebook" />
          </div>
          <div className="login-options">
            <p>Already have an account <Link to={'/login'}>Sign in here</Link></p>
          </div>
      </div>
        </div>
    
  )
}

export default Register