import React from 'react';
import './loader.scss';
import CircularProgress  from '@mui/material/CircularProgress';

const Loader = () => {
  return (
    <div className='loader'>
       <CircularProgress/>
    </div>
  )
}

export default Loader