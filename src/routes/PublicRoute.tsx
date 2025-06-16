import { Navigate, Outlet } from "react-router"
import { useAuth } from "../hooks/useAuth"

export default function PublicRoute() {
  const { user, loading } = useAuth()
  if (loading) return null
  return user ? (
    <Navigate to="/" replace state={{ fromPublicRoute: true, intendedPath: location.pathname }} />
  ) : (
    <Outlet />
  )
}
