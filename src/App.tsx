import { Route, Routes } from "react-router"

export default function App() {
  return (
    <>
      <Routes>
        <Route index element={<h1>Test</h1>} />
      </Routes>
    </>
  )
}
