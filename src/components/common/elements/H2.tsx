import type { PropsWithChildren } from "react"

export function H2({ children }: PropsWithChildren<{}>) {
  return (
    <h2 className="mb-3 scroll-m-20 text-center text-3xl leading-tight font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
      {children}
    </h2>
  )
}
