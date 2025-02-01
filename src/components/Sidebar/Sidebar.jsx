import React from 'react'
import './Sidebar.css'
import { IoRestaurantOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { BiFoodMenu } from "react-icons/bi";
import { IoFastFoodOutline } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className='sidebar'>
            <div className='sidebar-top'>
                <div className='logo'>
                    <IoRestaurantOutline size={35} />
                </div>

                <div className='sidebar-nav'>
                    <div className='sidebar-nav-item'>
                        <GoHome size={20} />
                        <p>Home</p>
                    </div>
                    <div className='sidebar-nav-item'>
                        <BiFoodMenu size={20} />
                        <p>Menu</p>
                    </div>
                    <div className='sidebar-nav-item'>
                        <IoFastFoodOutline size={20} />
                        <p>Favorites</p>
                    </div>
                    <div className='sidebar-nav-item'>
                        <RiShoppingCartLine size={20} />
                        <p>Cart</p>
                    </div>
                </div>
            </div>

            <div className='sidebar-nav'>
                <div className='sidebar-nav-item'>
                    <FiSettings size={20} />
                    <p>Settings</p>
                </div>
                <div className='sidebar-nav-item'>
                    <MdLogout size={20} />
                    <p>Logout</p>
                </div>
            </div>    
        </div>
    </div>
  )
}

export default Sidebar