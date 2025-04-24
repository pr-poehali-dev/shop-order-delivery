import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const { name, price, image } = product;
  
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-card bg-white rounded-lg overflow-hidden border">
      <div className="overflow-hidden">
        <img 
          src={image || "/placeholder.svg"} 
          alt={name} 
          className="product-image w-full h-48"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-lg truncate">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-bold text-lg">{price.toLocaleString()} ₽</p>
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
