import { RegistrationForm } from "@/features/auth/ui/RegistrationForm"
import Section from "@/shared/ui/Section"

export function RegistrationPage() {
  return (
    <Section>
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Get Started
      </h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Create a free account to write, rate and comment blog posts.
      </p>
      <RegistrationForm />
    </Section>
  )
}
