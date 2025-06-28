import { strapiApi, type BlogPost } from "@/shared/api/strapiClient"
import { formatDate } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/Button"
import Section from "@/shared/ui/Section"
import { Bookmark, CalendarDays, Eye, MessageCircle, MoreHorizontal } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function FeedPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const data = await strapiApi.getBlogPosts()
        setPosts(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch posts")
        console.error("Failed to fetch posts:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const getExcerpt = (content: string, maxLength: number = 120) => {
    const plainText = content.replace(/\*\*(.*?)\*\*/g, "$1") // Remove bold markdown
    return plainText.length > maxLength ? plainText.substring(0, maxLength) + "..." : plainText
  }

  if (loading) {
    return (
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">Loading posts...</div>
        </div>
      </Section>
    )
  }

  if (error) {
    return (
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="text-center text-red-500">
            Error: {error}
            <br />
            <Button onClick={() => window.location.reload()} className="mt-4">
              Retry
            </Button>
          </div>
        </div>
      </Section>
    )
  }

  return (
    <Section>
      <h2 className="mb-10 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Community Feed
      </h2>
      <div className="mx-auto flex max-w-4xl flex-col space-y-10">
        <div className="mx-auto flex gap-3">
          <Button asChild size="lg" className="">
            <Link to="/dashboard/create">Create Blog Post</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/faq">Learn More</Link>
          </Button>
        </div>

        {posts.length === 0 ? (
          <div className="py-12 text-center">
            <h3 className="mb-2 text-xl font-semibold">No posts yet</h3>
            <p className="text-muted-foreground mb-4">Be the first to create a blog post!</p>
            <Button asChild>
              <Link to="/dashboard/create">Create First Post</Link>
            </Button>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border-b pb-8 last:border-none last:pb-0">
              <div className="text-muted-foreground mb-1 text-sm font-medium">{post.author_id}</div>
              <Link to={`/feed/${post.slug}`}>
                <h3 className="text-foreground mb-2 cursor-pointer text-xl leading-tight font-semibold tracking-tight underline-offset-4 hover:underline">
                  {post.title}
                </h3>
              </Link>
              <p className="text-muted-foreground mb-3 text-sm">
                {post.excerpt || getExcerpt(post.content)}
              </p>
              <div className="text-muted-foreground flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="size-4" />
                    {formatDate(post.createdAt)}
                  </div>
                  <div className="flex items-center gap-1">
                    <Eye className="size-4" />
                    {"0"}
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="size-4" />
                    {"0"}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Bookmark className="hover:text-foreground size-4 cursor-pointer" />
                  <MoreHorizontal className="hover:text-foreground size-4 cursor-pointer" />
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </Section>
  )
}
