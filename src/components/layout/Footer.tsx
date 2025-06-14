import { Zap } from "lucide-react"
import { A } from "../common/elements/A"
import { ModeToggle } from "../ui/ModeToggle"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-4 px-8 py-5 md:flex-row md:justify-between md:space-y-0">
      <div className="text-center md:text-left">
        <Zap className="text-muted-foreground mb-1 inline size-6" />
        <span className="text-muted-foreground ml-2">
          Built by{" "}
          <A href="https://github.com/JohannesBorchard" target="_blank" className="text-primary/80">
            Johannes Borchard
          </A>
          . Hosted by Vercel. Initial layout inspiration from{" "}
          <A href="https://tx.shadcn.com/" target="_blank" className="text-primary/80">
            Taxonomy
          </A>
          .
        </span>
      </div>
      <ModeToggle />
    </footer>
  )
}
