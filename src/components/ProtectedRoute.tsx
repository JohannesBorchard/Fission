import { useAuth } from "@/context/AuthProvider"
import { Navigate, Outlet } from "react-router"

export default function ProtectedRoute() {
  const { user, loading } = useAuth()

  if (loading) return <div>Loading...</div>
  if (!user) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ fromProtectedRoute: true, intendedPath: location.pathname }}
      />
    )
  }

  return <Outlet />
}
