import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Filter, Grid, List } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"


export default function ShopPage() {
  const products = [
    {
      id: 1,
      name: "Kenya Rugby Sevens Heritage Scarf",
      price: { kes: 2500, usd: 19.99 },
      image: "public/assets/global-kenya-scarf.png",
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
      category: "Heritage",
    },
    {
      id: 2,
      name: "Shujaa Pride Classic Scarf",
      price: { kes: 2500, usd: 19.99 },
      image: "public/assets/harambee-spirit-scarf.png",
      rating: 4.8,
      reviews: 89,
      badge: "New",
      category: "Classic",
    },
    {
      id: 3,
      name: "Maasai Warrior Rugby Scarf",
      price: { kes: 2800, usd: 22.99 },
      image: "public/assets/independence-day-rugby-scarf.png",
      rating: 5.0,
      reviews: 45,
      badge: "Limited Edition",
      category: "Cultural",
    },
    {
      id: 4,
      name: "Kenyan Diaspora Unity Scarf",
      price: { kes: 2600, usd: 20.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.7,
      reviews: 73,
      badge: "",
      category: "Diaspora",
    },
    {
      id: 5,
      name: "Safari Rugby Adventure Scarf",
      price: { kes: 2700, usd: 21.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.8,
      reviews: 56,
      badge: "Popular",
      category: "Safari",
    },
    {
      id: 6,
      name: "Harambee Spirit Scarf",
      price: { kes: 2400, usd: 18.99 },
      image: "/placeholder.svg?height=400&width=300",
      rating: 4.9,
      reviews: 92,
      badge: "",
      category: "Heritage",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Shop Rugby Scarves</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover our complete collection of premium rugby scarves celebrating Kenyan heritage and rugby passion
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <div className="flex gap-2">
                <Badge variant="secondary">Heritage</Badge>
                <Badge variant="secondary">Cultural</Badge>
                <Badge variant="secondary">Limited Edition</Badge>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select className="border rounded-lg px-3 py-2">
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

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
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
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="w-full bg-black/80 hover:bg-black text-white">Quick View</Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <Badge variant="outline" className="mb-2 text-xs">
                        {product.category}
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

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Load More Products
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
