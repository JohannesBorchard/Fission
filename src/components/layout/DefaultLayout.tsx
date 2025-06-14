import { Outlet } from "react-router"
import PageHeader from "../PageHeader"

export default function DefaultLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <PageHeader />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
