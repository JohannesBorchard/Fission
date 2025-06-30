import { useBlogPost } from "@/features/blog/model/useBlogPost"
import { formatDate } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/Button"
import Section from "@/shared/ui/Section"
import { H1 } from "@/shared/ui/typography/H1"
import { mdComponents } from "@/shared/ui/typography/mdComponents"
import { PLead } from "@/shared/ui/typography/PLead"
import { Dot } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { useParams } from "react-router"

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const { post, loading, error } = useBlogPost(slug)

  if (loading) {
    return (
      <Section>
        <div className="mx-auto max-w-3xl">
          <div className="text-center">Loading post...</div>
        </div>
      </Section>
    )
  }

  if (error) {
    return (
      <Section>
        <div className="mx-auto max-w-3xl">
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
      <Section className="max-w-3xl">
        <H1 article>{post.title}</H1>
        <PLead article className="mt-2">
          {post.excerpt}
        </PLead>
        <div className="text-muted-foreground mt-4 flex max-w-none gap-1 text-left text-base">
          <p>{post.author_name}</p>
          <Dot className="text-muted-foreground/30" />
          <p>{formatDate(post.createdAt, "long")}</p>
        </div>
        <div className="mt-6">
          <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
        </div>
      </Section>
    )
  }
}
