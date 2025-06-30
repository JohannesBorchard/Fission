import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface LeadProps {
  article?: boolean
  className?: string
}

export function PLead({
  children,
  article,
  className = "",
  ...props
}: PropsWithChildren<LeadProps>) {
  return (
    <p
      className={clsx(
        "text-muted-foreground text-xl leading-relaxed font-normal",
        article ? ["mb-6 max-w-prose text-left"] : ["mx-auto mb-5 max-w-[700px] text-center"],
        className
      )}
      {...props}
    >
      {children}
    </p>
  )
}
