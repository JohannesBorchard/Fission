import { clsx } from "clsx"
import type { PropsWithChildren } from "react"

interface ULProps {
  article?: boolean
  className?: string
}

export function UL({ children, article, className = "", ...props }: PropsWithChildren<ULProps>) {
  return (
    <ul
      className={clsx(
        "my-6 list-disc [&>li]:mt-2",
        article
          ? ["text-foreground ml-4 max-w-prose font-serif text-xl"]
          : ["text-muted-foreground mx-auto ml-6 max-w-[700px] text-base"],
        className
      )}
      {...props}
    >
      {children}
    </ul>
  )
}

export const MarkdownComponents = {
  ul: ({ children, ...props }: PropsWithChildren<{ className?: string }>) => (
    <UL article className={props.className}>
      {children}
    </UL>
  ),
  li: ({ children, ...props }: PropsWithChildren<{ className?: string }>) => (
    <li className={clsx("mt-2", props.className)} {...props}>
      {children}
    </li>
  )
}
