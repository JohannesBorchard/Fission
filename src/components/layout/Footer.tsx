import { Zap } from "lucide-react"
import { A } from "../common/elements/A"
import { ModeToggle } from "../ui/ModeToggle"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-4 px-8 py-5 sm:flex-row sm:justify-between sm:space-y-0">
      <div className="text-center sm:text-left">
        <Zap className="text-primary/90 mb-1 inline size-6" />
        <span className="text-primary ml-2">
          Built by{" "}
          <A href="https://github.com/JohannesBorchard" target="_blank">
            Johannes Borchard
          </A>
          . Hosted by Vercel. Initial layout inspiration from{" "}
          <A href="https://tx.shadcn.com/" target="_blank">
            Taxonomy
          </A>
          .
        </span>
      </div>
      <ModeToggle />
    </footer>
  )
}
