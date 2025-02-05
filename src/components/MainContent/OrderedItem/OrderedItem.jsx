import React, { useState } from 'react'
import './OrderedItem.css'
import { FiEdit3 } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineEditOff } from "react-icons/md";

const OrderedItem = ({mealDetails}) => {

    const [editWindow, setEditWindow] = useState(false)

  return (
    <div className='order-items'>
                <div className='ordered-food'>
                    <div className='ordered-food-img-container'>
                        <img src={mealDetails?.strMealThumb} className='ordered-food-img' />
                    </div>
                    
                    <div className='ordered-food-details'>
                        <div className='ordered-food-title'>
                            <p>{mealDetails?.strMeal}</p>
                            <p>Quantity: 1</p>
                        </div>
                        <div className='ordered-food-price'>
                            <p>$13.00</p>
                            <div className='ordered-food-edit'>
                                {   editWindow?
                                    <MdOutlineEditOff className='order-edit' onClick={()=> setEditWindow(prev => !prev)} /> :
                                    <FiEdit3 className='order-edit' onClick={()=> setEditWindow(prev => !prev)}  />
                                }
                                    {
                                        editWindow && 
                                        <div className='edit-window'>
                                           <p>QUANTITY</p> 
                                           <div className='quantity-btn'>
                                                <button>-</button>
                                                <p>1</p>
                                                <button>+</button>
                                           </div>
                                        </div>
                                    }
                                <RiDeleteBin5Line className='order-delete' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default OrderedItem