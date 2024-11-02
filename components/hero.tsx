import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070"
          alt="Hero background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Elevate Your Style
        </h1>
        <p className="mt-6 max-w-xl text-xl text-gray-300">
          Discover our premium collection of men's fashion. From casual to formal,
          we have everything you need to look your best.
        </p>
        <div className="mt-10 flex gap-4">
          <Link href="/category/shirts">
            <Button size="lg" className="text-lg">
              Shop Now
            </Button>
          </Link>
          <Link href="/category/new-arrivals">
            <Button size="lg" variant="outline" className="text-lg text-white border-white hover:text-black hover:bg-white">
              New Arrivals
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;