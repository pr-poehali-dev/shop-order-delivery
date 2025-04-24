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
  
  // Примеры данных для гастронома
  const featuredProducts: Product[] = [
    { id: 1, name: "Чайный набор 'Прованс'", price: 1590, image: "/placeholder.svg", category: "tableware", unit: "шт", weight: "3 предмета" },
    { id: 2, name: "Сок свежевыжатый апельсиновый", price: 290, image: "/placeholder.svg", category: "drinks", unit: "л", weight: "1 л", discount: 15 },
    { id: 3, name: "Пельмени домашние 'Бабушкины'", price: 450, image: "/placeholder.svg", category: "food", unit: "кг", weight: "500 г" },
    { id: 4, name: "Кастрюля 'Шеф' с антипригарным покрытием", price: 2950, image: "/placeholder.svg", category: "home", unit: "шт", weight: "2,5 л" },
  ];
  
  const categories = [
    { id: 1, name: "Еда и продукты", image: "/placeholder.svg", slug: "food" },
    { id: 2, name: "Напитки и соки", image: "/placeholder.svg", slug: "drinks" },
    { id: 3, name: "Посуда и кухня", image: "/placeholder.svg", slug: "tableware" },
    { id: 4, name: "Товары для дома", image: "/placeholder.svg", slug: "home" },
  ];

  const handleAddToCart = (product: Product) => {
    toast({
      title: "Товар добавлен в корзину",
      description: `${product.name} (${product.price.toLocaleString()} ₽)`,
    });
  };

  const discountedProducts: Product[] = [
    { id: 5, name: "Набор бокалов 'Кристалл'", price: 1490, image: "/placeholder.svg", category: "tableware", unit: "шт", weight: "6 шт", discount: 20 },
    { id: 6, name: "Кофе зерновой 'Эфиопия'", price: 890, image: "/placeholder.svg", category: "drinks", unit: "шт", weight: "250 г", discount: 15 },
    { id: 7, name: "Сковорода чугунная классическая", price: 2590, image: "/placeholder.svg", category: "home", unit: "шт", weight: "24 см", discount: 25 },
    { id: 8, name: "Шоколад горький 'Бельгийский'", price: 390, image: "/placeholder.svg", category: "food", unit: "шт", weight: "100 г", discount: 10 },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent to-primary py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Ваш любимый гастроном с доставкой
            </h1>
            <p className="text-lg text-white/90 mb-8">
              Продукты, напитки, посуда и товары для дома — всё необходимое для комфортной жизни с доставкой в день заказа.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Каталог товаров
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
                <p className="font-medium">Доставка за 90 минут</p>
                <p className="text-sm text-gray-600">Или в удобное время</p>
              </div>
            </div>
            <div className="flex items-center">
              <Truck className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="font-medium">Бесплатная доставка</p>
                <p className="text-sm text-gray-600">При заказе от 2000 ₽</p>
              </div>
            </div>
            <div className="flex items-center">
              <BadgePercent className="h-8 w-8 text-primary mr-3" />
              <div>
                <p className="font-medium">Программа лояльности</p>
                <p className="text-sm text-gray-600">Скидки до 15% постоянным клиентам</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Section */}
      <CategorySection 
        title="Категории товаров"
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
            <h2 className="text-3xl font-bold mb-3">Скидка 15% на первый заказ</h2>
            <p className="mb-6 text-white/90">Используйте промокод ГАСТРОНОМ при оформлении</p>
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
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Широкий ассортимент</h3>
              <p className="text-gray-600">
                Более 5000 товаров для дома, кухни и повседневной жизни
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-lg font-medium mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставляем в день заказа или в удобное для вас время
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
              <h3 className="text-xl font-bold mb-4">Гастроном</h3>
              <p className="text-gray-400">
                Всё необходимое для кухни, стола и дома с доставкой в вашем городе.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <address className="not-italic text-gray-400">
                <p>г. Москва, ул. Примерная, 123</p>
                <p className="mt-2">Тел: +7 (495) 123-45-67</p>
                <p className="mt-2">Email: zakaz@gastronom.ru</p>
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
            <p>© 2023 Гастроном. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
