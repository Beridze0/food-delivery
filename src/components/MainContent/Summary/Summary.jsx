import React from 'react'
import './Summary.css'
import OrderedItem from '../OrderedItem/OrderedItem'

const Summary = () => {
  return (
    <div className='sumamry-container'>
        <div className='summary'>

            <div className='summary-title'>
                <p>Order Sumamry</p>
            </div>
            <OrderedItem />
            <OrderedItem />
            <OrderedItem />
            

            

        </div>
    </div>
  )
}

export default Summary