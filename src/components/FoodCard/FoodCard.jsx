import React from 'react'
import './FoodCard.css'

const FoodCard = ({mealObj}) => {

    console.log(mealObj);
    

  return (
    <div className='food-card-container'>
        <div className='food-card'>
            <div className='food-img-container'>
                <img src={mealObj.strMealThumb} alt="food image" className='food-img' />
            </div>
            <div className='food-info'>
                <p>{mealObj.strMeal.slice(0, 20)}...</p>
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