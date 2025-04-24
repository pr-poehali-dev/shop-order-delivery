import { useState } from "react";
import Header from "@/components/Header";
import ProductCard, { Product } from "@/components/ProductCard";
import CategorySection from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  
  // Временные примеры данных
  const featuredProducts: Product[] = [
    { id: 1, name: "Смартфон XYZ Pro", price: 29990, image: "/placeholder.svg", category: "electronics" },
    { id: 2, name: "Наушники беспроводные XYZ", price: 4990, image: "/placeholder.svg", category: "electronics" },
    { id: 3, name: "Умные часы FitBit", price: 12990, image: "/placeholder.svg", category: "electronics" },
    { id: 4, name: "Портативная колонка Boom", price: 5990, image: "/placeholder.svg", category: "electronics" },
  ];
  
  const categories = [
    { id: 1, name: "Электроника", image: "/placeholder.svg", slug: "electronics" },
    { id: 2, name: "Одежда", image: "/placeholder.svg", slug: "clothing" },
    { id: 3, name: "Продукты", image: "/placeholder.svg", slug: "food" },
    { id: 4, name: "Дом и сад", image: "/placeholder.svg", slug: "home" },
  ];

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${product.price.toLocaleString()} ₽)`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent to-primary py-20">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Добро пожаловать в наш интернет-магазин
            </h1>
            <p className="text-lg text-white/90 mb-8">
              У нас вы найдете широкий ассортимент качественных товаров 
              с быстрой доставкой по всей России.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Каталог товаров
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Акции и скидки
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <CategorySection 
        title="Популярные категории"
        categories={categories}
      />
      
      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Популярные товары</h2>
            <Button variant="outline">Смотреть все</Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем заказы в кратчайшие сроки по всей России
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Выгодные цены</h3>
              <p className="text-gray-600">
                Постоянные акции и скидки для наших покупателей
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Качество товаров</h3>
              <p className="text-gray-600">
                Тщательно отбираем товары перед отправкой
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-auto">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ВашМагазин</h3>
              <p className="text-gray-400">
                Интернет-магазин с широким ассортиментом товаров и быстрой доставкой.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <address className="not-italic text-gray-400">
                <p>г. Москва, ул. Примерная, 123</p>
                <p className="mt-2">Тел: +7 (495) 123-45-67</p>
                <p className="mt-2">Email: info@yourshop.ru</p>
              </address>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white">Возврат и обмен</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 ВашМагазин. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
