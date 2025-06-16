import type { PropsWithChildren } from "react"
export function A({
  href = "#",
  target = "_blank",
  children,
  className = ""
}: PropsWithChildren<{
  href: string
  target?: string
  className?: string
}>) {
  return (
    <a
      href={href}
      target={target}
      className={"hover:text-primary font-medium underline underline-offset-4 " + className}
    >
      {children}
    </a>
  )
}
