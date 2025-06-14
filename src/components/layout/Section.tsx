import type { PropsWithChildren } from "react"

export default function Section({
  children,
  className = ""
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className={`container mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
  )
}
