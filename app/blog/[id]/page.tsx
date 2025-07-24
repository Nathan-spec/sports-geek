import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BlogPostPage({ params }: { params: { id: string } }) {
  // This would typically fetch the blog post data based on the ID
  const post = {
    id: params.id,
    title: "Kenya Sevens: The Road to Paris Olympics 2024",
    content: `
      <p>The Kenya Sevens team, affectionately known as the Shujaa, has been on an incredible journey as they prepare for the Paris Olympics 2024. This journey represents not just athletic excellence, but the hopes and dreams of an entire nation.</p>
      
      <h2>Training Camp Excellence</h2>
      <p>Based at the Kenya Rugby Union's high-performance center in Nairobi, the team has been undergoing intensive training sessions that combine traditional rugby skills with cutting-edge sports science. The altitude advantage of training in Nairobi has proven invaluable for building the cardiovascular endurance needed for the fast-paced sevens format.</p>
      
      <h2>Key Players to Watch</h2>
      <p>Captain Nelson Oyoo continues to lead by example, bringing years of experience and tactical awareness to the team. Meanwhile, young talents like Alvin Otieno and John Okoth have been making waves with their explosive pace and game-changing abilities.</p>
      
      <h2>The Cultural Connection</h2>
      <p>What makes the Shujaa special isn't just their rugby skills—it's their connection to Kenyan culture and identity. Each time they step onto the field, they carry with them the spirit of harambee (pulling together) that defines our nation.</p>
      
      <p>As they prepare for Paris, the team knows they're not just representing themselves, but millions of Kenyans around the world who will be cheering them on, many wearing their SportsGeekScarves with pride.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    author: "James Mwangi",
    date: "March 15, 2024",
    readTime: "8 min read",
    category: "Rugby News",
    tags: ["Kenya Sevens", "Olympics", "Shujaa", "Rugby"],
  }

  const relatedPosts = [
    {
      id: 2,
      title: "The Story Behind Our Maasai Warrior Design",
      image: "/placeholder.svg?height=200&width=300",
      category: "Design Stories",
      date: "March 12, 2024",
    },
    {
      id: 3,
      title: "Rugby Sevens World Series: Kenya's Performance Analysis",
      image: "/placeholder.svg?height=200&width=300",
      category: "Rugby Analysis",
      date: "March 10, 2024",
    },
    {
      id: 4,
      title: "Connecting the Diaspora: Rugby Scarves as Cultural Bridges",
      image: "/placeholder.svg?height=200&width=300",
      category: "Fan Stories",
      date: "March 8, 2024",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Back Navigation */}
      <section className="py-6 border-b">
        <div className="container mx-auto px-4">
          <Link href="/blog">
            <Button variant="ghost" className="flex items-center gap-2 text-green-600 hover:text-green-700">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge className="bg-green-600 hover:bg-green-700">{post.category}</Badge>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-6 text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Image
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              width={800}
              height={400}
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="space-y-6 text-gray-700 leading-relaxed"
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t">
              <h3 className="text-lg font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-green-100">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <Card className="mt-12 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <Image
                    src="/placeholder.svg?height=80&width=80"
                    alt={post.author}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                    <p className="text-gray-600 mb-4">
                      Founder & CEO of SportsGeekScarves, former rugby player turned entrepreneur, passionate about
                      connecting Kenyan rugby culture globally.
                    </p>
                    <div className="flex gap-4">
                      <Button variant="outline" size="sm" className="bg-transparent">
                        Follow
                      </Button>
                      <Button variant="outline" size="sm" className="bg-transparent">
                        More Articles
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Card
                  key={relatedPost.id}
                  className="group hover:shadow-xl transition-shadow border-0 shadow-lg bg-white"
                >
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-black/80 text-white hover:bg-black">
                      {relatedPost.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="text-sm text-gray-500">{relatedPost.date}</div>
                      <h3 className="text-lg font-semibold leading-tight group-hover:text-green-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="ghost" className="p-0 h-auto text-green-600 hover:text-green-700">
                          Read Article →
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <MessageCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-bold">Join the Discussion</h2>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <p className="text-gray-600 mb-6">
                  Share your thoughts about this article and connect with other rugby fans
                </p>
                <Button className="bg-green-600 hover:bg-green-700">Start Discussion</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
