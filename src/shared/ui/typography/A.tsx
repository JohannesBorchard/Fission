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
      className={
        "hover:text-primary focus-visible:border-ring focus-visible:ring-ring/50 rounded font-medium underline underline-offset-4 outline-none focus-visible:ring-[3px] " +
        className
      }
    >
      {children}
    </a>
  )
}
