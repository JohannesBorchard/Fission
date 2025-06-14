import { Command } from "lucide-react"
import { ModeToggle } from "./ModeToggle"

export default function Footer() {
  return (
    <footer className="flex items-center justify-between px-8 py-5">
      <div>
        <Command className="text-primary/90 inline size-6" />
        <span className="text-primary ml-2">
          Built by Johannes. Hosted on Vercel. The source code is available on GitHub.
        </span>
      </div>
      <ModeToggle />
    </footer>
  )
}
