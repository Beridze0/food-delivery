import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import MainContent from './components/MainContent/MainContent'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import SearchBar from './components/MainContent/SearchBar/SearchBar'

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='app-main-content'>
        
          <Header />
          <SearchBar />
        <Routes>
          <Route path="/" element={<MainContent />} />
        </Routes>
      </div>
    </div>
  )
}

export default App