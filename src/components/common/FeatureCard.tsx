// src/components/FeatureCard.tsx
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  Icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group h-full transition-shadow hover:shadow-lg sm:mx-0">
      <CardHeader className="flex flex-col items-start">
        <div className="flex items-center gap-3 sm:flex-col sm:items-start">
          <Icon className="text-primary mb-1 h-6 w-6 transition-transform group-hover:scale-110 sm:mb-0 sm:h-8 sm:w-8" />
          <CardTitle className="mb-1 text-lg leading-tight font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
