import { FeatureCard } from "@/components/FeatureCard"
import { A } from "@/components/typography/A"
import { H1 } from "@/components/typography/H1"
import { P } from "@/components/typography/P"
import { Button } from "@/components/ui/button"
import { Atom, Box, CircleAlert, Database, DollarSign, Shield } from "lucide-react"

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
    <section className="container mx-auto flex flex-col items-center gap-3 px-5 py-10">
      <Button variant="secondary" className="rounded-full">
        Follow along on Twitter
      </Button>
      <H1>An example app built using Next.js 13 server components.</H1>
      <P>
        I'm building a web app with Next.js 13 and open sourcing everything. <br />
        Follow along as we figure this out together.
      </P>
      <div className="mt-3 flex gap-3">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          GitHub
        </Button>
      </div>
    </section>
  )
}

const features = [
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
    <section className="container mx-auto mt-20 px-5">
      <H1>Features</H1>
      <P>
        This project is an experiment to see how a modern app, with features like auth, <br />
        subscriptions, API routes, and static pages would work in Next.js 13 app dir.
      </P>
      <div className="lg:grid-cols-3als mt-8 grid gap-6 sm:grid-cols-2">
        {features.map((f) => (
          <FeatureCard key={f.title} Icon={f.Icon} title={f.title} description={f.description} />
        ))}
      </div>
      <P className="mt-5">
        Taxonomy also includes a blog and a full-featured documentation site built using
        Contentlayer and MDX.
      </P>
    </section>
  )
}

function LicenseSection() {
  return (
    <section className="container mx-auto my-20 px-5">
      <H1>Proudly Open Source</H1>
      <P>
        Taxonomy is open source and powered by open source software. <br />
        The code is available on{" "}
        <A href="https://www.github.com" target="_blank">
          GitHub
        </A>
      </P>
    </section>
  )
}
