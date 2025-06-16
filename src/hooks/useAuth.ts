import type { AuthContextType } from "@/context/AuthProvider"
import { AuthContext } from "@/context/AuthProvider"
import { useContext } from "react"

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider")
  }
  return context
}
