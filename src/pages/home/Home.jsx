import React from 'react'
import "@fontsource/alexandria/400.css"; // Specify weight
import Navbar from '../../components/navigation/Navbar';
import Layout from '../../components/layout/Layout';

function Home() {
  return (
    <Layout>
      <div className="relative flex justify-center w-full max-w-[1254px] h-[654px] mx-auto bg-black rounded-b-[50px]">
        <img
          className="w-full h-full object-cover rounded-bl-[50px] rounded-br-[50px]"
          src="https://www.serdarelektronik.org/image/cache/catalog/journal3/slider/demo5/ales-nesetril-734016-unsplash-880x440w.jpg"
          alt="Placeholder"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white text-[100px] sm:text-[70px] md:text-[100px] font-medium leading-tight font-['Alexandria']">
            <p className='text-xs'> اشترى و بيع مع</p>
            الهرم
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default Home
