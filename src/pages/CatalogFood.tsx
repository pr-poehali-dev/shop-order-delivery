
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CatalogFood = () => {
  const foodProducts = [
    {
      id: 1,
      name: "Свежие овощи",
      price: 149,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Молоко (1л)",
      price: 89,
      image: "/placeholder.svg",
      discount: 10,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Хлеб бородинский",
      price: 59,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Сыр Российский",
      price: 299,
      image: "/placeholder.svg",
      discount: 15,
      rating: 4.6,
    },
    {
      id: 5,
      name: "Колбаса вареная",
      price: 349,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.5,
    },
    {
      id: 6,
      name: "Яйца (10 шт)",
      price: 109,
      image: "/placeholder.svg",
      discount: 0,
      rating: 4.8,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6 flex items-center">
          <Link to="/">
            <Button variant="ghost" className="p-0 mr-2">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Назад
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Продукты питания</h1>
        </div>
        
        <Card className="p-4 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Фильтры</h2>
            <Button variant="outline" size="sm">Сбросить</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium">Цена</label>
              <div className="flex items-center mt-2">
                <input type="number" placeholder="От" className="w-full border rounded px-2 py-1" />
                <span className="mx-2">—</span>
                <input type="number" placeholder="До" className="w-full border rounded px-2 py-1" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Скидка</label>
              <select className="w-full mt-2 border rounded px-2 py-1">
                <option>Любая</option>
                <option>Со скидкой</option>
                <option>Без скидки</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Сортировка</label>
              <select className="w-full mt-2 border rounded px-2 py-1">
                <option>По популярности</option>
                <option>По цене (низкая-высокая)</option>
                <option>По цене (высокая-низкая)</option>
                <option>По рейтингу</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Применить</Button>
            </div>
          </div>
        </Card>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {foodProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Button variant="outline" className="mr-2">1</Button>
          <Button variant="outline" className="mr-2">2</Button>
          <Button variant="outline">3</Button>
        </div>
        
        <Separator className="my-8" />
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-4">О разделе "Продукты питания"</h2>
          <p className="text-gray-700 mb-4">
            В нашем гастрономе представлен широкий ассортимент свежих продуктов питания. Мы сотрудничаем только с проверенными поставщиками, чтобы гарантировать качество и свежесть всех продуктов.
          </p>
          <p className="text-gray-700">
            Осуществляем доставку в день заказа по всему городу. При заказе от 1500 рублей доставка бесплатная!
          </p>
        </div>
      </main>
    </div>
  );
};

export default CatalogFood;
