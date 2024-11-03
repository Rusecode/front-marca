import React from 'react';

interface ProductCardProps {
  product: { id: number; name: string; description: string; price: number; imageUrl?: string };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div>
      {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: '150px' }} />} {/* Exibe a imagem */}
      <h3>{product.name}</h3>
      <p>{product.description}</p> {/* Exibe a descrição */}
      <p>${product.price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
