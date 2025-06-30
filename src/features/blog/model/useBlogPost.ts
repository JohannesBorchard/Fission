import { strapiApi, type BlogPost } from "@/shared/api/strapiClient"
import { useEffect, useState } from "react"

export function useBlogPost(slug: string | undefined) {
  const [post, setPost] = useState<BlogPost>()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

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

  return { post, loading, error }
}
