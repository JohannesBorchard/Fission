import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface H2Props {
  article?: boolean
  className?: string
}

export function H2({ children, article, className, ...props }: PropsWithChildren<H2Props>) {
  return (
    <h2
      className={clsx(
        "mb-3 scroll-m-20 leading-tight tracking-tight text-balance",
        article
          ? ["text-left text-2xl font-semibold", "sm:text-3xl sm:leading-tight", "lg:text-4xl"]
          : ["text-center text-3xl font-bold", "sm:text-4xl", "lg:text-5xl"],
        className
      )}
      {...props}
    >
      {children}
    </h2>
  )
}
