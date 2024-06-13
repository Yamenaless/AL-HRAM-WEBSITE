import React from 'react'

const Navbar = () => {
    return (
        <div className="absolute mt-10 z-10 mx-auto w-full max-w-[999px] h-[58px] flex items-center justify-between px-10 py-9 bg-white rounded-[39px]">
            <div className="flex gap-5 items-center text-base whitespace-nowrap">
                <div className="px-5 py-3 text-black border border-black border-solid rounded-[29px]">
                    المنتجات*
                </div>
                <div className="px-8 py-3 text-white bg-black rounded-[29px]">
                    تسجيل
                </div>
            </div>
            <img
                loading="lazy"
                src="https://via.placeholder.com/68x44"
                className="w-[68px] h-auto"
                alt="Logo"
            />
            <div className="hidden  lg:flex gap-4 items-center text-sm text-black  ">
                <a href="#" className="hover:text-gray-700 font-alexandria font-normal">الرئيسية</a>
                <a href="#" className="hover:text-gray-700 font-alexandria font-normal">المنتجات</a>
                <a href="#" className="hover:text-gray-700 font-alexandria font-normal">من نحن</a>
                <a href="#" className="hover:text-gray-700 font-alexandria font-normal">تواصل معنا</a>
            </div>
            <did className="lg:hidden">
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
            </did>
        </div>



    )
}

export default Navbar
