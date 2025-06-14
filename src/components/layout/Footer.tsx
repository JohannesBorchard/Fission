import { Command } from "lucide-react"
import { ModeToggle } from "../ModeToggle"

export default function Footer() {
  return (
    <footer className="flex flex-col items-center space-y-4 px-8 py-5 sm:flex-row sm:justify-between sm:space-y-0">
      <div className="text-center sm:text-left">
        <Command className="text-primary/90 inline size-6" />
        <span className="text-primary ml-2">
          Built by Johannes. Hosted on Vercel. The source code is available on GitHub.
        </span>
      </div>
      <ModeToggle />
    </footer>
  )
}
