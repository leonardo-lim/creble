'use client';

import type { NextPage } from 'next';
import ProductDetails from '@/components/Products/ProductDetails';

interface ProductDetailsPageProps {
    params: {
        id: string;
    };
}

const ProductDetailsPage: NextPage<ProductDetailsPageProps> = ({ params }) => {
    return <ProductDetails id={params.id} />;
};

export default ProductDetailsPage;