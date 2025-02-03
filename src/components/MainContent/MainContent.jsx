import React, { useEffect, useState } from 'react'
import './MainContent.css'
import FoodGallery from './FoodGallery/FoodGallery'
import Summary from './Summary/Summary'


const MainContent = ({mealsData}) => {


  return (
    <div className='main-content-container'>
            <div className='menu-order'>
              <FoodGallery mealsData={mealsData} />
              <Summary />
            </div>
    </div>
  )
}

export default MainContent