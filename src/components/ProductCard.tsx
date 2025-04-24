import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  weight?: string;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { name, price, image, unit, weight, discount } = product;
  
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  const finalPrice = discount 
    ? price - (price * discount / 100) 
    : price;

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden border hover-scale transition-all">
      <div className="relative overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="product-image w-full h-48 object-cover"
        />
        {discount && (
          <div className="absolute top-2 right-2 bg-secondary text-white text-sm font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg truncate">{name}</h3>
        {weight && (
          <p className="text-sm text-gray-500 mt-1">{weight}</p>
        )}
        <div className="mt-2 flex items-center justify-between">
          <div>
            {discount ? (
              <div className="flex flex-col">
                <p className="font-bold text-lg">{finalPrice.toLocaleString()} ₽/{unit}</p>
                <p className="text-sm text-gray-500 line-through">{price.toLocaleString()} ₽</p>
              </div>
            ) : (
              <p className="font-bold text-lg">{price.toLocaleString()} ₽/{unit}</p>
            )}
          </div>
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            className="rounded-full"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            В корзину
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
