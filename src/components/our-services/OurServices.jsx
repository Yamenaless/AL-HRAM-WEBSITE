import React from 'react';

const OurServices = () => {
    return (
        <section className=''> 
            <div className=' w-full h-auto min-h-[350px] sm:p-20 p-5'>
                <div className='mycontainer h-full flex flex-col-reverse gap-10 md:flex-row items-start text-black  '>
                    <div className='md:w-1/2 w-full flex flex-col items-end gap-5'>
                        <p className='font-alexandria font-light text-right'>
                            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى،
                            حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى
                            يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات
                            كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه
                            الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                        </p>
                    </div>
                    <div className='md:w-1/2 w-full text-right mt-5 md:mt-0'>
                        <h1 className='font-alexandria font-bold text-4xl md:text-5xl '>خدماتنا</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default OurServices;
