import React from 'react';
import Product from './product/Product';
import imageUrl from '../../assets/Rectangle 37.png';

const products = [
    {
        id: 1,
        imageUrl: { imageUrl },
        name: 'ايفون 15 برو ماكس',
        price: 1150
    },
    {
        id: 2,
        imageUrl: { imageUrl },
        name: 'ايفون 15 برو',
        price: 1150
    },
    {
        id: 3,
        imageUrl: { imageUrl },
        name: 'ايفون 15 ',
        price: 1150
    },
    {
        id: 4,
        imageUrl: { imageUrl },
        name: 'ايفون 14 برو ماكس',
        price: 1150
    },
    {
        id: 5,
        imageUrl: { imageUrl },
        name: 'ايفون 14 برو',
        price: 1150
    },
    {
        id: 6,
        imageUrl: { imageUrl },
        name: 'ايفون 14 ',
        price: 1150
    },
    {
        id: 7,
        imageUrl: { imageUrl },
        name: 'ايفون 13 برو ماكس ',
        price: 1150
    },
    {
        id: 8,
        imageUrl: { imageUrl },
        name: 'ايفون 13 برو  ',
        price: 1150
    },
];

const Products = () => {
    return (
        <div className="section">
            <div className="mycontainer px-4 sm:px-6 lg:px-8 rtl">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map(product => (
                        <Product
                            key={product.id}
                            imageUrl={product.imageUrl}
                            name={product.name}
                            price={product.price}
                            id={product.id}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Products;
