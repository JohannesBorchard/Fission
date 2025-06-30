import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface StrongProps {
  article?: boolean
  className?: string
}

export function Strong({ children, article, className = "" }: PropsWithChildren<StrongProps>) {
  return (
    <strong
      className={clsx(
        "font-semibold",
        article ? ["text-foreground"] : ["text-muted-foreground"],
        className
      )}
    >
      {children}
    </strong>
  )
}
