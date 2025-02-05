import React from 'react'
import './OrderedItem.css'
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

const OrderedItem = ({mealDetails}) => {
    
    console.log(mealDetails);
    
    

  return (
    <div className='order-items'>
                <div className='ordered-food'>
                    <div className='ordered-food-img-container'>
                        <img src={mealDetails?.strMealThumb} className='ordered-food-img' />
                    </div>
                    
                    <div className='ordered-food-details'>
                        <div className='ordered-food-title'>
                            <p>{mealDetails?.strMeal}</p>
                        </div>
                        <div className='ordered-food-price'>
                            <p>$13.00</p>
                            <div className='ordered-food-edit'>
                                <FiEdit3 className='order-edit' />
                                <RiDeleteBin5Line className='order-delete' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default OrderedItem