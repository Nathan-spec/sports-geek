"use client";
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Heart, Globe, Truck, Shield, Users } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"


export default function HomePage() {
  const featuredProducts = [
    {
      id: 1,
      name: "Kenya Rugby Sevens Heritage Scarf",
      price: { kes: 2500, usd: 19.99 },
      image: "/assets/kenya-flag-heritage-scarf.png",
      rating: 4.9,
      reviews: 127,
      badge: "Bestseller",
    },
    {
      id: 2,
      name: "Shujaa Pride Classic Scarf",
      price: { kes: 2500, usd: 19.99 },
      image: "/assets/shujaa-pride.png",
      rating: 4.8,
      reviews: 89,
      badge: "New",
    },
    {
      id: 3,
      name: "Maasai Warrior Rugby Scarf",
      price: { kes: 2800, usd: 22.99 },
      image: "/assets/maasai-warrior-rugby-scarf.png",
      rating: 5.0,
      reviews: 45,
      badge: "Limited Edition",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-red-600 to-black text-white py-20 lg:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">🇰🇪 Proudly Kenyan</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Where Rugby Meets{" "}
                  <span className="block text-yellow-400">Kenyan Heritage</span>
                </h1>
                <p className="text-xl text-white/90 max-w-lg">
                  Premium rugby scarves that celebrate the spirit of Kenyan rugby and our rich cultural heritage.
                  Crafted for fans who wear their pride with passion.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                </Link>
                <Link href={"/about"}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black text-lg px-8 bg-transparent"
                >
                  Our Story
                </Button>
                </Link>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Happy Fans</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">10+</div>
                  <div className="text-sm text-white/80">Counties</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4.5★</div>
                  <div className="text-sm text-white/80">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1595097199678-2944adfb27ab?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Kenyan rugby fan wearing SportsGeekScarves"
                width={700}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-black p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="font-semibold">4.5/5</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{"Best scarfs I've ever bought!"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Global Shipping</h3>
              <p className="text-sm text-gray-600">Worldwide delivery to 50+ countries</p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-gray-600">95% Acrylic + 5% Spandex blend</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold mb-2">Kenyan Heritage</h3>
              <p className="text-sm text-gray-600">Authentic cultural designs</p>
            </div>
            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Fast Delivery</h3>
              <p className="text-sm text-gray-600">Express shipping available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Collection</Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Scarves That Tell Your Story</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each scarf is a masterpiece that combines the passion of rugby with the beauty of Kenyan culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src="/assets/kenyan-flag-heritage-scarf.png"
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
              View All Products
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Join the SportsGeek Family</h2>
              <p className="text-xl text-white/90">
                Get exclusive access to new designs, rugby updates, and special offers for the Kenyan rugby community
              </p>
            </div>


            <p className="text-sm text-white/80">Join 5,000+ rugby fans who never miss an update</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
