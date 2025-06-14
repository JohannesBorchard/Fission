import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"
import IndexPage from "./pages/IndexPage"

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </>
  )
}
