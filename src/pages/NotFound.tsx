import { H1 } from "@/components/common/elements/H1"
import { P } from "@/components/common/elements/P"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

export default function NotFound() {
  return (
    <Section className="my-20 flex flex-col items-center space-y-8">
      <H1>404 Not (Yet) Found</H1>
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
