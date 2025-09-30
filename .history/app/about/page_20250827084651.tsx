import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Award, Truck, Shield } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Rugby",
      description: "We live and breathe rugby, understanding what it means to be a true fan",
    },
    {
      icon: Users,
      title: "Cultural Heritage",
      description: "Celebrating Kenya's rich traditions through authentic design elements",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Connecting Kenyan rugby fans worldwide through shared identity",
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Using only the finest materials for durability and comfort",
    },
  ]

  const team = [
    {
      name: "James Mwangi",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former rugby player turned entrepreneur, passionate about connecting Kenyan rugby culture globally",
    },
    {
      name: "Grace Wanjiku",
      role: "Head of Design",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Cultural design expert specializing in traditional Kenyan motifs and modern aesthetics",
    },
    {
      name: "David Kipchoge",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Logistics specialist ensuring quality products reach fans worldwide efficiently",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-red-600 to-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 mb-4">Our Story</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6">Where Passion Meets Heritage</h1>
                <p className="text-xl text-white/90">
                  Born from the heart of Kenya's rugby culture, SportsGeekScarves represents more than just
                  merchandise—we're a bridge connecting fans to their roots and their team.
                </p>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/assets/passion-heritage.jpg"
                alt="Kenyan rugby celebration"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To create premium rugby scarves that celebrate Kenyan heritage while connecting fans worldwide through
              shared passion, authentic design, and uncompromising quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-red-600 rounded-full flex items-center justify-center mx-auto">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">From Stadium Dreams to Global Reality</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    It all started in 2019 when our founder, James Mwangi, was watching Kenya's rugby sevens team
                    compete at the World Series. Surrounded by fans from around the world, each proudly wearing their
                    nation's colors, he noticed something missing—authentic Kenyan rugby merchandise that truly
                    represented our culture.
                  </p>
                  <p>
                    That moment sparked an idea: what if we could create rugby scarves that didn't just show team
                    colors, but told the story of Kenya itself? Scarves that incorporated our traditional patterns, our
                    national pride, and our unique position in the rugby world.
                  </p>
                  <p>
                    Today, SportsGeekScarves has grown from that single vision to serve thousands of fans across 50+
                    countries, each scarf carrying a piece of Kenya's heart to rugby stadiums worldwide.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-600 mb-2">2019</div>
                  <div className="text-sm text-gray-600">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-red-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-black mb-2">5000+</div>
                  <div className="text-sm text-gray-600">Happy Fans</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Kenya rugby team"
                width={500}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Kenyan cultural patterns"
                width={500}
                height={300}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The passionate individuals behind every scarf, dedicated to bringing Kenyan rugby culture to the world
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Promise */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Quality Promise</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Every scarf is crafted with meticulous attention to detail, using premium materials and authentic designs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Materials</h3>
              <p className="text-white/90">
                95% premium acrylic and 5% spandex blend for durability, comfort, and perfect drape
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Designs</h3>
              <p className="text-white/90">
                Carefully researched cultural motifs created in collaboration with Kenyan artists
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Global Delivery</h3>
              <p className="text-white/90">Reliable shipping to 50+ countries with tracking and insurance included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">Join the SportsGeek Family</h2>
            <p className="text-xl text-gray-600">
              Become part of a global community celebrating Kenyan rugby heritage. Every scarf tells a story—what's
              yours?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8">
                Shop Our Collection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
