import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import ScrollToAnchor from "./components/ScrollToAnchor"
import IndexPage from "./pages/IndexPage"
import NotFound from "./pages/NotFound"

export default function App() {
  return (
    <>
      <ScrollToAnchor />
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
