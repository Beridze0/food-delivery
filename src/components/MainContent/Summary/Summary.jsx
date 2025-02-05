import React from 'react'
import './Summary.css'
import OrderedItem from '../OrderedItem/OrderedItem'

const Summary = ({mealDetails}) => {

    

  return (
    <div className='sumamry-container'>
        <div className='summary'>

            <div className='summary-title'>
                <p>Order Summary</p>
            </div>

            {
                mealDetails.map((item, i)=>(
                    <OrderedItem key={i} mealDetails={item} />
                ))
            }
            

            <div className='payment'>
                <div className='total-payment'>
                    <div className='payment-detail'>
                        <p>Subtotal:</p>
                        <p>$40.00</p>
                    </div>
                    <div className='payment-detail'>
                        <p>Taxes:</p>
                        <p>$5.45</p>
                    </div>
                    <div className='payment-detail'>
                        <p>Discount:</p>
                        <p>-$5.45</p>
                    </div>
                    <div className='payment-detail'>
                        <p>Total Payment:</p>
                        <p>$40.00</p>
                    </div>
                </div>
                <div className='payment-finish'>
                    <div className='payment-detail'>
                        <p>Pay With:</p>
                        <p>Card</p>
                    </div>
                    <button>Confirm Payment</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Summary