import { Button } from "@/components/ui/button"
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">SG</span>
              </div>
              <div>
                <div className="font-bold text-lg">SportsGeekScarves</div>
                <div className="text-xs text-gray-400">Kenyan Rugby Heritage</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Premium rugby scarves celebrating Kenyan heritage and rugby passion. Connecting fans worldwide through
              authentic cultural designs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              </a> 
              <a
               href="https://instagram.com"
               target="_blank"
               rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              </a>  

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </Button>
              </a>           
              
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Youtube className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link href="/shop" className="block text-gray-400 hover:text-white transition-colors">
                Shop All Products
              </Link>
              <Link href="/collections" className="block text-gray-400 hover:text-white transition-colors">
                Merchandise
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/blog" className="block text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Customer Care</h3>
            <div className="space-y-3">
              <Link href="/contact" className="block text-gray-400 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/shipping" className="block text-gray-400 hover:text-white transition-colors">
                Shipping Info
              </Link>
              <Link href="/returns" className="block text-gray-400 hover:text-white transition-colors">
                Returns & Exchanges
              </Link>
              <Link href="/size-guide" className="block text-gray-400 hover:text-white transition-colors">
                Size Guide
              </Link>
              <Link href="/faq" className="block text-gray-400 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/track-order" className="block text-gray-400 hover:text-white transition-colors">
                Track Your Order
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div className="text-gray-400 text-sm">
                  <div>Nairobi, Kenya</div>
                  <div>East Africa</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:hello@sportsgeekscarves.com" className="text-gray-400 hover:text-white text-sm">
                  hello@sportsgeekscarves.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <a href="tel:+254700000000" className="text-gray-400 hover:text-white text-sm">
                  +254 700 000 000
                </a>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-900 rounded-lg">
              <div className="text-sm font-medium mb-2">Payment Methods</div>
              <div className="text-xs text-gray-400">M-Pesa • Visa • Mastercard • PayPal • Stripe</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SportsGeekScarves. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
