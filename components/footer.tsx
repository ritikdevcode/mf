import { Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">MenStyle</h3>
            <p className="text-muted-foreground">
              Your one-stop destination for premium men's fashion.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/category/shirts" className="text-muted-foreground hover:text-foreground">
                  Shirts
                </Link>
              </li>
              <li>
                <Link href="/category/t-shirts" className="text-muted-foreground hover:text-foreground">
                  T-Shirts
                </Link>
              </li>
              <li>
                <Link href="/category/trousers" className="text-muted-foreground hover:text-foreground">
                  Trousers
                </Link>
              </li>
              <li>
                <Link href="/category/bottoms" className="text-muted-foreground hover:text-foreground">
                  Bottoms
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-muted-foreground hover:text-foreground">
                  Shipping Information
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-muted-foreground hover:text-foreground">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-muted-foreground hover:text-foreground">
                  Size Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} MenStyle. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer