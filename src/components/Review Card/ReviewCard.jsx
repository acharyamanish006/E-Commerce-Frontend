import { Rating } from '@mui/material'
import React from 'react';
import './styles.scss';

const ReviewCard = () => {
  return (
<div className="review">
<Rating name="rating-read" defaultValue={4}  readOnly size={'small'}/>
<span className='reviewer-name'>Popatlal Pandey</span>
<span className='review-date'>18 May 2020</span>
<p className='review-des'>It has met my expectation, mouse design is comfortable to hold and grip is nice. It is pleasent to click but scroll wheel could have been more smooth apart from that overall mouse is good. Also got this on a nice discount so worth it.
P.s it doesnot comes with battery you have to buy.</p>
</div>
  )
}

export default ReviewCard