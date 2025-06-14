import type { PropsWithChildren } from "react"

export function H1({ children }: PropsWithChildren<{}>) {
  return (
    <h1 className="mb-3 scroll-m-20 text-center text-6xl leading-16 font-bold tracking-tight text-balance">
      {children}
    </h1>
  )
}
