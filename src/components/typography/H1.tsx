import type { PropsWithChildren } from "react"

export function H1({ children }: PropsWithChildren<{}>) {
  return (
    <h1 className="mb-3 scroll-m-20 text-center text-4xl leading-16 font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
      {children}
    </h1>
  )
}
