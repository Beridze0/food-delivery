import React, { useState } from 'react'
import './SearchBar.css'
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({getSearchInput}) => {

    const [inputValue, setInputValue] = useState('')
    const [category, setCategory] = useState("random")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        getSearchInput(inputValue)
        setInputValue('')
    }

console.log(category);


  return (
    <div className='search-bar-container'>
        <div className='search-bar'>
            <div className='categories'>
                <button 
                    onClick={() => setCategory("random")}
                    className={category === "random" ? 'category-active' : ''}>
                    Random
                </button>
                <button 
                    onClick={() => setCategory("beef")}
                    className={category === "beef" ? 'category-active' : ''}>
                    Beef
                </button>
                <button 
                    onClick={() => setCategory("chicken")}
                    className={category === "chicken" ? 'category-active' : ''}>
                    Chicken
                </button>
                <button 
                    onClick={() => setCategory("dessert")}
                    className={category === "dessert" ? 'category-active' : ''}>
                    Dessert
                </button>
                <button 
                    onClick={() => setCategory("lamb")}
                    className={category === "lamb" ? 'category-active' : ''}>
                    Lamb
                </button>
                <button 
                    onClick={() => setCategory("pasta")}
                    className={category === "pasta" ? 'category-active' : ''}>
                    Pasta
                </button>
                <button 
                    onClick={() => setCategory("pork")}
                    className={category === "pork" ? 'category-active' : ''}>
                    Pork
                </button>
                <button 
                    onClick={() => setCategory("seafood")}
                    className={category === "seafood" ? 'category-active' : ''}>
                    Seafood
                </button>
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