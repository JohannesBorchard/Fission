import { Route, Routes } from "react-router"
import DefaultLayout from "./components/layout/DefaultLayout"

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<h1>Test</h1>} />
        </Route>
      </Routes>
    </>
  )
}
