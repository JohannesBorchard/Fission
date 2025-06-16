import { Button } from "@/components/atoms/Button"
import { Input } from "@/components/atoms/Input"
import { Label } from "@/components/atoms/Label"
import Section from "@/components/layout/Section"
import { Card, CardContent } from "@/components/molecules/Card"
import { supabase } from "@/services/supabaseClient"
import { Link, useNavigate } from "react-router"
import { toast } from "sonner"

export function LoginPage() {
  const navigate = useNavigate()

  async function handleLogin(formData: FormData) {
    try {
      const email = formData.get("email")
      const password = formData.get("password")
      if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Please enter valid email and password.")
      }

      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw new Error(error.message)

      toast.success("Login successful!", { id: "login-success" })

      navigate("/dashboard/create", { replace: true })
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error has occurred"
      toast.error(message)
    }
  }

  return (
    <Section>
      <h2 className="mb-6 text-center text-4xl font-bold tracking-tight sm:text-5xl">Login</h2>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center text-lg">
        Enter your credentials to write, rate and comment blog posts.
      </p>
      <div className="mx-auto flex max-w-lg flex-col gap-6">
        <Card>
          <CardContent>
            <form action={handleLogin}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                  />
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
                  <Input id="password" name="password" type="password" required />
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
