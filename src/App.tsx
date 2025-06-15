import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import ScrollToAnchor from "./components/ScrollToAnchor"
import Feed from "./pages/Feed"
import IndexPage from "./pages/IndexPage"
import NotFound from "./pages/NotFound"
import Premium from "./pages/Premium"

export default function App() {
  return (
    <>
      <ScrollToAnchor />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
