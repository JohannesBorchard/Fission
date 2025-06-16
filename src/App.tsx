import { useEffect } from "react"
import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import ProtectedRoute from "./components/ProtectedRoute"
import { Toaster } from "./components/ui/Sonner"
import { AuthProvider } from "./context/AuthProvider"
import { ThemeProvider } from "./context/ThemeProvider"
import { supabase } from "./lib/supabaseClient"
import FeedPage from "./pages/FeedPage"
import IndexPage from "./pages/IndexPage"
import { LoginPage } from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import PremiumPage from "./pages/PremiumPage"
import { RegistrationPage } from "./pages/RegistrationPage"
import SecretPage from "./pages/SecretPage"

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
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route index element={<IndexPage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/premium" element={<PremiumPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/registration" element={<RegistrationPage />} />

              <Route path="/dashboard" element={<ProtectedRoute />}>
                <Route path="create" element={<SecretPage />} />
              </Route>

              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
