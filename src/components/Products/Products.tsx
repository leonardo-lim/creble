'use client';

import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Product from './Product';
import './Products.css';

const Products: React.FC = () => {
    const baseURL = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        const response = await fetch(baseURL);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className="products">
            <div className="search">
                <input type="text" placeholder="Search products" className="search-input" />
                <button type="button" className="search-button"><FaSearch /></button>
            </div>
            <h1 className="section-title">Our Products</h1>
            <div className="products-container">
                {products.map((product, idx) => {
                    return (
                        <Product key={idx} product={product} />
                    );
                })}
            </div>
        </div>
    );
};

export default Products;