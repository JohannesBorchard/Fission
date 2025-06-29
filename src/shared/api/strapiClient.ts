const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"

export interface BlogPost {
  id: number
  documentId: string
  title: string
  slug: string
  content: string
  excerpt?: string
  published: boolean
  author_id: string
  author_name: string
  featured_image_url: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export const strapiApi = {
  async getBlogPosts(): Promise<BlogPost[]> {
    const response = await fetch(`${STRAPI_URL}/api/blog-posts?sort=createdAt:desc`)
    if (!response.ok) throw new Error("Failed to fetch posts")
    const data: StrapiResponse<BlogPost[]> = await response.json()
    return data.data
  },

  async getBlogPost(slug: string): Promise<BlogPost | null> {
    const response = await fetch(`${STRAPI_URL}/api/blog-posts?filters[slug][$eq]=${slug}`)
    if (!response.ok) throw new Error("Failed to fetch post")
    const data: StrapiResponse<BlogPost[]> = await response.json()
    return data.data[0] || null
  }
}
