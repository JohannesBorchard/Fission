import { supabase } from "@/shared/api/supabaseClient"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "sonner"

export function useLogin() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  async function login({ email, password }: { email: string; password: string }) {
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw new Error(error.message)

      toast.success("Login successful!", { id: "login-success" })

      const from = (location.state as any)?.from?.pathname || "/dashboard/create"
      navigate(from, { replace: true })

      return true
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error has occurred"
      toast.error(message)

      return false
    } finally {
      setLoading(false)
    }
  }

  return { login, loading }
}
