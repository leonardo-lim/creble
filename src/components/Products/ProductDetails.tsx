'use client';

import type { ProductType } from '@/types/product-type';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaBoxes, FaDollarSign, FaStar } from 'react-icons/fa';
import './ProductDetails.css';

interface ProductDetailsProps {
    id: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ id }) => {
    const baseURL = 'https://fakestoreapi.com/products';

    const [product, setProduct] = useState<ProductType>();

    const getProduct = async () => {
        const response = await fetch(`${baseURL}/${id}`);
        const data = await response.json();
        setProduct(data);
    };

    useEffect(() => {
        getProduct();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        product && (
            <div className="product-details">
                {!product ? (
                    <p className="loading">Getting product...</p>
                ) : (
                    <>
                        <div className="poster">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <div className="info">
                            <h1 className="title">{product.title}</h1>
                            <p className="desc">{product.description}</p>
                            <hr />
                            <div className="attribute">
                                <div className="price-box">
                                    <div className="price">
                                        <i className="price-icon"><FaDollarSign /></i>
                                        <p>Price</p>
                                    </div>
                                    <span className="price-text">${product.price}</span>
                                </div>
                                <div className="rating-box">
                                    <div className="rating">
                                        <i className="rating-icon"><FaStar /></i>
                                        <p>Rating</p>
                                    </div>
                                    <span className="rating-text">{product.rating.rate} / 5.0</span>
                                </div>
                                <div className="stock-box">
                                    <div className="stock">
                                        <i className="stock-icon"><FaBoxes /></i>
                                        <p>Stock</p>
                                    </div>
                                    <span className="stock-text">{product.rating.count} pc(s)</span>
                                </div>
                            </div>
                            <div className="button-container">
                                <Link href="/products">
                                    <button type="button" className="back-button">Back</button>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        )
    );
};

export default ProductDetails;