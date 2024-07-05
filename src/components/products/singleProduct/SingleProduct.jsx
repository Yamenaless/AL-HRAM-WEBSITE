import React from 'react'
import { useParams } from 'react-router-dom'
import productImage from '../../../assets/Rectangle 37.png'
import Layout from '../../layout/Layout'
const SingleProduct = () => {
    const { id } = useParams()
    return (
        <Layout>

            <div className='section'>
                <section className="container mx-auto p-8 flex flex-col justify-center lg:flex-row items-center rtl">
                    <div className="w-full lg:w-1/2 p-4">
                        <img src={productImage} alt="Product" className="w-full h-full object-cover rounded-lg shadow-lg" />
                    </div>
                    <div className="w-full lg:w-1/2 p-4">
                        <h2 className="text-5xl font-bold mb-20">{id}</h2>
                        <p className="text-gray-700 mb-4 text-right font-alexandria font-light">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية، مولد النص العربى مفيد لمصممي المواقع على وجه الخصوص، حيث يحتاج العميل فى كثير من الأحيان أن يطلع على صورة حقيقية لتصميم الموقع.
                        </p>
                        <p className="text-2xl font-bold mb-4">$199.99</p>
                        <button className='mt-5 w-[200px] h-[40px] border border-black rounded-full px-5 text-sm font-alexandria hover:bg-black hover:text-white hover:border-white'>
                            اشتري الان
                        </button>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default SingleProduct
