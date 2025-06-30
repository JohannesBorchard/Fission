import { strapiApi, type BlogPost } from "@/shared/api/strapiClient"
import { formatDate } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/Button"
import Section from "@/shared/ui/Section"
import { H1 } from "@/shared/ui/typography/H1"
import { H2 } from "@/shared/ui/typography/H2"
import { P } from "@/shared/ui/typography/P"
import { PLead } from "@/shared/ui/typography/PLead"
import { Strong } from "@/shared/ui/typography/Strong"
import { UL } from "@/shared/ui/typography/UL"
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
    h1: (props: any) => <H1 article {...props} />,
    h2: (props: any) => <H2 article {...props} />,
    p: (props: any) => <P article {...props} />,
    strong: (props: any) => <Strong article {...props} />,

    ul: (props: any) => <UL article {...props} />,
    li: (props: any) => <li className="mt-2" {...props} />
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
      <Section className="max-w-4xl">
        <H1 article>{post.title}</H1>
        <PLead article className="mt-2">
          {post.excerpt}
        </PLead>
        <div className="text-muted-foreground mt-4 flex max-w-none gap-2 text-left text-base">
          <p>{post.author_name}</p>
          <p>{formatDate(post.createdAt)}</p>
        </div>
        <div className="mt-6">
          <ReactMarkdown components={components}>{post.content}</ReactMarkdown>
        </div>
      </Section>
    )
  }
}
