import { supabase } from "@/shared/api/supabaseClient"
import { Button } from "@/shared/ui/Button"
import { Card, CardContent } from "@/shared/ui/Card"
import { Input } from "@/shared/ui/Input"
import { Label } from "@/shared/ui/Label"
import { Link } from "react-router"
import { toast } from "sonner"

export function RegistrationForm() {
  async function handleRegistration(formData: FormData) {
    try {
      const email = formData.get("email")
      const password = formData.get("password")

      if (typeof email !== "string" || typeof password !== "string") {
        throw new Error("Please enter valid email and password.")
      }
      const { error } = await supabase.auth.signUp({ email, password })

      if (error) {
        throw new Error(error.message)
      }
      toast.success("Registration successful!", {
        description: "Please open the confirmation email to log-in."
      })
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error has occurred"
      toast.error(message)
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
                <Input id="email" name="email" type="email" placeholder="your@email.com" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password" className="h-[20px]">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
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
  )
}
