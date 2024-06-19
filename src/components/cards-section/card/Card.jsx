import React from 'react'

const Card = ({ bg, title, desc }) => {
    return (
        <div className={`lg:w-[612px] lg:h-[749px] w-[550px] h-[650px] bg-no-repeat bg-cover flex flex-col justify-center pr-10  `} style={{
            backgroundImage: `url(${bg})`,
        }}>
            <div className='mycontainer content-wrapper flex flex-col text-right justify-center items-end text-white gap-10'>
                <h1 className='text-5xl leading-snug line-clamp-3'>
                    {title}
                </h1>
                <p className='text-[10px] md:text-sm font-alexandria font-light sm:w-[400px] w-[100%] '>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Card
