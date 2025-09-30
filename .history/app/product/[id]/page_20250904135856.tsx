"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Minus, Plus, ShoppingCart } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useParams } from "next/navigation"

// Same product data as collections page
const allProducts = [
  {
    id: 1,
    name: "Kenya Rugby Sevens Heritage Scarf",
    price: { kes: 2500, usd: 19.99 },
    image: "/assets/kenya-rugby-sevens-heritage-scarf.png",
    rating: 4.9,
    reviews: 127,
    badge: "Bestseller",
    collection: "Heritage Collection",
    description:
      "This heritage scarf has breezy appeal in a loose, long-sleeved shape made from cotton poplin for a timeless tailored look. The front is fastened with a covered button tab, while the collar features an elegant spread design.",
    colors: ["Red & Black", "Blue & White"],
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: 2,
    name: "Shujaa Pride Classic Scarf",
    price: { kes: 2500, usd: 19.99 },
    image: "/assets/shujaa-pride-classic-scarf.png",
    rating: 4.8,
    reviews: 89,
    badge: "New",
    collection: "Shujaa Pride",
    description:
      "Celebrate Kenya's rugby excellence with this premium silk scarf featuring the iconic Shujaa colors and patterns. Crafted with attention to detail for the discerning rugby fan.",
    colors: ["Green & Red", "Black & Gold"],
    sizes: ["One Size"],
    inStock: true,
  },
  {
    id: 3,
    name: "Maasai Warrior Rugby Scarf",
    price: { kes: 2800, usd: 22.99 },
    image: "/assets/maasai-warrior-rugby-scarf.png",
    rating: 5.0,
    reviews: 45,
    badge: "Limited Edition",
    collection: "Cultural Fusion",
    description:
      "A stunning fusion of traditional Maasai patterns with modern rugby aesthetics. This limited edition piece represents the warrior spirit of Kenyan rugby culture.",
    colors: ["Traditional Red", "Warrior Blue"],
    sizes: ["One Size"],
    inStock: true,
  },
  // Add more products as needed...
]

export default function ProductPage() {
  const params = useParams()
  const productId = Number.parseInt(params.id as string)
  const product = allProducts.find((p) => p.id === productId)

  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState("One Size")
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/collections">
            <Button>Back to Collections</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-sm text-gray-600">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/collections" className="hover:text-black">
              Collections
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg?height=600&width=600"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              {product.badge && <Badge className="absolute top-4 left-4 bg-red-600 text-white">{product.badge}</Badge>}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {product.collection}
              </Badge>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Colors */}
            <div>
              <h3 className="font-semibold mb-3">Colors</h3>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(index)}
                    className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center text-xs font-medium ${
                      selectedColor === index ? "border-black" : "border-gray-200"
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-2">{product.colors[selectedColor]}</p>
            </div>

            {/* Size */}
            <div>
              <h3 className="font-semibold mb-3">Size</h3>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Price */}
            <div className="border-t pt-6">
              <div className="text-3xl font-bold mb-2">KES {product.price.kes}</div>
              <div className="text-lg text-gray-600">USD ${product.price.usd}</div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <Button className="w-full bg-black hover:bg-gray-800 text-white py-6 text-lg">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full py-6 bg-transparent">
                <Heart className="mr-2 h-5 w-5" />
                Add to Wishlist
              </Button>
            </div>

            {/* Description */}
            <div className="border-t pt-6">
              <h3 className="font-semibold mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Additional Info */}
            <div className="border-t pt-6">
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold">
                  Care Instructions
                  <Plus className="h-4 w-4 group-open:rotate-45 transition-transform" />
                </summary>
                <div className="mt-3 text-sm text-gray-600">
                  <ul className="space-y-1">
                    <li>• Hand wash in cold water</li>
                    <li>• Do not bleach</li>
                    <li>• Lay flat to dry</li>
                    <li>• Iron on low heat if needed</li>
                  </ul>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
