import { LoginForm } from "@/features/auth/ui/LoginForm"
import Section from "@/shared/ui/Section"

export function LoginPage() {
  return (
    <Section>
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">Login</h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Enter your credentials to write, rate and comment blog posts.
      </p>
      <LoginForm />
    </Section>
  )
}
