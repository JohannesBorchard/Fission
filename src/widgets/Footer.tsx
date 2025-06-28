import { ModeToggle } from "@/features/theme-toggle/ui/ModeToggle"
import { A } from "@/shared/ui/typography/A"
import { Zap } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-15 flex flex-col items-center space-y-4 px-8 py-5 sm:mt-20 md:mt-25 md:flex-row md:justify-between md:space-y-0">
      <div className="text-center md:text-left">
        <Zap className="text-muted-foreground mb-1 inline size-6" />
        <span className="text-muted-foreground ml-2">
          Built by{" "}
          <A href="https://github.com/JohannesBorchard" target="_blank">
            Johannes Borchard
          </A>
          . Hosted by Vercel.
        </span>
      </div>
      <ModeToggle />
    </footer>
  )
}
