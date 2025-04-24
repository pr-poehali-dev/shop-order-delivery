import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-primary">ПродуктыДома</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
              Главная
            </Link>
            <Link to="/catalog" className="text-gray-700 hover:text-primary transition-colors">
              Каталог
            </Link>
            <Link to="/delivery" className="text-gray-700 hover:text-primary transition-colors">
              Доставка
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
              Контакты
            </Link>
          </nav>

          {/* Desktop Search & Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-48">
              <Input 
                type="text" 
                placeholder="Поиск продуктов..." 
                className="pl-8 pr-4"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="relative mb-4">
              <Input 
                type="text" 
                placeholder="Поиск продуктов..." 
                className="pl-8 pr-4 w-full"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/catalog" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Каталог
              </Link>
              <Link 
                to="/delivery" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Доставка
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </nav>
            <div className="flex mt-4 space-x-4">
              <Button className="flex-1" variant="outline" asChild>
                <Link to="/login">
                  <User className="h-4 w-4 mr-2" />
                  Войти
                </Link>
              </Button>
              <Button className="flex-1" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Корзина
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
