import { Button } from "@/shared/ui/Button"
import { Card, CardContent } from "@/shared/ui/Card"
import { Input } from "@/shared/ui/Input"
import { Label } from "@/shared/ui/Label"
import { Link } from "react-router"
import { toast } from "sonner"
import { useLogin } from "../model/useLogin"
import { loginSchema } from "../model/validation"

export function LoginForm() {
  const { login, loading } = useLogin()

  async function handleLogin(formData: FormData) {
    const rawData = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    const result = loginSchema.safeParse(rawData)
    if (!result.success) {
      const firstError = result.error.errors[0]
      toast.error(firstError.message)
      return
    }

    await login(result.data)
  }

  return (
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
                  disabled={loading}
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
                <Input id="password" name="password" type="password" required disabled={loading} />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  type="submit"
                  className="bg-foreground text-background w-full"
                  disabled={loading}
                >
                  {loading ? "Logging in..." : "Login"}
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
  )
}
