import { notFound } from "next/navigation"; // or 'next/router' in Pages Router
import Image from "next/image";
import { blogPosts } from "@/lib/data"; // wherever your blogPosts array lives
import { Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = blogPosts.find((p) => p.id.toString() === params.id);

  if (!post) return notFound();

  return (
    <div className="bg-white min-h-screen">
      <Header />

      {/* Hero Image */}
      <section className="relative h-96 w-full overflow-hidden">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-bold text-white max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Post Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center gap-6 text-sm text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {post.date}
            </div>
            <span>{post.readTime}</span>
          </div>

          <div className="prose lg:prose-lg max-w-none">
            <p>{post.content}</p>
          </div>

          <div className="mt-10">
            <Button variant="outline" href="/blog">
              ← Back to Blog
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
