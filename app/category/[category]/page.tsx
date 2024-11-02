import { products } from "@/lib/products"
import { CategoryContent } from "@/components/category-content"

export function generateStaticParams() {
  const categories = ["shirts", "t-shirts", "trousers", "bottoms"]
  return categories.map((category) => ({
    category: category,
  }))
}

export default function CategoryPage({
  params,
}: {
  params: { category: string }
}) {
  const category = params.category
  const categoryProducts = products.filter(
    (product) => product.category.toLowerCase() === category.toLowerCase()
  )

  // Get unique colors and sizes from filtered products
  const colors = [...new Set(categoryProducts.map((p) => p.color))]
  const sizes = [...new Set(categoryProducts.map((p) => p.size))]
  const priceRange: [number, number] = [
    Math.min(...categoryProducts.map((p) => p.price)),
    Math.max(...categoryProducts.map((p) => p.price)),
  ]

  return (
    <CategoryContent
      category={category}
      products={categoryProducts}
      initialColors={colors}
      initialSizes={sizes}
      initialPriceRange={priceRange}
    />
  )
}