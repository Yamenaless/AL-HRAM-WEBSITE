import React from 'react';
import Card from './card/Card';
import data from '../../data';

const Cards = () => {
  return (
    <section className='section'>

      <div className='w-screen mb-20 mt-20'>
        <div className='container mx-auto pl-0 flex justify-center'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10'>
            {data?.map((item, i) => (
              <Card key={i} bg={item.bg} title={item.title} desc={item.disc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
