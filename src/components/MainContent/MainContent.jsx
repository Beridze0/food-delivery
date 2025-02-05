import React, { useEffect, useState } from 'react'
import './MainContent.css'
import FoodGallery from './FoodGallery/FoodGallery'
import Summary from './Summary/Summary'


const MainContent = ({mealsData, getMealsDetails, mealDetails}) => {


  return (
    <div className='main-content-container'>
            <div className='menu-order'>
              <FoodGallery mealsData={mealsData} getMealsDetails={getMealsDetails} />
              <Summary mealDetails={mealDetails} />
            </div>
    </div>
  )
}

export default MainContent