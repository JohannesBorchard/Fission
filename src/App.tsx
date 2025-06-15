import { useEffect } from "react"
import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import ScrollToAnchor from "./components/ScrollToAnchor"
import { supabase } from "./lib/supabaseClient"
import AuthPage from "./pages/AuthPage"
import FeedPage from "./pages/FeedPage"
import IndexPage from "./pages/IndexPage"
import NotFoundPage from "./pages/NotFoundPage"
import PremiumPage from "./pages/PremiumPage"
import { RegistrationPage } from "./pages/RegistrationPage"

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
      <ScrollToAnchor />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/registration" element={<RegistrationPage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
