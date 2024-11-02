import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    name: "Shirts",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2070",
    href: "/category/shirts",
  },
  {
    name: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2080",
    href: "/category/t-shirts",
  },
  {
    name: "Trousers",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=2070",
    href: "/category/trousers",
  },
  {
    name: "Bottoms",
    image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=2070",
    href: "/category/bottoms",
  },
];

const Categories = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link key={category.name} href={category.href}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">{category.name}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Categories;