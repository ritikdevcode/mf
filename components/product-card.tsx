"use client"

import Image from 'next/image'
import { Product } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import { useCart } from '@/lib/hooks/use-cart'
import { useWishlist } from '@/lib/hooks/use-wishlist'
import { Heart } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast()
  const { addItem } = useCart()
  const { addItem: addToWishlist, removeItem: removeFromWishlist, isInWishlist } = useWishlist()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    })
  }

  const toggleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`
      })
    } else {
      addToWishlist(product)
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`
      })
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 z-10 bg-white/80 hover:bg-white/90 dark:bg-black/80 dark:hover:bg-black/90"
            onClick={toggleWishlist}
          >
            <Heart
              className={cn(
                "h-5 w-5",
                isInWishlist(product.id) && "fill-red-500 text-red-500"
              )}
            />
          </Button>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.description}</p>
          <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button onClick={handleAddToCart} className="w-full">
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}