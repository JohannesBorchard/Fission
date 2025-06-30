import { Button } from "@/shared/ui/Button"
import { ErrorMessage } from "@/shared/ui/ErrorMessage"
import Section from "@/shared/ui/Section"
import { H2 } from "@/shared/ui/typography/H2"
import { type PropsWithChildren } from "react"
import { Link } from "react-router"
import { useBlogPosts } from "../model/useBlogPosts"
import { ArticleTeaser } from "../ui/ArticleTeaser"
import { ArticleTeaserSkeleton } from "../ui/ArticleTeaserSkeleton"

export default function FeedPage() {
  const { posts, loading, error } = useBlogPosts()

  if (loading) {
    return (
      <FeedLayout>
        <ArticleTeaserSkeleton />
        <ArticleTeaserSkeleton />
        <ArticleTeaserSkeleton />
      </FeedLayout>
    )
  }

  if (error) {
    return (
      <Section className="mx-auto max-w-4xl">
        <ErrorMessage error={error} />
      </Section>
    )
  }

  return (
    <FeedLayout>
      {posts.length > 0 ? (
        posts.map((post) => <ArticleTeaser key={post.id} post={post} />)
      ) : (
        <div className="py-12 text-center">
          <h3 className="mb-2 text-xl font-semibold">No posts yet</h3>
          <p className="text-muted-foreground mb-4">Be the first to create a blog post!</p>
        </div>
      )}
    </FeedLayout>
  )
}

function FeedLayout({ children }: PropsWithChildren) {
  return (
    <Section>
      <H2 className="mb-10">Community Feed</H2>
      <div className="mx-auto flex max-w-prose flex-col space-y-10">
        <div className="mx-auto flex gap-3">
          <Button asChild size="lg">
            <Link to="/dashboard/create">Create Blog Post</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/faq">Learn More</Link>
          </Button>
        </div>
        {children}
      </div>
    </Section>
  )
}
