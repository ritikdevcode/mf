import Hero from "@/components/hero"
import Categories from "@/components/categories"
import FeaturedProducts from "@/components/featured-products"

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      <Hero />
      <Categories />
      <FeaturedProducts />
    </div>
  )
}