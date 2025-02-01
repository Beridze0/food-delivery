import React from 'react'
import './Header.css'
import { IoPersonSharp } from "react-icons/io5";
import { FiCalendar } from "react-icons/fi";

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-user'>
                <IoPersonSharp />
                <p>Logged in as a guest</p>
            </div>
            
            <div className='header-profile'>
                <div className='header-date'>
                    <FiCalendar size={20} />
                    <p>2/1/2025  8:53PM</p>
                </div>
                <div className='header-user'>
                    <IoPersonSharp />
                    <p>Guest</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header