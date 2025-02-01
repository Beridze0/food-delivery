import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'

const App = () => {
  return (
    <div className='app'>
      <Sidebar />
      <div className='main-content'>
        <Header />
        <MainContent />
      </div>
    </div>
  )
}

export default App