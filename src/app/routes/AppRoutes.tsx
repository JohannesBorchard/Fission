import ProtectedRoute from "@/app/routes/guards/ProtectedRoute"
import PublicRoute from "@/app/routes/guards/PublicRoute"
import { LoginPage } from "@/features/auth/pages/LoginPage"
import { RegistrationPage } from "@/features/auth/pages/RegistrationPage"
import BlogPostPage from "@/features/blog/pages/DetailPage"
import FeedPage from "@/features/blog/pages/FeedPage"
import EditorPage from "@/features/dashboard/pages/EditorPage"
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
        <Route element={<FeedPage />} path="feed" />
        <Route element={<BlogPostPage />} path="feed/:slug" />
        <Route element={<PremiumPage />} path="premium" />

        {/* Public Only */}
        <Route element={<PublicRoute />}>
          <Route element={<LoginPage />} path="login" />
          <Route element={<RegistrationPage />} path="registration" />
        </Route>

        {/* Private Only */}
        <Route element={<ProtectedRoute />} path="dashboard">
          <Route element={<EditorPage />} path="create" />
        </Route>

        <Route element={<NotFoundPage />} path="*" />
      </Route>
    </Routes>
  )
}
