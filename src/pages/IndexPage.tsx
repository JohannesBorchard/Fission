import { FeatureCard } from "@/components/common/FeatureCard"
import { A } from "@/components/common/elements/A"
import { H1 } from "@/components/common/elements/H1"
import { P } from "@/components/common/elements/P"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Atom, Box, Database, DollarSign, Shield, Signpost, type LucideIcon } from "lucide-react"
import { Link } from "react-router"

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <LicenseSection />
    </>
  )
}

function HeroSection() {
  return (
    <Section className="mt-10 mb-20 flex flex-col items-center space-y-8">
      <Button asChild variant="secondary" className="mb-3 rounded-full">
        <Link to="twitter">Follow along on Twitter</Link>
      </Button>
      <H1>An example app built using React 19 and shadcn.</H1>
      <P className="">
        The main goal is learning modern software architecture best practices. A focus lies on
        minimizing cognitive load from tailwindCSS without using @apply.
      </P>
      <div className="flex gap-3">
        <Button asChild size="lg">
          <a href="/#feature-section" target="_self">
            Get Started
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href="https://github.com/JohannesBorchard/fission" target="_blank">
            GitHub
          </a>
        </Button>
      </div>
    </Section>
  )
}

interface Feature {
  Icon: LucideIcon
  title: string
  description: string
}

const features: Feature[] = [
  {
    Icon: Atom,
    title: "React 19",
    description: "Client-Components, Hooks."
  },
  {
    Icon: Signpost,
    title: "React Router",
    description: "Declarative component-based routing."
  },
  {
    Icon: Box,
    title: "shadcn",
    description: "UI-Components based on Radix UI and tailwindCSS."
  },
  {
    Icon: Database,
    title: "Database",
    description: "TODO."
  },
  {
    Icon: Shield,
    title: "Authentication",
    description: "TODO."
  },
  {
    Icon: DollarSign,
    title: "Stripe",
    description: "TODO."
  }
]

function FeaturesSection() {
  return (
    <Section id="feature-section" className="my-20 space-y-8">
      <H1>Features</H1>
      <P>
        This project is an experiment to see how modern and scalable web development works with an
        increasing set of state of the art technologies.
      </P>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} Icon={f.Icon} title={f.title} description={f.description} />
        ))}
      </div>
      <P>Other features will be included here.</P>
    </Section>
  )
}

function LicenseSection() {
  return (
    <Section className="my-20">
      <H1>Open Source License</H1>
      <P>
        Fission is open source (GPL v3) and powered by open source software. The code will be
        available on{" "}
        <A href="https://github.com/JohannesBorchard" target="_blank">
          GitHub
        </A>
      </P>
    </Section>
  )
}
