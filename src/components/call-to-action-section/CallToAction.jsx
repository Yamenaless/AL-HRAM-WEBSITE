import React from "react";

const CallToAction = () => {
    return (
        <section className="w-full mt-[10rem] mb-[10rem]">
            <div className="mycontainer w-full   ">



                <div className=" w-full md:flex md:flex-row md:gap-10 flex flex-col ">


                    {/* image box */}
                    <div className="w-[100%] h-[612px] bg-cover bg-top " style={{
                        backgroundImage: `url(https://i.ibb.co/ncVdsgz/image-21.png)`,
                    }}></div>
                    {/* image box */}




                    {/* text box */}
                    <div className="content-wrapper w-[100%]  lg:py-20 lg:px-20 py-10  px-10 bg-[#E5E7EB] md:mt-0 mt-10 flex flex-col items-end gap-20 text-right">
                        <h1 className="text-2xl md:text-4xl text-black flex   text-right font-alexandria font-bold lg:leading-snug ">
                            اعمل معنا ودعنا ننتقل بأعمالك إلى المستوى التالي!
                        </h1>
                        <p className="font-alexandria font-light text-xs md:text-base ">
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
                            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى
                            إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص
                            هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                            حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                        </p>
                        <button className='w-[200px] h-[40px] border border-black rounded-full px-5 text-sm font-alexandria hover:bg-black hover:text-white hover:border-white'>
                            تواصل معنا الان
                        </button>
                    </div>
                    {/* text box */}




                </div>
            </div>
        </section>
    );
};

export default CallToAction; 
