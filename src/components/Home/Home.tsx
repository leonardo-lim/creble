'use client';

import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="home">
            <div className="black-box"></div>
            <div className="first-col">
                <h1>No. 1</h1>
                <h3>dropshipping</h3>
                <h3>platform</h3>
            </div>
            <div className="second-col">
                <img src="/img/bag.png" alt="Bag" />
            </div>
            <div className="third-col">
                <h3>for</h3>
                <h1>best selling</h1>
                <h3>products</h3>
                <div className="button-container">
                    <Link href="/products">
                        <button type="button" className="explore-button">Explore</button>
                        <i className="explore-icon"><FaArrowRight /></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;