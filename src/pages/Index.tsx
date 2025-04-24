import { useState } from "react";
import Header from "@/components/Header";
import ProductCard, { Product } from "@/components/ProductCard";
import CategorySection from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";
import { Clock, Truck, BadgePercent } from "lucide-react";

const Index = () => {
  const { toast } = useToast();
  
  // Примеры данных для продуктового магазина
  const featuredProducts: Product[] = [
    { id: 1, name: "Яблоки Голден", price: 159, image: "/placeholder.svg", category: "fruits", unit: "кг", weight: "Россия" },
    { id: 2, name: "Молоко Домик в деревне 3.2%", price: 109, image: "/placeholder.svg", category: "dairy", unit: "л", weight: "1 л", discount: 15 },
    { id: 3, name: "Хлеб Бородинский", price: 59, image: "/placeholder.svg", category: "bakery", unit: "шт", weight: "300 г" },
    { id: 4, name: "Куриное филе охлажденное", price: 329, image: "/placeholder.svg", category: "meat", unit: "кг", weight: "Фермерское" },
  ];
  
  const categories = [
    { id: 1, name: "Фрукты и овощи", image: "/placeholder.svg", slug: "fruits" },
    { id: 2, name: "Молочные продукты", image: "/placeholder.svg", slug: "dairy" },
    { id: 3, name: "Мясо и птица", image: "/placeholder.svg", slug: "meat" },
    { id: 4, name: "Хлеб и выпечка", image: "/placeholder.svg", slug: "bakery" },
  ];

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${product.price.toLocaleString()} ₽)`,
    });
  };

  const discountedProducts: Product[] = [
    { id: 5, name: "Бананы", price: 119, image: "/placeholder.svg", category: "fruits", unit: "кг", weight: "Эквадор", discount: 20 },
    { id: 6, name: "Сыр Российский", price: 599, image: "/placeholder.svg", category: "dairy", unit: "кг", weight: "300 г", discount: 15 },
    { id: 7, name: "Макароны Barilla", price: 159, image: "/placeholder.svg", category: "grocery", unit: "шт", weight: "450 г", discount: 25 },
    { id: 8, name: "Шоколад Алёнка", price: 99, image: "/placeholder.svg", category: "sweets", unit: "шт", weight: "90 г", discount: 10 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent to-primary py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Свежие продукты с доставкой на дом
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Экономьте время на походах в магазин — выбирайте качественные продукты 
              с быстрой доставкой в день заказа.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Каталог продуктов
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
                Акции недели
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Delivery Promo */}
      <section className="bg-accent py-8">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center">
              <Clock className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="font-medium">Доставка за 60 минут</p>
                <p className="text-sm text-gray-600">Или ближайшее время</p>
              </div>
            </div>
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="font-medium">Бесплатная доставка</p>
                <p className="text-sm text-gray-600">При заказе от 1500 ₽</p>
              </div>
            </div>
            <div className="flex items-center">
              <BadgePercent className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="font-medium">Скидки постоянным клиентам</p>
                <p className="text-sm text-gray-600">До 10% на все товары</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <CategorySection 
        title="Категории продуктов"
        categories={categories}
      />
      
      {/* Featured Products */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Популярные товары</h2>
            <Button variant="outline" asChild>
              <Link to="/catalog">Смотреть все</Link>
            </Button>
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
      
      {/* Discount Banner */}
      <section className="py-10 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center text-white">
            <h2 className="text-3xl font-bold mb-3">Скидка 10% на первый заказ</h2>
            <p className="mb-6 text-white/90">Используйте промокод ПЕРВЫЙЗАКАЗ при оформлении</p>
            <Button size="lg" className="bg-white text-secondary hover:bg-white/90">Сделать заказ</Button>
          </div>
        </div>
      </section>
      
      {/* Discounted Products */}
      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Акции и скидки</h2>
            <Button variant="outline" asChild>
              <Link to="/sales">Все акции</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {discountedProducts.map((product) => (
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
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🥦</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Свежие продукты</h3>
              <p className="text-gray-600">
                Ежедневные поставки от фермеров и проверенных поставщиков
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем в день заказа в удобное для вас время
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Удобная оплата</h3>
              <p className="text-gray-600">
                Оплата при получении картой или наличными
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
              <h3 className="text-xl font-bold mb-4">ПродуктыДома</h3>
              <p className="text-gray-400">
                Доставка свежих продуктов на дом в вашем городе. Экономьте время на покупках!
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <address className="not-italic text-gray-400">
                <p>г. Москва, ул. Примерная, 123</p>
                <p className="mt-2">Тел: +7 (495) 123-45-67</p>
                <p className="mt-2">Email: zakaz@produktydoma.ru</p>
              </address>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">О компании</a></li>
                <li><a href="#" className="hover:text-white">Доставка и оплата</a></li>
                <li><a href="#" className="hover:text-white">Зоны доставки</a></li>
                <li><a href="#" className="hover:text-white">Политика конфиденциальности</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© 2023 ПродуктыДома. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
