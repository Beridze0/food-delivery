import React from 'react'
import './MainContent.css'
import FoodGallery from './FoodGallery/FoodGallery'
import SearchBar from './SearchBar/SearchBar'

const MainContent = () => {
  return (
    <div className='main-content-container'>
        <div className='main-content'>
            <SearchBar />
            <FoodGallery />
        </div>
    </div>
  )
}

export default MainContent