import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ imageUrl, name, price, id }) => {
    return (
        <div className="bg-[#D9D9D9]  overflow-hidden">
            <img src={imageUrl.imageUrl} alt={name} className="w-full h-96 object-cover" />
            <div className="p-10 text-right">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700">${price}</p>
                <Link to={`/منتجاتنا/${name}`}>
                    <button className='mt-5 w-[200px] h-[40px] border border-black rounded-full px-5 text-sm font-alexandria hover:bg-black hover:text-white hover:border-white'>
                        اضف الى السلة
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Product
