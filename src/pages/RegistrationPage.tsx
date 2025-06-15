import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"

export function RegistrationPage() {
  return (
    <Section>
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Get Started
      </h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Create a free account to write, rate and comment blog posts.
      </p>
      <div className="mx-auto flex max-w-lg flex-col gap-6">
        <Card>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="password" className="h-[20px]">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a strong password"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="w-full">
                    Create Free Account
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Already have an account?{" "}
                <Link to="/login" className="underline underline-offset-4">
                  Login
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
