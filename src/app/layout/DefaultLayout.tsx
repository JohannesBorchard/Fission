import Footer from "@/widgets/Footer"
import { Outlet } from "react-router"
import Header from "../../widgets/Header"

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
