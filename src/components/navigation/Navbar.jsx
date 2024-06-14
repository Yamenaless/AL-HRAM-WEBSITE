import React from 'react';
import logo from "../../assets/image_4.png";

const Navbar = () => {
  return (
    <div className='flex justify-center'>
      <div className="relative mt-10 z-10 w-full max-w-[999px] lg:max-w-[666px] h-[58px] flex items-center justify-between px-5 lg:px-10 py-4 bg-white rounded-[39px]">
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
          src={logo}
          className="w-[68px] h-auto"
          alt="Logo"
        />
        <div className="hidden lg:flex gap-4 items-center text-sm text-black">
          <a href="#" className="hover:text-gray-700 font-alexandria font-normal">تواصل معنا</a>
          <a href="#" className="hover:text-gray-700 font-alexandria font-normal">من نحن</a>
          <a href="#" className="hover:text-gray-700 font-alexandria font-normal">المنتجات</a>
          <a href="#" className="hover:text-gray-700 font-alexandria font-normal">الرئيسية</a>
        </div>
        <div className="lg:hidden">
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
