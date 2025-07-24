import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPage() {
  const featuredPost = {
    id: 1,
    title: "Kenya Sevens: The Road to Paris Olympics 2024",
    excerpt:
      "Follow the Shujaa's incredible journey as they prepare for the biggest stage in rugby. From training camps in Nairobi to international tournaments, discover what it takes to represent Kenya on the world stage.",
    image: "/placeholder.svg?height=400&width=600",
    author: "James Mwangi",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Rugby News",
    featured: true,
  }

  const blogPosts = [
    {
      id: 2,
      title: "The Story Behind Our Maasai Warrior Design",
      excerpt:
        "Discover the cultural significance and artistic inspiration behind one of our most popular scarf designs, created in collaboration with Maasai artists.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Grace Wanjiku",
      date: "March 12, 2024",
      readTime: "5 min read",
      category: "Design Stories",
    },
    {
      id: 3,
      title: "Rugby Sevens World Series: Kenya's Performance Analysis",
      excerpt:
        "A deep dive into Kenya's recent performances in the World Rugby Sevens Series, highlighting key players and memorable moments.",
      image: "/placeholder.svg?height=300&width=400",
      author: "David Kipchoge",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Rugby Analysis",
    },
    {
      id: 4,
      title: "Connecting the Diaspora: Rugby Scarves as Cultural Bridges",
      excerpt:
        "How Kenyan rugby fans around the world use our scarves to maintain their connection to home and share their heritage with new communities.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Sarah Mutua",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Fan Stories",
    },
    {
      id: 5,
      title: "Sustainable Fashion in Sports Merchandise",
      excerpt:
        "Our commitment to sustainable practices in creating premium rugby scarves, from material sourcing to packaging.",
      image: "/placeholder.svg?height=300&width=400",
      author: "James Mwangi",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Sustainability",
    },
    {
      id: 6,
      title: "The Evolution of Rugby in Kenya: From Colonial Times to Modern Day",
      excerpt:
        "A historical journey through Kenya's rugby heritage, from its colonial introduction to becoming a powerhouse in sevens rugby.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Dr. Peter Waweru",
      date: "March 3, 2024",
      readTime: "10 min read",
      category: "Rugby History",
    },
    {
      id: 7,
      title: "Fan Spotlight: Meet the Kenyan Rugby Supporters in London",
      excerpt:
        "Get to know the passionate Kenyan rugby fans living in London who never miss a match and proudly wear their heritage.",
      image: "/placeholder.svg?height=300&width=400",
      author: "Grace Wanjiku",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Fan Stories",
    },
    {
      id: 8,
      title: "Behind the Scenes: How We Create Our Rugby Scarves",
      excerpt:
        "Take a look at our design and manufacturing process, from initial concept sketches to the final premium product.",
      image: "/placeholder.svg?height=300&width=400",
      author: "David Kipchoge",
      date: "February 25, 2024",
      readTime: "8 min read",
      category: "Behind the Scenes",
    },
    {
      id: 9,
      title: "Upcoming Rugby Fixtures: What to Watch in 2024",
      excerpt: "Your complete guide to the most important rugby matches and tournaments featuring Kenya in 2024.",
      image: "/placeholder.svg?height=300&width=400",
      author: "James Mwangi",
      date: "February 22, 2024",
      readTime: "5 min read",
      category: "Rugby News",
    },
  ]

  const categories = [
    "All Posts",
    "Rugby News",
    "Design Stories",
    "Fan Stories",
    "Rugby Analysis",
    "Behind the Scenes",
    "Rugby History",
    "Sustainability",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Rugby Stories & Culture</h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the latest in Kenyan rugby, cultural stories, fan experiences, and behind-the-scenes insights
              from SportsGeekScarves
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2 bg-transparent">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "All Posts" ? "default" : "secondary"}
                  className={`whitespace-nowrap cursor-pointer hover:bg-green-600 hover:text-white ${
                    category === "All Posts" ? "bg-green-600 text-white" : ""
                  }`}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Badge className="bg-red-600 hover:bg-red-700 mb-4">Featured Story</Badge>
            <h2 className="text-2xl font-bold">Latest Highlights</h2>
          </div>

          <Card className="overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-green-600 hover:bg-green-700">{featuredPost.category}</Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold leading-tight">{featuredPost.title}</h3>

                  <p className="text-gray-600 text-lg leading-relaxed">{featuredPost.excerpt}</p>

                  <Link href={`/blog/${featuredPost.id}`}>
                    <Button className="bg-green-600 hover:bg-green-700 group">
                      Read Full Story
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-600 text-lg">
              Stay updated with the latest news, stories, and insights from the world of Kenyan rugby
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card
                key={post.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-black/80 text-white hover:bg-black">{post.category}</Badge>
                </div>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-semibold leading-tight group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <Link href={`/blog/${post.id}`}>
                      <Button variant="ghost" className="p-0 h-auto text-green-600 hover:text-green-700 group">
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold">Never Miss a Story</h2>
            <p className="text-xl text-white/90">
              Subscribe to our newsletter for the latest rugby news, cultural stories, and exclusive content
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-black focus:ring-2 focus:ring-white focus:outline-none"
              />
              <Button className="bg-black hover:bg-gray-800 px-8">Subscribe</Button>
            </div>

            <p className="text-sm text-white/80">Join 5,000+ rugby fans who get our weekly newsletter</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
