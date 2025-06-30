import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface LeadProps {
  article?: boolean
  className?: string
}

export function PLead({ children, article, className = "" }: PropsWithChildren<LeadProps>) {
  return (
    <p
      className={clsx(
        "text-muted-foreground text-xl",
        article ? ["max-w-none text-left"] : ["mx-auto max-w-[700px] text-center"],
        className
      )}
    >
      {children}
    </p>
  )
}
