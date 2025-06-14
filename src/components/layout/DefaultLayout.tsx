import { Outlet } from "react-router"
import { ThemeProvider } from "../ThemeProvider"
import Footer from "./Footer"
import Header from "./Header"

export default function DefaultLayout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
