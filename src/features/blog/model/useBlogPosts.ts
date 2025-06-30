import { strapiApi, type BlogPost } from "@/shared/api/strapiClient"
import { useEffect, useState } from "react"

export function useBlogPosts() {
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

  return { posts, loading, error }
}
