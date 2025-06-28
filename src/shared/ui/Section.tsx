import type { PropsWithChildren } from "react"

export default function Section({
  children,
  className = "",
  id
}: PropsWithChildren<{ className?: string; id?: string }>) {
  return (
    <section
      id={id}
      className={`container mx-auto mt-15 px-5 sm:mt-20 sm:px-6 md:mt-25 lg:px-8 ${className}`}
    >
      {children}
    </section>
  )
}
