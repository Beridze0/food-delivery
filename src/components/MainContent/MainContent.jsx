import React from 'react'
import './MainContent.css'
import FoodGallery from './FoodGallery/FoodGallery'
import SearchBar from './SearchBar/SearchBar'
import Summary from './Summary/Summary'
import Header from '../Header/Header'

const MainContent = () => {
  return (
    <div className='main-content-container'>
      <div>
              <Header/>
              <SearchBar />

      </div>
            <div className='menu-order'>
              <FoodGallery />
              <Summary />
            </div>
    </div>
  )
}

export default MainContent