import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CollectionsPage() {
  const collections = [
    {
      id: 1,
      name: "Heritage Collection",
      description: "Classic designs celebrating Kenya's rugby legacy",
      image: "/placeholder.svg?height=400&width=600&text=Heritage+Collection",
      productCount: 8,
      badge: "Popular",
      color: "from-green-600 to-green-800",
    },
    {
      id: 2,
      name: "Shujaa Pride",
      description: "Official Kenya Sevens team inspired designs",
      image: "/placeholder.svg?height=400&width=600&text=Shujaa+Pride",
      productCount: 6,
      badge: "Official",
      color: "from-red-600 to-red-800",
    },
    {
      id: 3,
      name: "Cultural Fusion",
      description: "Traditional Kenyan patterns meet modern rugby style",
      image: "/placeholder.svg?height=400&width=600&text=Cultural+Fusion",
      productCount: 5,
      badge: "Limited",
      color: "from-yellow-600 to-orange-600",
    },
    {
      id: 4,
      name: "Diaspora Connect",
      description: "Designs for Kenyans around the world",
      image: "/placeholder.svg?height=400&width=600&text=Diaspora+Connect",
      productCount: 7,
      badge: "Global",
      color: "from-black to-gray-800",
    },
  ]

  const featuredProducts = [
    {
      id: 1,
      name: "Kenya Rugby Sevens Heritage Scarf",
      collection: "Heritage Collection",
      price: { kes: 2500, usd: 19.99 },
      image: "/placeholder.svg?height=400&width=300&text=Heritage+Scarf",
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Shujaa Pride Classic Scarf",
      collection: "Shujaa Pride",
      price: { kes: 2500, usd: 19.99 },
      image: "/placeholder.svg?height=400&width=300&text=Shujaa+Scarf",
      rating: 4.8,
      reviews: 89,
      badge: "New",
    },
    {
      id: 3,
      name: "Maasai Warrior Rugby Scarf",
      collection: "Cultural Fusion",
      price: { kes: 2800, usd: 22.99 },
      image: "/placeholder.svg?height=400&width=300&text=Maasai+Scarf",
      rating: 5.0,
      reviews: 45,
      badge: "Limited Edition",
    },
    {
      id: 4,
      name: "Global Kenya Unity Scarf",
      collection: "Diaspora Connect",
      price: { kes: 2600, usd: 20.99 },
      image: "/placeholder.svg?height=400&width=300&text=Unity+Scarf",
      rating: 4.7,
      reviews: 63,
      badge: "Popular",
    },
    {
      id: 5,
      name: "Kenyan Flag Heritage Scarf",
      collection: "Heritage Collection",
      price: { kes: 2400, usd: 18.99 },
      image: "/placeholder.svg?height=400&width=300&text=Flag+Scarf",
      rating: 4.8,
      reviews: 92,
      badge: "Classic",
    },
    {
      id: 6,
      name: "Safari Rugby Adventure Scarf",
      collection: "Cultural Fusion",
      price: { kes: 2700, usd: 21.99 },
      image: "/placeholder.svg?height=400&width=300&text=Safari+Scarf",
      rating: 4.9,
      reviews: 38,
      badge: "Unique",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-red-600 to-black text-white py-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-4">
              🇰🇪 Curated Collections
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Discover Our
              <span className="block text-yellow-400">Rugby Collections</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Each collection tells a unique story of Kenyan rugby heritage, cultural pride, and global connection. Find
              the perfect scarf that represents your passion.
            </p>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Collections</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections, each designed to celebrate different aspects of Kenyan rugby
              culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {collections.map((collection) => (
              <Card
                key={collection.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${collection.color} opacity-90`}></div>
                  <Image
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white p-6">
                      <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-4">
                        {collection.badge}
                      </Badge>
                      <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                      <p className="text-white/90 mb-4">{collection.description}</p>
                      <div className="text-sm text-white/80 mb-6">{collection.productCount} Products Available</div>
                      <Button className="bg-white text-black hover:bg-white/90">Explore Collection</Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Sort Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <h3 className="font-semibold text-lg">All Products</h3>
              <span className="text-gray-600">({featuredProducts.length} items)</span>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>

              <select className="px-3 py-2 border rounded-lg text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
                <option>Best Rating</option>
              </select>

              <div className="flex border rounded-lg">
                <Button variant="ghost" size="sm" className="rounded-r-none">
                  <Grid className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-l-none">
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 hover:bg-red-700">{product.badge}</Badge>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="text-xs">
                      {product.collection}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
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

                    <div className="flex items-center justify-between">
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

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      {/* Collection Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Our Collections?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every collection is thoughtfully designed to represent different aspects of Kenyan rugby culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏉</span>
              </div>
              <h3 className="font-semibold mb-2">Authentic Rugby Heritage</h3>
              <p className="text-sm text-gray-600">Designs inspired by Kenya's rich rugby history and traditions</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">Cultural Artistry</h3>
              <p className="text-sm text-gray-600">Traditional Kenyan patterns and motifs beautifully integrated</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold mb-2">Global Connection</h3>
              <p className="text-sm text-gray-600">Connecting Kenyan diaspora worldwide through shared pride</p>
            </div>
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">⭐</span>
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">95% Acrylic + 5% Spandex blend for comfort and durability</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
