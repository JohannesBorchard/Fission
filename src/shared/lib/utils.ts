import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDate = (dateString: string, format: "short" | "long" = "short") => {
  const date = new Date(dateString)

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    ...(format === "long" && { year: "numeric" })
  }

  return date.toLocaleDateString("en-US", options)
}
