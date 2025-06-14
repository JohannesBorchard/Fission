import { FeatureCard } from "@/components/common/FeatureCard"
import { A } from "@/components/common/typography/A"
import { H1 } from "@/components/common/typography/H1"
import { P } from "@/components/common/typography/P"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Atom, Box, CircleAlert, Database, DollarSign, Shield, type LucideIcon } from "lucide-react"

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
    /* className="container mx-auto my-20 px-5" */
    <Section className="mt-10 mb-20 flex flex-col items-center space-y-8">
      <Button variant="secondary" className="mb-3 rounded-full">
        Follow along on Twitter
      </Button>
      <H1>An example app built using Next.js 13 server components.</H1>
      <P className="">
        I'm building a web app with Next.js 13 and open sourcing everything. Follow along as we
        figure this out together.
      </P>
      <div className="flex gap-3">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          GitHub
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
    Icon: CircleAlert,
    title: "Next.js 13",
    description: "App dir, Routing, Layouts, Loading UI und API-Routen."
  },
  {
    Icon: Atom,
    title: "React 18",
    description: "Server- und Client-Components, Hooks, Streaming."
  },
  {
    Icon: Database,
    title: "Database",
    description: "ORM mit Prisma, deployed auf PlanetScale."
  },
  {
    Icon: Box,
    title: "Components",
    description: "UI-Components mit Radix UI, gestylt via Tailwind CSS."
  },
  {
    Icon: Shield,
    title: "Authentication",
    description: "Auth via NextAuth.js und Edge Middleware."
  },
  {
    Icon: DollarSign,
    title: "Subscriptions",
    description: "Free & paid Subscriptions via Stripe."
  }
]

function FeaturesSection() {
  return (
    <Section className="my-20 space-y-8">
      <H1>Features</H1>
      <P>
        This project is an experiment to see how a modern app, with features like auth,
        subscriptions, API routes, and static pages would work in Next.js 13 app dir.
      </P>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} Icon={f.Icon} title={f.title} description={f.description} />
        ))}
      </div>
      <P>
        Taxonomy also includes a blog and a full-featured documentation site built using
        Contentlayer and MDX.
      </P>
    </Section>
  )
}

function LicenseSection() {
  return (
    <Section className="my-20">
      <H1>Proudly Open Source</H1>
      <P>
        Taxonomy is open source and powered by open source software. The code is available on{" "}
        <A href="https://www.github.com" target="_blank">
          GitHub
        </A>
      </P>
    </Section>
  )
}
