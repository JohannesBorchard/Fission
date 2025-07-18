import { Button } from "@/shared/ui/Button"
import { Card, CardContent } from "@/shared/ui/Card"
import { Input } from "@/shared/ui/Input"
import { Label } from "@/shared/ui/Label"
import { useState } from "react"
import { Link } from "react-router"
import { toast } from "sonner"
import { useLogin } from "../model/useLogin"
import { authSchema } from "../model/validation"

export function LoginForm() {
  const { login, loading } = useLogin()

  // save values in case of error
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  async function handleLogin(formData: FormData) {
    const rawData = {
      email: formData.get("email"),
      password: formData.get("password")
    }

    const result = authSchema.safeParse(rawData)
    if (!result.success) {
      const firstError = result.error.errors[0]
      toast.error(firstError.message)

      return
    }

    const success = await login(result.data)

    if (success) {
      setFormData({ email: "", password: "" })
    }
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
                  required
                  disabled={loading}
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    to="forgot-password"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  required
                  disabled={loading}
                  id="password"
                  minLength={8}
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  className="bg-foreground text-background w-full"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? "Logging in..." : "Login"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don't have an account yet?{" "}
              <Link className="underline underline-offset-4" to="/registration">
                Register
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
