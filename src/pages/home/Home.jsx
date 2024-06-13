import React from 'react'
import "@fontsource/alexandria/400.css"; // Specify weight
import Navbar from '../../components/navigation/Navbar';

function Home() {
  return (
    <>

      <div className="relative flex justify-center w-full max-w-[1254px] h-[654px] mx-auto bg-black rounded-b-[50px]">
      <Navbar />
        {/* <img
        className="w-full h-full object-cover rounded-bl-[50px] rounded-br-[50px]"
        src="https://via.placeholder.com/1254x654"
        alt="Placeholder"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white text-[50px] sm:text-[70px] md:text-[100px] font-medium leading-tight font-['Alexandria']">
            منتجاتنا
          </div>
        </div>
      </div>
    </>

  )
}

export default Home
