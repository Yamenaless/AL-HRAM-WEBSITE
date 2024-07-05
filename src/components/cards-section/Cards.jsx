import React from 'react';
import Card from './card/Card';
import data from '../../data';

const Cards = () => {
  return (
    <section className="section py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap  justify-center gap-10">
          {data?.map((item, i) => (
            <div key={i} className="w-full max-w-xs sm:max-w-none sm:w-[612px]">
              <Card bg={item.bg} title={item.title} desc={item.disc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
