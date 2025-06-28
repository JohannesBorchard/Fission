import { Badge } from "@/shared/ui/Badge"
import { Button } from "@/shared/ui/Button"
import Section from "@/shared/ui/Section"
import { Bookmark, CalendarDays, Eye, MessageCircle, MoreHorizontal } from "lucide-react"
import { Link } from "react-router"

/* Placeholder Markup for Strapi Blog Features */

export default function FeedPage() {
  const posts = [
    {
      id: 4,
      title: "What’s New in React 19",
      subtitle:
        "From useOptimistic to new form actions – here’s what matters most in the latest React release.",
      author: "Sophia Wang",
      date: "May 5",
      views: "9.2K",
      comments: 204
    },
    {
      id: 1,
      title: "AI killed my coding brain but I’m rebuilding it",
      subtitle:
        "We sprinted into the AI age of autocomplete IDEs, now we’re waking up wondering why we forgot how to write a for-loop.",
      author: "Devlink Tips",
      date: "May 11",
      views: "3.7K",
      comments: 159
    },
    {
      id: 5,
      title: "When to Use useCallback (and When Not To)",
      subtitle:
        "Spoiler: You’re probably overusing it. Here’s a practical guide to using it only when needed.",
      author: "Felix Weber",
      date: "Apr 27",
      views: "5.1K",
      comments: 112
    },
    {
      id: 6,
      title: "Building Multi-Step Forms in React with Zod",
      subtitle:
        "Validation that doesn't suck – learn how to build reliable multi-step flows with React Hook Form and Zod.",
      author: "Lena Hoffman",
      date: "Apr 22",
      views: "6.8K",
      comments: 98
    },
    {
      id: 3,
      title: "Coding vs VIBE Coding",
      subtitle: "Vibe Coding just replaced your job",
      author: "Adarsh Gupta",
      date: "Mar 15",
      views: "3.4K",
      comments: 137
    },
    {
      id: 7,
      title: "Handling Race Conditions in React Forms",
      subtitle: "What happens when users spam your submit button? Let’s fix it the right way.",
      author: "Jules Moreau",
      date: "Mar 12",
      views: "4.5K",
      comments: 56
    },
    {
      id: 2,
      title: "ChatGPT Is Poisoning Your Brain...",
      subtitle: "Here's how to stop it before it’s too late.",
      author: "Jordan Gibbs",
      date: "Apr 30",
      views: "18.7K",
      comments: 865
    },
    {
      id: 8,
      title: "Why I Moved from Next.js to Remix",
      subtitle: "The DX, the nested routes, and why Remix feels closer to the web again.",
      author: "Kevin Tran",
      date: "Feb 28",
      views: "7.9K",
      comments: 221
    }
  ]

  return (
    <Section>
      <Badge variant="outline" size="lg" className="mx-auto mb-5 block">
        Todo
      </Badge>
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

        {posts.map((post) => (
          <div key={post.id} className="border-b pb-8 last:border-none last:pb-0">
            <div className="text-muted-foreground mb-2 text-sm font-medium">{post.author}</div>
            <h3 className="text-foreground mb-1 cursor-pointer text-xl leading-tight font-semibold tracking-tight underline-offset-4 hover:underline">
              {post.title}
            </h3>
            <p className="text-muted-foreground mb-3 text-sm">{post.subtitle}</p>
            <div className="text-muted-foreground flex items-center justify-between text-xs">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <CalendarDays className="size-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="size-4" />
                  {post.views}
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="size-4" />
                  {post.comments}
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Bookmark className="hover:text-foreground size-4 cursor-pointer" />
                <MoreHorizontal className="hover:text-foreground size-4 cursor-pointer" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
