import React from 'react'
import './FoodGallery.css'
import FoodCard from '../../FoodCard/FoodCard'

const FoodGallery = () => {
  return (
    <div className='food-gallery-container'>
        <div className='food-gallery'>
            <FoodCard />
        </div>
    </div>
  )
}

export default FoodGallery