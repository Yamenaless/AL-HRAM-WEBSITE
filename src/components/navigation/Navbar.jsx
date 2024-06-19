import React, { useState } from 'react';
import Menu from '../menu/menu';
import logo from '../../assets/image-4.png'
function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="bg-white z-10 w-full ">
      <div className="mycontainer mx-auto flex items-center justify-between h-16 px-4 ">
        <div className="flex-shrink-0 font-bold tracking-wider">
          <img src={logo} alt="logo" />
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <button
          type="button"
          className="md:hidden  inline-flex items-center justify-center p-2 rounded-md text-black transition duration-150 ease-in-out"
          onClick={() => setShowMobileMenu(!showMobileMenu)}>
          <svg
            className="h-6 w-6"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="md:hidden">
        {showMobileMenu && <Menu />}
      </div>
    </nav>
  );
}

export default App;