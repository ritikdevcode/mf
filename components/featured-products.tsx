"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "./cart-provider";

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?q=80&w=2070",
    category: "shirts",
  },
  {
    id: 2,
    name: "Essential Black T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2070",
    category: "t-shirts",
  },
  {
    id: 3,
    name: "Slim Fit Chinos",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?q=80&w=2067",
    category: "trousers",
  },
  {
    id: 4,
    name: "Casual Joggers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?q=80&w=2069",
    category: "bottoms",
  },
];

const FeaturedProducts = () => {
  const { toast } = useToast();
  const { addItem } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight mb-8">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <p className="text-xl font-bold mt-2">${product.price}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;