import React from 'react'
import './MainContent.css'
import FoodGallery from './FoodGallery/FoodGallery'
import SearchBar from './SearchBar/SearchBar'
import Summary from './Summary/Summary'

const MainContent = () => {
  return (
    <div className='main-content-container'>
        <div className='main-content'>
            <SearchBar />
            <div className='menu-order'>
              <FoodGallery />
              <Summary />
            </div>
        </div>
    </div>
  )
}

export default MainContent