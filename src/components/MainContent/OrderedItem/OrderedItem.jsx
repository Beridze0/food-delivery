import React from 'react'
import './OrderedItem.css'
import food from '../../../assets/food.jpg'

const OrderedItem = () => {
  return (
    <div className='order-items'>
                <div className='ordered-food'>
                    <div className='ordered-food-img-container'>
                        <img src={food} alt="" className='ordered-food-img' />
                    </div>
                    
                    <div className='ordered-food-details'>
                        <div className='ordered-food-title'>
                            <p>Mushroom (1)</p>
                        </div>
                        <div className='ordered-food-price'>
                            <p>$13.00</p>
                            <div className='ordered-food-edit'>
                                <p>edit</p>
                                <p>del</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default OrderedItem