'use client';

import type { ProductType } from '@/types/product-type';
import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Product from './Product';
import './Products.css';

const Products: React.FC = () => {
    const baseURL = 'https://fakestoreapi.com/products';

    const [products, setProducts] = useState<ProductType[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

    const searchProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;

        const filtered = products.filter((product) => {
            return product.title.toLowerCase().includes(value.toLowerCase());
        });

        setFilteredProducts(filtered);
    };

    const getProducts = async () => {
        const response = await fetch(baseURL);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    return (
        <div className="products">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search products"
                    className="search-input"
                    onChange={searchProduct}
                />
                <button type="button" className="search-button"><FaSearch /></button>
            </div>
            <h1 className="section-title">Our Products</h1>
            <div className="products-container">
                {products.length === 0 ? (
                    <p className="loading">Getting products...</p>
                ) : (
                    filteredProducts.map((product, idx) => {
                        return (
                            <Product key={idx} product={product} />
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default Products;