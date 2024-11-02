export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  color: string
  size: string
}

export interface FilterState {
  colors: string[]
  sizes: string[]
  priceRange: [number, number]
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc'