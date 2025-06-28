import { useAuth } from "@/shared/lib/useAuth"
import { Navigate, Outlet, useLocation, useNavigationType } from "react-router"
import { toast } from "sonner"

export default function PublicRoute() {
  const { user, loading } = useAuth()
  const navType = useNavigationType()
  const location = useLocation()
  const { pathname, state } = location

  if (loading) return null

  if (user) {
    // Toast nur bei Browser-Back auf Auth-Seiten
    if (navType === "POP" && ["/login", "/registration"].includes(pathname)) {
      toast.warning("You are already logged in.", {
        id: "public-guard-warning"
      })
    }

    // Smart Redirect: zurück zur ursprünglich gewollten Seite
    const rawFrom = (state as any)?.from
    const target = typeof rawFrom === "string" ? rawFrom : rawFrom?.pathname || "/"

    return <Navigate to={target} replace />
  }

  return <Outlet />
}
