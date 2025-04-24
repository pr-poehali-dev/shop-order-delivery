import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
  slug: string;
}

interface CategorySectionProps {
  title: string;
  categories: Category[];
}

const CategorySection = ({ title, categories }: CategorySectionProps) => {
  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Link 
            to="/catalog"
            className="text-primary flex items-center hover:underline"
          >
            Смотреть все
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/catalog/${category.slug}`}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={category.image || "/placeholder.svg"} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h3 className="text-white font-medium text-lg text-center px-4">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
