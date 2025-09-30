import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Menu, User, Heart, Globe } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-black text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <span>🇰🇪 Free shipping in Kenya on orders over KES 3,000</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <select className="bg-transparent text-white text-sm">
                  <option value="kes">KES</option>
                  <option value="usd">USD</option>
                  <option value="gbp">GBP</option>
                  <option value="eur">EUR</option>
                </select>
              </div>
              <Link href="/track-order" className="hover:text-gray-300">
                Track Order
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <div>
              <div className="font-bold text-xl">SportsGeekScarves</div>
              <div className="text-xs text-gray-600">Kenyan Rugby Heritage</div>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="font-medium hover:text-green-600 transition-colors">
              Home
            </Link>
            <Link href="/shop" className="font-medium hover:text-green-600 transition-colors">
              Shop
            </Link>
            <Link href="/collections" className="font-medium hover:text-green-600 transition-colors">
              Collections
            </Link>
            <Link href="/about" className="font-medium hover:text-green-600 transition-colors">
              About
            </Link>
            <Link href="/blog" className="font-medium hover:text-green-600 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="font-medium hover:text-green-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-red-600">
                2
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
