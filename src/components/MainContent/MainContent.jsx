import React from 'react'
import './MainContent.css'
import FoodGallery from './FoodGallery/FoodGallery'
import Summary from './Summary/Summary'

const MainContent = () => {
  return (
    <div className='main-content-container'>
            <div className='menu-order'>
              <FoodGallery />
              <Summary />
            </div>
    </div>
  )
}

export default MainContent