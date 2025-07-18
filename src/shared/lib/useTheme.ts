import { ThemeProviderContext, type ThemeContextType } from "@/app/providers/ThemeProvider"
import { useContext } from "react"

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeProviderContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}
