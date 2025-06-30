import { cn } from "@/shared/lib/utils" // falls du clsx o.Ä. nutzt
import type { PropsWithChildren } from "react"

export function Code({
  children,
  className,
  ...props
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <code
      className={cn(
        "bg-muted text-secondary-foreground rounded px-[0.25em] py-[0.1em] font-mono text-[0.87em]",
        className
      )}
      {...props}
    >
      {children}
    </code>
  )
}
