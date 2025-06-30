import { Toaster } from "../shared/ui/Toaster"
import { AuthProvider } from "./providers/AuthProvider"
import { ThemeProvider } from "./providers/ThemeProvider"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <>
      <Toaster />
      <AuthProvider>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </>
  )
}
