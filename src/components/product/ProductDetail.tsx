import React from 'react';

interface ProductDetailProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
  };
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product }) => {
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductDetail;

