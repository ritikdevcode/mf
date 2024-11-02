"use client"

import { useState, useMemo } from "react"
import { ProductGrid } from "@/components/product-grid"
import { ProductFilters } from "@/components/product-filters"
import { FilterState, Product, SortOption } from "@/lib/types"

interface CategoryContentProps {
  category: string
  products: Product[]
  initialColors: string[]
  initialSizes: string[]
  initialPriceRange: [number, number]
}

export function CategoryContent({
  category,
  products,
  initialColors,
  initialSizes,
  initialPriceRange,
}: CategoryContentProps) {
  const [filters, setFilters] = useState<FilterState>({
    colors: [],
    sizes: [],
    priceRange: initialPriceRange,
  })

  const [sort, setSort] = useState<SortOption>("price-asc")

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Apply filters
    if (filters.colors.length > 0) {
      filtered = filtered.filter((product) =>
        filters.colors.includes(product.color)
      )
    }

    if (filters.sizes.length > 0) {
      filtered = filtered.filter((product) => filters.sizes.includes(product.size))
    }

    filtered = filtered.filter(
      (product) =>
        product.price >= filters.priceRange[0] &&
        product.price <= filters.priceRange[1]
    )

    // Apply sorting
    return filtered.sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "name-asc":
          return a.name.localeCompare(b.name)
        case "name-desc":
          return b.name.localeCompare(a.name)
        default:
          return 0
      }
    })
  }, [products, filters, sort])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category}</h1>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-72">
          <ProductFilters
            colors={initialColors}
            sizes={initialSizes}
            priceRange={initialPriceRange}
            filters={filters}
            onFilterChange={setFilters}
            onSortChange={setSort}
          />
        </div>
        <div className="flex-1">
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <p className="text-center text-gray-500">
              No products found matching your criteria.
            </p>
          )}
        </div>
      </div>
    </div>
  )
}