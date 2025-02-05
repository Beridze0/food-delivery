import React, { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchBar from './components/MainContent/SearchBar/SearchBar'
import generateRandomLetter from './utils/letters'
import useMealsFetch from './hooks/useMealsFetch'

const App = () => {

  const [searchInput, setSearchInput] = useState('')
  const [categoryValue, setCategoryValue] = useState()
  const [mealDetails, setMealDetails] = useState([])

  const mealsData = useMealsFetch(searchInput, categoryValue, generateRandomLetter)

  const getSearchAndCategory = (value) =>{
    setSearchInput(value)
    setCategoryValue(value)
  }


  const getMealsDetails = (meal) =>{
      setMealDetails(prev => {
        localStorage.setItem('ordered-meal', JSON.stringify([...prev, meal]))
        return [...prev, meal]
      })

  }
  
  

  
  return (
    <div className='app'>
      <Sidebar />
      <div className='app-main-content'>
        
          <Header />
          <SearchBar getSearchAndCategory={getSearchAndCategory} />
        <Routes>
          <Route
            path="/"
            element={<MainContent
                      mealsData={mealsData}
                      getMealsDetails={getMealsDetails} 
                      mealDetails={mealDetails}
                      />} 
          />
        </Routes>
      </div>
    </div>
  )
}

export default App