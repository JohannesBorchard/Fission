import { FeatureCard } from "@/components/common/FeatureCard"
import { A } from "@/components/common/elements/A"
import { H1 } from "@/components/common/elements/H1"
import { H2 } from "@/components/common/elements/H2"
import { P } from "@/components/common/elements/P"
import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import {
  Atom,
  Box,
  CheckCircle2,
  DollarSign,
  Globe,
  MessageCircle,
  Shield,
  Signpost,
  Star,
  type LucideIcon
} from "lucide-react"
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
    <Section className="mt-0 flex flex-col items-center space-y-8">
      {/* <Button asChild variant="secondary" className="mb-3 rounded-full">
        <Link to="twitter">Follow along on Twitter</Link>
      </Button> */}
      <H1>An example app built using React 19 and shadcn.</H1>
      <P className="">
        The main goal is learning modern software architecture best practices. A focus lies on
        minimizing cognitive load from tailwindCSS without using @apply.
      </P>
      <div className="flex gap-3">
        <Button asChild size="lg">
          <Link to="/registration">Get Started</Link>
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
  done: boolean
}

const features: Feature[] = [
  {
    Icon: Atom,
    title: "React.ts",
    description: "Frontend architecture, routing, and layouts.",
    done: true
  },
  {
    Icon: Box,
    title: "shadcn/ui",
    description: "Accessible UI components using Radix and Tailwind CSS.",
    done: true
  },
  {
    Icon: Shield,
    title: "Supabase Auth",
    description: "User registration, login, and protected routes.",
    done: false
  },
  {
    Icon: MessageCircle,
    title: "Comments",
    description: "User comments stored in Supabase.",
    done: false
  },
  {
    Icon: Star,
    title: "Ratings",
    description: "User ratings stored in Supabase.",
    done: false
  },
  {
    Icon: Signpost,
    title: "Strapi CMS",
    description: "Blog content via REST or GraphQL from Strapi.",
    done: false
  },
  {
    Icon: DollarSign,
    title: "Stripe",
    description: "Payments handled via custom UI and webhooks.",
    done: false
  },
  {
    Icon: Globe,
    title: "i18n",
    description: "Multi-language support with dynamic content switching.",
    done: false
  },
  {
    Icon: CheckCircle2,
    title: "Unit Testing",
    description: "Component and logic tests for long-term reliability.",
    done: false
  }
]

function FeaturesSection() {
  return (
    <Section id="feature-section" className="space-y-8">
      <H2>Features</H2>
      <P>
        This project is an experiment to see how modern and scalable web development works with an
        increasing set of state of the art technologies.
      </P>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard
            key={f.title}
            Icon={f.Icon}
            title={f.title}
            description={f.description}
            done={f.done}
          />
        ))}
      </div>
      <P>Other features will be included here.</P>
    </Section>
  )
}

function LicenseSection() {
  return (
    <Section>
      <H2>Open Source License</H2>
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
