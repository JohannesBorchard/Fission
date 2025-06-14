import type { PropsWithChildren } from "react"

export default function Section({
  children,
  className = "",
  id
}: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section id={id} className={`container mx-auto px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </section>
  )
}
