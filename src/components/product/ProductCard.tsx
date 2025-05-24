import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';
import { Product } from '../../types';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <Card className="h-full" hoverable>
      <Link to={`/product/${product.id}`}>
        <div className="relative">
          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
            <img
              src={product.images[0]}
              alt={product.title}
              className="h-60 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <button
            className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 hover:bg-white text-gray-700 hover:text-primary-500 transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={20} />
          </button>
          {!product.inStock && (
            <div className="absolute top-2 left-2">
              <Badge variant="error">Sold Out</Badge>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-medium text-gray-900 line-clamp-1">{product.title}</h3>
            <Badge variant="secondary" className="ml-2">
              {product.category}
            </Badge>
          </div>
          <p className="mt-1 text-lg font-semibold text-primary-600">{formatPrice(product.price)}</p>
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{product.description}</p>
          <div className="mt-2 flex items-center">
            <div className="flex items-center">
              <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
              <span className="ml-1 text-sm text-gray-700">{product.rating}</span>
            </div>
            <span className="mx-2 text-gray-400">•</span>
            <span className="text-sm text-gray-500">{product.reviewCount} reviews</span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;