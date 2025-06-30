import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface PProps {
  article?: boolean
  className?: string
}

export function P({ children, article, className = "", ...props }: PropsWithChildren<PProps>) {
  return (
    <p
      className={clsx(
        "whitespace-pre-line",
        article
          ? ["text-foreground mb-5 max-w-prose text-left font-serif text-xl leading-[1.7]"]
          : ["text-muted-foreground mx-auto max-w-[700px] text-center text-base"],
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
