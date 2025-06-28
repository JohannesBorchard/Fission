import { useAuth } from "@/shared/lib/useAuth"
import { Navigate, Outlet } from "react-router"
import { toast } from "sonner"

export default function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) return null

  if (!user) {
    toast.warning("Please log in to continue.", { id: "protected-guard-warning" })
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
