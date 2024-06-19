import React from 'react';
import Product from './Product/Product';
import data from '../../data';

const Products = () => {
  return (
    <div className='w-screen mb-20 mt-20'>
      <div className='container mx-auto pl-0 flex justify-center'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10'>
          {data?.map((item, i) => (
            <Product key={i} bg={item.bg} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
