'use client';

import Link from 'next/link';
import { FaDollarSign, FaStar } from 'react-icons/fa';
import './Product.css';

interface ProductProps {
    product: {
        id: string;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
        rating: {
            rate: number;
            count: number;
        };
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const getTitle = () => {
        const { title } = product;

        if (title.length > 30) {
            return `${title.substring(0, 27)}...`;
        } else {
            return title;
        }
    };

    return (
        <div key={product.id} className="card">
            <div className="card-body">
                <div className="poster">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="title-box">
                    <p className="title">{getTitle()}</p>
                </div>
                <hr />
                <div className="info">
                    <div className="price">
                        <i className="price-icon"><FaDollarSign /></i>
                        <span className="price-text">{product.price}</span>
                    </div>
                    <div className="rating">
                        <i className="rating-icon"><FaStar /></i>
                        <span className="rating-text">{product.rating.rate}</span>
                    </div>
                </div>
                <div className="button-container">
                    <Link href={`products/${product.id}`}>
                        <button type="button" className="detail-button">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Product;