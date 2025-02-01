import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { IoRestaurantOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')) || false)

    const handleChangeTheme = () =>{
        setDarkMode(prev => {
            const newTheme = !prev
            document.querySelector('body').setAttribute('data-theme', newTheme? "dark" : "light")
            localStorage.setItem('dark-mode', JSON.stringify(newTheme))
            return newTheme
        })
    }

    useEffect(()=>{
        const currentTheme = JSON.parse(localStorage.getItem('dark-mode'))
        document.querySelector('body').setAttribute('data-theme', currentTheme? "dark" : "light")
        setDarkMode(currentTheme)
    },[])

  return (
    <div className='sidebar-container'>
        <div className='sidebar'>
            <div className='sidebar-top'>
                <div className='logo'>
                    <IoRestaurantOutline size={35} />
                    <h1>Food Delivery</h1>
                </div>

                <div className='sidebar-nav'>
                    <NavLink to={'/'} className={({isActive}) => isActive? "sidebar-nav-item active" 
                    :
                     "sidebar-nav-item"}>
                        <GoHome size={20} />
                        <p>Home</p>
                    </NavLink>
                    <NavLink to={'/menu'} className={({isActive}) => isActive? "sidebar-nav-item active" 
                    :
                     "sidebar-nav-item"}>
                        <BiFoodMenu size={20} />
                        <p>Menu</p>
                    </NavLink>
                    <NavLink to={'/favorites'} className={({isActive}) => isActive? "sidebar-nav-item active" 
                    :
                     "sidebar-nav-item"}>
                        <IoFastFoodOutline size={20} />
                        <p>Favorites</p>
                    </NavLink>
                    <NavLink to={'/cart'} className={({isActive}) => isActive? "sidebar-nav-item active" 
                    :
                     "sidebar-nav-item"}>
                        <RiShoppingCartLine size={20} />
                        <p>Cart</p>
                    </NavLink>
                </div>
            </div>

            <div className='sidebar-nav'>
                <button className='sidebar-settings' onClick={handleChangeTheme}>
                    <MdOutlinePowerSettingsNew size={20} />
                    <p>Appearance: {darkMode? "Dark" : "Light"}</p>
                </button>
                <NavLink to={'/settings'} className={({isActive}) => isActive? "sidebar-settings active" 
                :
                 "sidebar-settings"}>
                    <FiSettings size={20} />
                    <p>Settings</p>
                </NavLink>
                <NavLink to={'/logout'} className='sidebar-settings last'>
                    <MdLogout size={20} />
                    <p>Logout</p>
                </NavLink>
            </div>    
        </div>
    </div>
  )
}

export default Sidebar