import React from "react";

const CallToAction = () => {
    return (
        <section className="section w-screen h-screen flex items-center">
            <div className="mycontainer lg:flex lg:justify-between lg:gap-12">
                <div
                    className="image-wrapper w-full lg:w-[612px] h-[300px] lg:h-[528px] bg-cover bg-center"
                    style={{
                        backgroundImage: `url(https://i.ibb.co/ncVdsgz/image-21.png)`,
                    }}
                ></div>
                <div className="content-wrapper text-black  lg:w-[612px] lg:h-[528px] flex flex-col items-end text-right pt-10 gap-6 lg:gap-10 ">
                    <h1 className="font-alexandria font-bold text-xl lg:text-3xl">
                        ! اعمل معنا ودعنا ننتقل بأعمالك إلى المستوى التالي
                    </h1>
                    <p className="font-alexandria font-light text-sm lg:text-base">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;
