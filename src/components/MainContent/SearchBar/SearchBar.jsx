import React, { useState } from 'react'
import './SearchBar.css'
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = ({getSearchAndCategory}) => {

    const [inputValue, setInputValue] = useState('')
    const [category, setCategory] = useState("")
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        getSearchAndCategory(inputValue)
        setInputValue('')
    }

    const handleCategory = (categoryValue) =>{
        getSearchAndCategory(categoryValue)
    }



  return (
    <div className='search-bar-container'>
        <div className='search-bar'>
            <div className='categories'>
                <button 
                    onClick={() => {
                        setCategory("random")
                        handleCategory("")
                    }}
                    className={category === "" ? 'category-active' : ''}>
                    Random
                </button>
                <button 
                    onClick={() => {
                        setCategory("beef")
                        handleCategory("beef")
                    }}
                    className={category === "beef" ? 'category-active' : ''}>
                    Beef
                </button>
                <button 
                    onClick={() => {
                        setCategory("chicken")
                        handleCategory("chicken")
                    }}
                    className={category === "chicken" ? 'category-active' : ''}>
                    Chicken
                </button>
                <button 
                    onClick={() => {
                        setCategory("vegetarian")
                        handleCategory("vegetarian")
                    }}
                    className={category === "vegetarian" ? 'category-active' : ''}>
                    Vegetarian
                </button>
                <button 
                    onClick={() => {
                        setCategory("lamb")
                        handleCategory("lamb")
                    }}
                    className={category === "lamb" ? 'category-active' : ''}>
                    Lamb
                </button>
                <button 
                    onClick={() => {
                        setCategory("pasta")
                        handleCategory("pasta")
                    }}
                    className={category === "pasta" ? 'category-active' : ''}>
                    Pasta
                </button>
                <button 
                    onClick={() => {
                        setCategory("pork")
                        handleCategory("pork")
                    }}
                    className={category === "pork" ? 'category-active' : ''}>
                    Pork
                </button>
                <button 
                    onClick={() => {
                        setCategory("seafood")
                        handleCategory("seafood")
                    }}
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