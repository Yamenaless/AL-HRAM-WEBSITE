import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return <div className="flex flex-col items-end md:flex md:flex-row  px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium ">
        <div className='flex flex-col-reverse items-end md:flex md:flex-row '>
            <NavLink
                to="/contact-us"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white"
            >
                التواصل
            </NavLink>

            <NavLink
                to="/who-we-are"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white"
            >
                من نحن
            </NavLink>

            <NavLink
                to="/products"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white"
            >
                منتجاتنا
            </NavLink>
            <NavLink
                to="/"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white  "
            >
                الرئيسية
            </NavLink>
        </div>
        <div className='flex gap-2'>
            <NavLink
                to="#"
                className="font-alexandria block md:inline-block px-5 py-2 rounded-md text-white bg-black relative  "
            >
                منتجاتك <span className='white text-2xl absolute right-0 top-0 px-4'>*</span>
            </NavLink>
            <NavLink
                to="#"
                className="font-alexandria block md:inline-block px-5 py-2 rounded-md text-white bg-black  "
            >
                تسجيل
            </NavLink>
        </div>
    </div>
}

export default Menu;