import { Button } from "@/shared/ui/Button"
import Section from "@/shared/ui/Section"
import { H1 } from "@/shared/ui/typography/H1"
import { P } from "@/shared/ui/typography/P"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

export default function NotFoundPage() {
  return (
    <Section className="my-20 flex flex-col items-center space-y-8">
      <H1>404 Page Not Found (Yet)</H1>
      <P>
        Our quantum state hasn’t decohered into this page yet. Respawn in a different universe or
        come back once the superposition has collapsed.
      </P>
      <Link to="/">
        <Button>
          <ArrowLeft className="mt-1" /> Back to Homepage
        </Button>
      </Link>
    </Section>
  )
}
