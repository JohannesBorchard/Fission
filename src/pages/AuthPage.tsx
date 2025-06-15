import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

/* Temporary reference for implementation in actual login and registration pages */

export default function AuthPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSignup() {
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    setError(error?.message ?? null)
    setLoading(false)
  }

  async function handleLogin() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setError(error?.message ?? null)
    setLoading(false)
  }

  return (
    <div className="mx-auto mt-12 max-w-sm space-y-4">
      <input
        className="w-full border p-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="w-full border p-2"
        type="password"
        placeholder="Passwort"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full bg-blue-600 p-2 text-white"
        onClick={handleSignup}
        disabled={loading}
      >
        Registrieren
      </button>
      <button
        className="w-full bg-gray-800 p-2 text-white"
        onClick={handleLogin}
        disabled={loading}
      >
        Einloggen
      </button>

      {error && <p className="text-red-600">{error}</p>}
    </div>
  )
}
