import React from 'react';

const Footer = () => {
  return (
    <div className="w-full h-[550px] bg-white text-black py-8">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="text-[40px] md:text-[115px]  font-['Alexandria'] text-center mb-8  font-bold">
          الهرم
        </div>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center flex-row-reverse">
          <a href={'/'} className="text-[20px] md:text-[25px] font-medium font-['Alexandria']">
            الرئيسية
          </a>
          <a href={'/'} className="text-[20px] md:text-[25px] font-medium font-['Alexandria']">
            المنتجات
          </a>
          <a href={'/'} className="text-[20px] md:text-[25px] font-medium font-['Alexandria']">
            من نحن
          </a>
          <a href={'/'} className="text-[20px] md:text-[25px] font-medium font-['Alexandria']">
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
