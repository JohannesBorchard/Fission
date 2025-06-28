import { useEffect } from "react"
import { supabase } from "../shared/api/supabaseClient"
import { Toaster } from "../shared/ui/Toaster"
import { AuthProvider } from "./providers/AuthProvider"
import { ThemeProvider } from "./providers/ThemeProvider"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  useEffect(() => {
    async function sessionTest() {
      const {
        data: { session }
      } = await supabase.auth.getSession()

      console.log("Session:", session)
    }

    sessionTest()
  }, [])
  return (
    <>
      <Toaster />
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
