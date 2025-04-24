
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, Save, Plus, Trash2, Eye, Edit, Package, Tag, Users, ShoppingBag, Settings } from "lucide-react";

// Типы для работы с товарами
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
  discount?: number;
  unit?: string;
  weight?: string;
}

const AdminPanel = () => {
  // Демо-данные для админки
  const [products, setProducts] = useState<Product[]>([
    { 
      id: 1, 
      name: "Чайный набор 'Прованс'", 
      price: 1590, 
      image: "/placeholder.svg", 
      category: "tableware", 
      description: "Набор из 3 предметов: чайник, сахарница и молочник в стиле Прованс.",
      stock: 15
    },
    { 
      id: 2, 
      name: "Сок свежевыжатый апельсиновый", 
      price: 290, 
      image: "/placeholder.svg", 
      category: "drinks", 
      description: "Натуральный свежевыжатый сок из апельсинов без добавок и консервантов.", 
      stock: 25,
      discount: 15,
      unit: "л",
      weight: "1 л"
    },
    { 
      id: 3, 
      name: "Пельмени домашние 'Бабушкины'", 
      price: 450, 
      image: "/placeholder.svg", 
      category: "food", 
      description: "Пельмени ручной лепки из отборной говядины и свинины.", 
      stock: 35,
      unit: "кг",
      weight: "500 г"
    },
  ]);

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // Функция для выбора товара для редактирования
  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
    setIsEditing(true);
  };

  // Функция для создания нового товара
  const createNewProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "Новый товар",
      price: 0,
      image: "/placeholder.svg",
      category: "food",
      description: "Описание товара",
      stock: 0
    };
    setSelectedProduct(newProduct);
    setIsEditing(true);
  };

  // Функция для сохранения изменений
  const saveProduct = () => {
    if (!selectedProduct) return;

    if (products.find(p => p.id === selectedProduct.id)) {
      // Обновляем существующий товар
      setProducts(products.map(p => p.id === selectedProduct.id ? selectedProduct : p));
    } else {
      // Добавляем новый товар
      setProducts([...products, selectedProduct]);
    }
    
    setIsEditing(false);
    setSelectedProduct(null);
  };

  // Функция для удаления товара
  const deleteProduct = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    if (selectedProduct?.id === id) {
      setSelectedProduct(null);
      setIsEditing(false);
    }
  };

  // Функция для обновления полей товара
  const updateField = (field: string, value: string | number) => {
    if (!selectedProduct) return;
    
    setSelectedProduct({
      ...selectedProduct,
      [field]: value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-gray-500 hover:text-gray-700 mr-4">
              <ChevronLeft className="h-5 w-5" />
            </Link>
            <h1 className="text-xl font-bold">Панель управления</h1>
          </div>
          <div className="flex items-center">
            <Button size="sm" variant="outline" className="mr-2">
              <Eye className="h-4 w-4 mr-2" />
              Предпросмотр сайта
            </Button>
            <Button size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Настройки
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex">
          {/* Боковое меню */}
          <div className="w-64 mr-6">
            <Card className="p-4">
              <div className="space-y-1">
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin">
                    <Package className="h-4 w-4 mr-2" />
                    Товары
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/categories">
                    <Tag className="h-4 w-4 mr-2" />
                    Категории
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/orders">
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Заказы
                  </Link>
                </Button>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link to="/admin/customers">
                    <Users className="h-4 w-4 mr-2" />
                    Клиенты
                  </Link>
                </Button>
              </div>
            </Card>
          </div>

          {/* Основной контент */}
          <div className="flex-1">
            <Tabs defaultValue="all">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">Все товары</TabsTrigger>
                  <TabsTrigger value="food">Продукты</TabsTrigger>
                  <TabsTrigger value="drinks">Напитки</TabsTrigger>
                  <TabsTrigger value="tableware">Посуда</TabsTrigger>
                </TabsList>
                <Button onClick={createNewProduct}>
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить товар
                </Button>
              </div>

              <TabsContent value="all" className="mt-0">
                <Card>
                  <div className="p-4">
                    <Input placeholder="Поиск товаров..." className="mb-4" />
                    
                    <div className="bg-gray-50 rounded-md">
                      <div className="grid grid-cols-12 p-3 font-medium text-sm text-gray-500">
                        <div className="col-span-5">Название</div>
                        <div className="col-span-2">Категория</div>
                        <div className="col-span-1">Цена</div>
                        <div className="col-span-1">Запас</div>
                        <div className="col-span-1">Скидка</div>
                        <div className="col-span-2 text-right">Действия</div>
                      </div>
                      
                      <Separator />
                      
                      {products.map(product => (
                        <div key={product.id} className="grid grid-cols-12 p-3 hover:bg-gray-100 border-b border-gray-100">
                          <div className="col-span-5 flex items-center">
                            <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden mr-3">
                              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            </div>
                            <span className="truncate">{product.name}</span>
                          </div>
                          <div className="col-span-2 flex items-center capitalize">
                            {product.category === 'food' && 'Продукты'}
                            {product.category === 'drinks' && 'Напитки'}
                            {product.category === 'tableware' && 'Посуда'}
                          </div>
                          <div className="col-span-1 flex items-center">{product.price} ₽</div>
                          <div className="col-span-1 flex items-center">{product.stock}</div>
                          <div className="col-span-1 flex items-center">{product.discount || 0}%</div>
                          <div className="col-span-2 flex items-center justify-end">
                            <Button variant="ghost" size="sm" onClick={() => selectProduct(product)}>
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-500" onClick={() => deleteProduct(product.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </TabsContent>

              {['food', 'drinks', 'tableware'].map(category => (
                <TabsContent key={category} value={category} className="mt-0">
                  <Card>
                    <div className="p-4">
                      <Input placeholder="Поиск товаров..." className="mb-4" />
                      
                      <div className="bg-gray-50 rounded-md">
                        <div className="grid grid-cols-12 p-3 font-medium text-sm text-gray-500">
                          <div className="col-span-5">Название</div>
                          <div className="col-span-2">Категория</div>
                          <div className="col-span-1">Цена</div>
                          <div className="col-span-1">Запас</div>
                          <div className="col-span-1">Скидка</div>
                          <div className="col-span-2 text-right">Действия</div>
                        </div>
                        
                        <Separator />
                        
                        {products
                          .filter(product => product.category === category)
                          .map(product => (
                          <div key={product.id} className="grid grid-cols-12 p-3 hover:bg-gray-100 border-b border-gray-100">
                            <div className="col-span-5 flex items-center">
                              <div className="w-10 h-10 rounded bg-gray-200 overflow-hidden mr-3">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                              </div>
                              <span className="truncate">{product.name}</span>
                            </div>
                            <div className="col-span-2 flex items-center capitalize">
                              {product.category === 'food' && 'Продукты'}
                              {product.category === 'drinks' && 'Напитки'}
                              {product.category === 'tableware' && 'Посуда'}
                            </div>
                            <div className="col-span-1 flex items-center">{product.price} ₽</div>
                            <div className="col-span-1 flex items-center">{product.stock}</div>
                            <div className="col-span-1 flex items-center">{product.discount || 0}%</div>
                            <div className="col-span-2 flex items-center justify-end">
                              <Button variant="ghost" size="sm" onClick={() => selectProduct(product)}>
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-500" onClick={() => deleteProduct(product.id)}>
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      {/* Форма редактирования товара */}
      {isEditing && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <Card className="w-full max-w-2xl p-6">
            <h3 className="text-xl font-bold mb-4">
              {selectedProduct.id > products.length ? "Создание товара" : "Редактирование товара"}
            </h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Название товара</label>
                <Input 
                  value={selectedProduct.name} 
                  onChange={(e) => updateField('name', e.target.value)} 
                />
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Цена (₽)</label>
                  <Input 
                    type="number" 
                    value={selectedProduct.price} 
                    onChange={(e) => updateField('price', parseFloat(e.target.value))} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Количество</label>
                  <Input 
                    type="number" 
                    value={selectedProduct.stock} 
                    onChange={(e) => updateField('stock', parseInt(e.target.value))} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Скидка (%)</label>
                  <Input 
                    type="number" 
                    value={selectedProduct.discount || 0} 
                    onChange={(e) => updateField('discount', parseInt(e.target.value))} 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Категория</label>
                <select 
                  className="w-full rounded-md border border-gray-300 p-2"
                  value={selectedProduct.category}
                  onChange={(e) => updateField('category', e.target.value)}
                >
                  <option value="food">Продукты</option>
                  <option value="drinks">Напитки</option>
                  <option value="tableware">Посуда</option>
                  <option value="home">Для дома</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Описание</label>
                <Textarea 
                  value={selectedProduct.description} 
                  onChange={(e) => updateField('description', e.target.value)}
                  rows={3} 
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Единица измерения</label>
                  <Input 
                    value={selectedProduct.unit || ''} 
                    onChange={(e) => updateField('unit', e.target.value)} 
                    placeholder="шт, кг, л и т.д."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Вес/объем</label>
                  <Input 
                    value={selectedProduct.weight || ''} 
                    onChange={(e) => updateField('weight', e.target.value)} 
                    placeholder="500 г, 1 л и т.д."
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Изображение</label>
                <div className="flex items-center">
                  <div className="w-20 h-20 bg-gray-200 rounded overflow-hidden mr-4">
                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                  </div>
                  <Button variant="outline">Загрузить изображение</Button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end mt-6 space-x-2">
              <Button variant="outline" onClick={() => setIsEditing(false)}>Отмена</Button>
              <Button onClick={saveProduct}>
                <Save className="h-4 w-4 mr-2" />
                Сохранить
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
