import { Button } from "@/shared/ui/Button"
import { Card, CardContent } from "@/shared/ui/Card"
import { Input } from "@/shared/ui/Input"
import { Label } from "@/shared/ui/Label"
import { useState } from "react"
import { Link } from "react-router"
import { toast } from "sonner"
import { useRegistration } from "../model/useRegistration"
import { authSchema } from "../model/validation"

export function RegistrationForm() {
  const { register, loading } = useRegistration()

  // save values in case of error
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  async function handleRegistration(formData: FormData) {
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

    const success = await register(result.data)

    if (success) {
      setFormData({ email: "", password: "" })
    }
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-6">
      <Card>
        <CardContent>
          <form action={handleRegistration}>
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
                  onChange={(e) => {
                    setFormData((prev) => ({ ...prev, email: e.target.value }))
                  }}
                />
              </div>
              <div className="grid gap-3">
                <Label className="h-5" htmlFor="password">
                  Password
                </Label>
                <Input
                  required
                  disabled={loading}
                  id="password"
                  minLength={8}
                  name="password"
                  placeholder="Create a strong password (min. 8 characters)"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData((prev) => ({ ...prev, password: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button className="w-full" disabled={loading} type="submit">
                  {loading ? "Creating Account..." : "Create Free Account"}
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link className="underline underline-offset-4" to="/login">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
