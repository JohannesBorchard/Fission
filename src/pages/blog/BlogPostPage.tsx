import { strapiApi, type BlogPost } from "@/shared/api/strapiClient"
import { formatDate } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/Button"
import Section from "@/shared/ui/Section"
import { H1 } from "@/shared/ui/typography/H1"
import { H2 } from "@/shared/ui/typography/H2"
import { P } from "@/shared/ui/typography/P"
import { useEffect, useState } from "react"
import ReactMarkdown from "react-markdown"
import { useParams } from "react-router"

export default function BlogPostPage() {
  const params = useParams<{ slug: string }>()
  const slug = params.slug
  const [post, setPost] = useState<BlogPost>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const components = {
    h1: H1,
    h2: H2,
    p: P
    // ...was noch?
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        if (!slug) throw new Error("Invalid link")

        const res = await strapiApi.getBlogPost(slug)
        if (!res) throw new Error("Post not found")
        setPost(res)
      } catch (error) {
        setError(error instanceof Error ? error.message : "Failed to fetch post")
        console.error("Failed to fetch post:", error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [slug])

  if (loading) {
    return (
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="text-center">Loading post...</div>
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
  if (post) {
    return (
      <Section>
        <P>{post.author_name}</P>
        <H1>{post.title}</H1>
        <P>{formatDate(post.createdAt)}</P>
        <P>{post.excerpt}</P>
        <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
      </Section>
    )
  }
}
