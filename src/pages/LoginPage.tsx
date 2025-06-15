import Section from "@/components/layout/Section"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router"

export function LoginPage() {
  return (
    <Section>
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">Login</h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Enter your credentials to write, rate and comment blog posts.
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
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      to="forgot-password"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                <div className="flex flex-col gap-3">
                  <Button type="submit" className="bg-foreground text-background w-full">
                    Login
                  </Button>
                </div>
              </div>
              <div className="mt-4 text-center text-sm">
                Don't have an account yet?{" "}
                <Link to="/registration" className="underline underline-offset-4">
                  Register
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
