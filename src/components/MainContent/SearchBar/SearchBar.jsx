import React from 'react'
import './SearchBar.css'
import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className='search-bar-container'>
        <div className='search-bar'>
            <div className='categories'>
                <p>All</p>
                <p>Beef</p>
                <p>Chicken</p>
                <p>Dessert</p>
                <p>Lamb</p>
                <p>Pasta</p>
                <p>Pork</p>
                <p>Seafood</p>
            </div>
            <div className='search-container'>
                <div className='search'>
                    <RiSearch2Line size={19} />
                    <input type="text" placeholder='Search food' className='search-input' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchBar