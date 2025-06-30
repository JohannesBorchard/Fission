import { useBlogPost } from "@/features/blog/model/useBlogPost"
import { formatDate } from "@/shared/lib/utils"
import { ArticleContent } from "@/shared/ui/ArticleContent"
import { ErrorMessage } from "@/shared/ui/ErrorMessage"
import Section from "@/shared/ui/Section"
import { H1 } from "@/shared/ui/typography/H1"
import { mdComponents } from "@/shared/ui/typography/mdComponents"
import { PLead } from "@/shared/ui/typography/PLead"
import { Dot } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { ArticleDetailSkeleton } from "../ui/ArticleDetailSkeleton"

export default function DetailPage() {
  const { post, loading, error } = useBlogPost()

  if (loading) {
    return (
      <Section>
        <ArticleContent>
          <ArticleDetailSkeleton />
        </ArticleContent>
      </Section>
    )
  }

  if (error) {
    return (
      <Section>
        <ErrorMessage error={error} />
      </Section>
    )
  }

  if (!post) return null

  if (post) {
    return (
      <Section>
        <ArticleContent>
          <H1 article>{post.title}</H1>
          <PLead article className="mt-2">
            {post.excerpt}
          </PLead>
          <div className="text-muted-foreground mt-4 flex max-w-prose flex-wrap gap-1 text-left text-base">
            <p>{post.author_name}</p>
            <Dot className="text-muted-foreground/30" />
            <p>{formatDate(post.createdAt, "long")}</p>
          </div>
          <div className="mt-6">
            <ReactMarkdown components={mdComponents}>{post.content}</ReactMarkdown>
          </div>
        </ArticleContent>
      </Section>
    )
  }
}
