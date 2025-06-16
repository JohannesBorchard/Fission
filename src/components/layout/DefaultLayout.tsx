import { Outlet } from "react-router"
import { ThemeProvider } from "../../context/ThemeProvider"
import Footer from "./Footer"
import Header from "./Header"

export default function DefaultLayout() {
  return (
    <div className="bg-background flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
