import type { PropsWithChildren } from "react"

export function P({ children }: PropsWithChildren<{}>) {
  return (
    <p className="text-muted-foreground mb-3 text-center text-xl">{children}</p>
  )
}
