import { supabase } from "@/services/supabaseClient"
import type { Session } from "@supabase/supabase-js"
import { createContext, useEffect, useState } from "react"

export type AuthContextType = {
  session: Session | null
  user: Session["user"] | null
  loading: boolean
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setLoading(false)
    })

    const { data: listener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session)
    })

    return () => {
      listener.subscription.unsubscribe()
    }
  }, [])

  const value: AuthContextType = {
    session,
    user: session?.user ?? null,
    loading
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
