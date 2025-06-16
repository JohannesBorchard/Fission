import { useAuth } from "@/hooks/useAuth"
import { Navigate, Outlet, useNavigationType } from "react-router"
import { toast } from "sonner"

export default function PublicRoute() {
  const { user, loading } = useAuth()
  const navType = useNavigationType() // POP | PUSH | REPLACE

  if (loading) return null

  if (user) {
    // nur dann warnen, wenn der User wirklich via URL hierher "gepoppt" ist
    if (navType === "POP") {
      toast.warning("You are already logged in.", { id: "public-guard-warning" })
    }
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
