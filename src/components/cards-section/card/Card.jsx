import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ bg, title, desc }) => {
    return (
        <div
            className="w-full max-w-xs sm:max-w-none sm:w-[612px] h-[749px] shadow-lg bg-cover relative group  "
            style={{
                backgroundImage: `url("${bg}")`
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-20">
                <div className=" text-white p-4 text-right">
                    <h2 className="text-5xl leading-snug font-bold mb-10">{title}</h2>
                    <p className="mb-7 mt-7 font-alexandria font-light ">{desc}</p>
                    <Link to={`/الهرم/${title}`}>
                        <button className='w-[200px] h-[40px] border border-white rounded-full px-5 text-sm font-alexandria hover:bg-white hover:text-black hover:border-white'>
                            إقرأ المزيد
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;
