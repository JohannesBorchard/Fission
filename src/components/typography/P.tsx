import type { PropsWithChildren } from "react"
export function P({
  children,
  className = ""
}: PropsWithChildren<{
  className?: string
}>) {
  return <p className={"text-muted-foreground mt-2 text-center text-xl " + className}>{children}</p>
}
