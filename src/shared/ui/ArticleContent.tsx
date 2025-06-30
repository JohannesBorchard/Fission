import type { PropsWithChildren } from "react"

export function ArticleContent({ children }: PropsWithChildren) {
  return <article className="mx-auto max-w-prose">{children}</article>
}
