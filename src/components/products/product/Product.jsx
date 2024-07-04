import React from 'react'

const Product = ({ imageUrl, name, price }) => {
    console.log(imageUrl)
    return (
        // <div className="w-[398px] h-[469px] relative">
        //     <div className="w-[398px] h-[469px] left-0 top-0 absolute bg-zinc-300" />
        //     <img className="w-[398px] h-[273px] left-0 top-0 absolute" src="https://via.placeholder.com/398x273" />
        //     <div className="w-[339px] h-[152px] left-[35px] top-[300px] absolute">
        //         <div className="w-[267px] h-7 left-[72px] top-0 absolute text-center text-black text-3xl font-medium font-['Alexandria']">ايفون 15 برو ماكس</div>
        //         <div className="left-[291px] top-[49px] absolute text-center text-black text-[15px] font-medium font-['Alexandria']">السعر :</div>
        //         <div className="w-[49px] h-[16.51px] left-[237px] top-[50px] absolute text-center text-black text-lg font-medium font-['Alexandria']">1150$</div>
        //         <div className="w-[339px] h-[69px] left-0 top-[83px] absolute text-right text-black text-xs font-medium font-['Alexandria']">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثا</div>
        //     </div>
        // </div>
        <div className="bg-[#D9D9D9]  overflow-hidden">
            <img src={imageUrl.imageUrl} alt={name} className="w-full h-96 object-cover" />
            <div className="p-10 text-right">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-gray-700">${price}</p>
                <button className='mt-5 w-[200px] h-[40px] border border-black rounded-full px-5 text-sm font-alexandria hover:bg-black hover:text-white hover:border-white'>
                    اضف الى السلة
                </button>
            </div>
        </div>
    )
}

export default Product
