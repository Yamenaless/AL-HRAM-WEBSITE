import React from 'react'

const Product = ({ bg }) => {
    return (
        <div className={`lg:w-[612px] lg:h-[749px] w-[550px] h-[650px] bg-no-repeat bg-cover flex flex-col justify-center pr-10  `} style={{
            backgroundImage: `url(${bg})`,
        }}>
            <div className='mycontainer content-wrapper flex flex-col text-right justify-center items-end text-white gap-10'>
                <h1 className='text-5xl leading-snug'>الهرم قسم <br/> 
                    الحولات
                </h1>
                <p className='text-[10px] md:text-sm font-alexandria font-light sm:w-[400px] w-[100%] '>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق</p>
            </div>
        </div>
    )
}

export default Product
