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
        "text-base whitespace-pre-line",
        article
          ? ["text-foreground mb-3 max-w-none text-left"]
          : ["text-muted-foreground mx-auto max-w-[700px] text-center"],
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
