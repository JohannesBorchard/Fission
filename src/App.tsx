import { useEffect } from "react"
import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import ProtectedRoute from "./components/ProtectedRoute"
import ScrollToAnchor from "./components/ScrollToAnchor"
import { Toaster } from "./components/ui/Sonner"
import { AuthProvider } from "./context/AuthProvider"
import { supabase } from "./lib/supabaseClient"
import AuthPage from "./pages/AuthPage"
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
      <ScrollToAnchor />
      <AuthProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<IndexPage />} />
            <Route path="/feed" element={<FeedPage />} />
            <Route path="/premium" element={<PremiumPage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/registration" element={<RegistrationPage />} />

            <Route path="/dashboard" element={<ProtectedRoute />}>
              <Route path="create" element={<SecretPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  )
}
