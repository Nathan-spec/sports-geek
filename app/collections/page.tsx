"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Filter, Grid, List, X } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CollectionsPage() {
  const [selectedCollections, setSelectedCollections] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState([0, 3000])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const collections = [
    {
      id: 1,
      name: "Heritage Collection",
      description: "Classic Kenyan rugby legacy designs celebrating our rich sporting history",
      image: "/placeholder.svg?height=300&width=400&text=Heritage+Collection",
      productCount: 12,
      badge: "Classic",
    },
    {
      id: 2,
      name: "Shujaa Pride",
      description: "Official Kenya Sevens inspired designs for true rugby warriors",
      image: "/placeholder.svg?height=300&width=400&text=Shujaa+Pride",
      productCount: 8,
      badge: "Official",
    },
    {
      id: 3,
      name: "Cultural Fusion",
      description: "Traditional Kenyan patterns meet modern rugby aesthetics",
      image: "/placeholder.svg?height=300&width=400&text=Cultural+Fusion",
      productCount: 15,
      badge: "Artistic",
    },
    {
      id: 4,
      name: "Diaspora Connect",
      description: "Designs that connect Kenyans worldwide to their homeland",
      image: "/placeholder.svg?height=300&width=400&text=Diaspora+Connect",
      productCount: 10,
      badge: "Global",
    },
  ]

  const products = [
    {
      id: 1,
      name: "Kenya Rugby Sevens Heritage Scarf",
      price: { kes: 2500, usd: 19.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
      collection: "Heritage Collection",
    },
    {
      id: 2,
      name: "Shujaa Pride Classic Scarf",
      price: { kes: 2500, usd: 19.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      reviews: 89,
      badge: "New",
      collection: "Shujaa Pride",
    },
    {
      id: 3,
      name: "Maasai Warrior Rugby Scarf",
      price: { kes: 2800, usd: 22.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 5.0,
      reviews: 45,
      badge: "Limited Edition",
      collection: "Cultural Fusion",
    },
    {
      id: 4,
      name: "Kenyan Diaspora Unity Scarf",
      price: { kes: 2600, usd: 20.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      reviews: 73,
      badge: "",
      collection: "Diaspora Connect",
    },
    {
      id: 5,
      name: "Safari Rugby Adventure Scarf",
      price: { kes: 2700, usd: 21.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      reviews: 56,
      badge: "Popular",
      collection: "Cultural Fusion",
    },
    {
      id: 6,
      name: "Harambee Spirit Scarf",
      price: { kes: 2400, usd: 18.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      reviews: 92,
      badge: "",
      collection: "Heritage Collection",
    },
    {
      id: 7,
      name: "Shujaa Victory Scarf",
      price: { kes: 2900, usd: 23.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.6,
      reviews: 34,
      badge: "New",
      collection: "Shujaa Pride",
    },
    {
      id: 8,
      name: "Global Kenya Scarf",
      price: { kes: 2300, usd: 17.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.5,
      reviews: 67,
      badge: "",
      collection: "Diaspora Connect",
    },
  ]

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    const matchesCollection = selectedCollections.length === 0 || selectedCollections.includes(product.collection)
    const matchesPrice = product.price.kes >= priceRange[0] && product.price.kes <= priceRange[1]
    const matchesRating = product.rating >= minRating
    return matchesCollection && matchesPrice && matchesRating
  })

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price.kes - b.price.kes
      case "price-high":
        return b.price.kes - a.price.kes
      case "rating":
        return b.rating - a.rating
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const toggleCollection = (collection: string) => {
    setSelectedCollections((prev) =>
      prev.includes(collection) ? prev.filter((c) => c !== collection) : [...prev, collection],
    )
  }

  const clearFilters = () => {
    setSelectedCollections([])
    setPriceRange([0, 3000])
    setMinRating(0)
  }

  const hasActiveFilters = selectedCollections.length > 0 || priceRange[0] > 0 || priceRange[1] < 3000 || minRating > 0

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 hover:bg-white/30">🇰🇪 Our Collections</Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Rugby Heritage Collections</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Explore our curated collections celebrating Kenyan rugby culture and heritage
            </p>
          </div>
        </div>
      </section>

      {/* Collections Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-black/80 text-white">{collection.badge}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2">{collection.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{collection.productCount} products</span>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-lg">Filters</h3>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="text-red-600 hover:text-red-700"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Clear
                    </Button>
                  )}
                </div>

                {/* Collection Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Collections</h4>
                  <div className="space-y-2">
                    {collections.map((collection) => (
                      <label key={collection.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCollections.includes(collection.name)}
                          onChange={() => toggleCollection(collection.name)}
                          className="rounded border-gray-300"
                        />
                        <span className="text-sm">{collection.name}</span>
                        <span className="text-xs text-gray-500">({collection.productCount})</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Price Range (KES)</h4>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={3000}
                      min={0}
                      step={100}
                      className="mb-4"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>KES {priceRange[0]}</span>
                      <span>KES {priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Minimum Rating</h4>
                  <div className="space-y-2">
                    {[4.5, 4.0, 3.5, 3.0, 0].map((rating) => (
                      <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="rating"
                          checked={minRating === rating}
                          onChange={() => setMinRating(rating)}
                          className="border-gray-300"
                        />
                        <div className="flex items-center space-x-1">
                          {rating > 0 ? (
                            <>
                              <div className="flex text-yellow-500">
                                {[...Array(Math.floor(rating))].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm">{rating}+ stars</span>
                            </>
                          ) : (
                            <span className="text-sm">All ratings</span>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products */}
            <div className="lg:w-3/4">
              {/* Sort and View Controls */}
              <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-gray-600">
                    {sortedProducts.length} of {products.length} products
                  </span>
                  {hasActiveFilters && (
                    <div className="flex gap-2">
                      {selectedCollections.map((collection) => (
                        <Badge key={collection} variant="secondary" className="text-xs">
                          {collection}
                          <button onClick={() => toggleCollection(collection)} className="ml-1 hover:text-red-600">
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Sort by: Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>

                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === "grid" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-r-none"
                      onClick={() => setViewMode("grid")}
                    >
                      <Grid className="h-4 w-4" />
                    </Button>
                    <Button
                      variant={viewMode === "list" ? "default" : "ghost"}
                      size="sm"
                      className="rounded-l-none"
                      onClick={() => setViewMode("list")}
                    >
                      <List className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Products Grid/List */}
              {sortedProducts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-gray-400 mb-4">
                    <Filter className="h-16 w-16 mx-auto mb-4" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">No products found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your filters to see more results</p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear all filters
                  </Button>
                </div>
              ) : (
                <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" : "space-y-6"}>
                  {sortedProducts.map((product) => (
                    <Card
                      key={product.id}
                      className={`group hover:shadow-xl transition-all duration-300 border-0 shadow-lg ${viewMode === "list" ? "flex" : ""}`}
                    >
                      <div
                        className={`relative overflow-hidden ${viewMode === "list" ? "w-48 flex-shrink-0" : "rounded-t-lg"}`}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          width={300}
                          height={400}
                          className={`object-cover group-hover:scale-105 transition-transform duration-300 ${viewMode === "list" ? "w-full h-full" : "w-full h-80"}`}
                        />
                        {product.badge && (
                          <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">{product.badge}</Badge>
                        )}
                        <Button
                          size="icon"
                          variant="secondary"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                        {viewMode === "grid" && (
                          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button className="w-full bg-black/80 hover:bg-black text-white">Quick View</Button>
                          </div>
                        )}
                      </div>
                      <CardContent className={`p-6 ${viewMode === "list" ? "flex-1" : ""}`}>
                        <div className="space-y-4">
                          <div>
                            <Badge variant="outline" className="mb-2 text-xs">
                              {product.collection}
                            </Badge>
                            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                            <div className="flex items-center gap-2 mb-2">
                              <div className="flex text-yellow-500">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                              </div>
                              <span className="text-sm text-gray-600">
                                {product.rating} ({product.reviews} reviews)
                              </span>
                            </div>
                          </div>

                          <div
                            className={`flex items-center ${viewMode === "list" ? "justify-between" : "justify-between"}`}
                          >
                            <div>
                              <div className="text-2xl font-bold">KES {product.price.kes}</div>
                              <div className="text-sm text-gray-600">USD ${product.price.usd}</div>
                            </div>
                            <Button className="bg-green-600 hover:bg-green-700">
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              Add to Cart
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
