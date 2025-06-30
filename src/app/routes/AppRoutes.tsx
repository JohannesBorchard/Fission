import ProtectedRoute from "@/app/routes/guards/ProtectedRoute"
import PublicRoute from "@/app/routes/guards/PublicRoute"
import { LoginPage } from "@/features/auth/pages/LoginPage"
import { RegistrationPage } from "@/features/auth/pages/RegistrationPage"
import BlogPostPage from "@/features/blog/pages/DetailPage"
import FeedPage from "@/features/blog/pages/FeedPage"
import SecretPage from "@/features/blog/pages/SecretPage"
import IndexPage from "@/features/marketing/pages/IndexPage"
import PremiumPage from "@/features/marketing/pages/PremiumPage"
import NotFoundPage from "@/shared/pages/NotFoundPage"
import { Route, Routes } from "react-router"
import DefaultLayout from "../layout/DefaultLayout"

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<IndexPage />} />
        <Route path="feed" element={<FeedPage />} />
        <Route path="feed/:slug" element={<BlogPostPage />} />
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
