import { useEffect } from "react"
import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import ScrollToAnchor from "./components/ScrollToAnchor"
import { supabase } from "./lib/supabaseClient"
import Auth from "./pages/Auth"
import Feed from "./pages/Feed"
import IndexPage from "./pages/IndexPage"
import NotFound from "./pages/NotFound"
import Premium from "./pages/Premium"

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
          <Route path="/feed" element={<Feed />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/login" element={<Auth />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
