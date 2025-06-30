import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface H1Props {
  article?: boolean
}

export function H1({ children, article }: PropsWithChildren<H1Props>) {
  return (
    <h1
      className={clsx(
        "mb-3 scroll-m-20 leading-tight tracking-tight text-balance",
        article
          ? ["text-left text-3xl font-semibold", "sm:text-4xl sm:leading-tight", "lg:text-5xl"]
          : ["text-center text-4xl font-bold", "sm:text-5xl sm:leading-16", "lg:text-6xl"]
      )}
    >
      {children}
    </h1>
  )
}
