import React, { useState } from 'react'
import './SearchBar.css'
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({getSearchInput}) => {

    const [inputValue, setInputValue] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        getSearchInput(inputValue)
        setInputValue('')
    }


  return (
    <div className='search-bar-container'>
        <div className='search-bar'>
            <div className='categories'>
                <p>Random</p>
                <p>Beef</p>
                <p>Chicken</p>
                <p>Dessert</p>
                <p>Lamb</p>
                <p>Pasta</p>
                <p>Pork</p>
                <p>Seafood</p>
            </div>
            <div className='search-container'>
                <form onSubmit={handleSubmit} className='search'>
                    <RiSearch2Line size={19} />
                    <input type="text"
                            placeholder='Search food' 
                            className='search-input'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            />
                </form>
            </div>
        </div>
    </div>
  )
}

export default SearchBar