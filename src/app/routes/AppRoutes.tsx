import ProtectedRoute from "@/app/routes/guards/ProtectedRoute"
import PublicRoute from "@/app/routes/guards/PublicRoute"
import { LoginPage } from "@/pages/auth/LoginPage"
import { RegistrationPage } from "@/pages/auth/RegistrationPage"
import FeedPage from "@/pages/blog/FeedPage"
import SecretPage from "@/pages/blog/SecretPage"
import IndexPage from "@/pages/marketing/IndexPage"
import PremiumPage from "@/pages/marketing/PremiumPage"
import NotFoundPage from "@/pages/NotFoundPage"
import { Route, Routes } from "react-router"
import DefaultLayout from "../layout/DefaultLayout"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="premium" element={<PremiumPage />} />

        {/* Public Only */}
        <Route element={<PublicRoute />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<RegistrationPage />} />
        </Route>

        {/* Private Only */}
        <Route path="dashboard" element={<ProtectedRoute />}>
          <Route path="create" element={<SecretPage />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
