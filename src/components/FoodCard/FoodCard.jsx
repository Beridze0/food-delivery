import React from 'react'
import './FoodCard.css'
import { Link } from 'react-router-dom';

const FoodCard = ({mealObj}) => {

    

  return (
    <div className='food-card-container'>
            <Link to={`/meal/${mealObj.idMeal}`} className='food-card'>
                <div className='food-img-container'>
                    <img src={mealObj.strMealThumb} alt="food image" className='food-img' />
                </div>
                <div className='food-info'>
                    <p>{mealObj.strMeal.slice(0, 20)}...</p>
                    <p>$13.00</p>
                </div>
            </Link>
            <div className='add-to-cart'>
                <button className='add-to-cart-btn'>
                    Add to Cart
                </button>
            </div>
    </div>
  )
}

export default FoodCard