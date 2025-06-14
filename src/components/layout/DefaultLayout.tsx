import { Outlet } from "react-router"
import Footer from "../Footer"
import MainNav from "../MainNav"
import { ThemeProvider } from "../ThemeProvider"

export default function DefaultLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background flex min-h-screen flex-col">
        <MainNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
