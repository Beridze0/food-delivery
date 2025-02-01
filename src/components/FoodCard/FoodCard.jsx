import React from 'react'
import './FoodCard.css'
import food from '../../assets/food.jpg'

const FoodCard = () => {
  return (
    <div className='food-card-container'>
        <div className='food-card'>
            <div className='food-img-container'>
                <img src={food} alt="food image" className='food-img' />
            </div>
            <div className='food-info'>
                <p>Mushroom</p>
                <p>$13.00</p>
            </div>
            <div className='add-to-cart'>
                <button className='add-to-cart-btn'>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default FoodCard