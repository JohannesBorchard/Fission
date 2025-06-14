import { H1 } from "@/components/typography/H1"
import { P } from "@/components/typography/P"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  )
}

function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-3 px-5 py-10">
      <Button variant="secondary" className="rounded-full">
        Follow along on Twitter
      </Button>
      <H1>An example app built using Next.js 13 server components.</H1>
      <P>
        I'm building a web app with Next.js 13 and open sourcing everything.
        <br />
        Follow along as we figure this out together.
      </P>
      <div className="flex gap-3">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          GitHub
        </Button>
      </div>
    </section>
  )
}

function FeaturesSection() {
  return (
    <section className="mt-20">
      <H1>Features</H1>
      <P>
        This project is an experiment to see how a modern app, with features like auth,
        <br />
        subscriptions, API routes, and static pages would work in Next.js 13 app dir.
      </P>
    </section>
  )
}
