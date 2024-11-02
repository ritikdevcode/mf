"use client"

import { useWishlist } from "@/lib/hooks/use-wishlist"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import Link from "next/link"

export default function WishlistPage() {
  const { items } = useWishlist()

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <Heart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
        <h1 className="text-3xl font-bold mb-4">Your wishlist is empty</h1>
        <p className="text-muted-foreground mb-8">
          Start adding items to your wishlist by clicking the heart icon on products.
        </p>
        <Link href="/">
          <Button size="lg">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
      <ProductGrid products={items} />
    </div>
  )
}