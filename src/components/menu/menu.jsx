import React from 'react';

const Menu = () => {
    return <div className="flex flex-col items-end md:flex md:flex-row  px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium ">
        <div className='flex flex-col-reverse items-end md:flex md:flex-row '>
            <a
                href="#"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white"
            >
                التواصل
            </a>

            <a
                href="#"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white"
            >
                من نحن
            </a>

            <a
                href="#"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white"
            >
                منتجاتنا
            </a>
            <a
                href="#"
                className="font-alexandria block md:inline-block px-3 py-2 rounded-md text-black font-light hover:bg-gray-700 hover:text-white  "
            >
                الرئيسية
            </a>
        </div>
        <div className='flex gap-2'>
            <a
                href="#"
                className="font-alexandria block md:inline-block px-5 py-2 rounded-md text-white bg-black relative  "
            >
                منتجاتك <span className='white text-2xl absolute right-0 top-0 px-4'>*</span>
            </a>
            <a
                href="#"
                className="font-alexandria block md:inline-block px-5 py-2 rounded-md text-white bg-black  "
            >
                تسجيل
            </a>
        </div>
    </div>
}

export default Menu;