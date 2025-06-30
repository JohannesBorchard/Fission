import type { BlogPost } from "@/shared/api/strapiClient"
import { formatDate } from "@/shared/lib/utils"
import { Bookmark, CalendarDays, Eye, MessageCircle, MoreHorizontal } from "lucide-react"
import { Link } from "react-router"

export function ArticleTeaser({ post }: { post: BlogPost }) {
  const { slug, title, excerpt, content, author_name, createdAt } = post

  const shortExcerpt =
    excerpt ||
    content
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .slice(0, 120)
      .trimEnd() + "..."

  return (
    <div className="pb-8 not-last:border-b last:pb-0">
      <Link to={`/feed/${slug}`}>
        <div className="text-muted-foreground mb-1 text-sm font-medium underline-offset-4 hover:underline">
          {author_name}
        </div>
      </Link>
      <Link to={`/feed/${slug}`}>
        <h3 className="text-foreground mb-2 cursor-pointer text-xl leading-tight font-semibold tracking-tight underline-offset-4 hover:underline">
          {title}
        </h3>
      </Link>
      <p className="text-muted-foreground mb-3 text-sm">{shortExcerpt}</p>
      <div className="text-muted-foreground flex items-center justify-between text-xs">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <CalendarDays className="size-4" />
            {formatDate(createdAt)}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="size-4" />0
          </div>
          <div className="flex items-center gap-1">
            <MessageCircle className="size-4" />0
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Bookmark className="hover:text-foreground size-4 cursor-pointer" />
          <MoreHorizontal className="hover:text-foreground size-4 cursor-pointer" />
        </div>
      </div>
    </div>
  )
}
