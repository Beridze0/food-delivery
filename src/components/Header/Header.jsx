import React from 'react'
import './Header.css'
import { IoPersonSharp } from "react-icons/io5";
import HeaderDate from './HeaderDate/HeaderDate';

const Header = () => {
  return (
    <div className='header-container'>
        <div className='header'>
            <div className='header-user'>
                <IoPersonSharp />
                <p>Logged in as a guest</p>
            </div>
            
            <div className='header-profile'>
                <HeaderDate />
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