import { supabase } from "@/shared/api/supabaseClient"
import { useState } from "react"
import { toast } from "sonner"

export function useRegistration() {
  const [loading, setLoading] = useState(false)

  async function register({ email, password }: { email: string; password: string }) {
    setLoading(true)

    try {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) throw new Error(error.message)

      toast.success("Registration successful!", {
        description: "Please open the confirmation email to log-in."
      })

      return true
    } catch (err) {
      const message = err instanceof Error ? err.message : "An unexpected error has occurred"
      toast.error(message)

      return false
    } finally {
      setLoading(false)
    }
  }

  return { register, loading }
}
