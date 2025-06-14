import type { PropsWithChildren } from "react"
export function P({
  children,
  className = ""
}: PropsWithChildren<{
  className?: string
}>) {
  return (
    <p
      className={
        "text-muted-foreground mx-auto max-w-[700px] text-center text-xl whitespace-pre-line " +
        className
      }
    >
      {children}
    </p>
  )
}
