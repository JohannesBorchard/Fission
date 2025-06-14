// src/components/FeatureCard.tsx
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  Icon: LucideIcon
  title: string
  description: string
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group transition-shadow hover:shadow-lg">
      <CardHeader className="flex flex-col items-start space-y-2">
        <Icon className="text-primary h-8 w-8 transition-transform group-hover:scale-110" />
        <CardTitle className="mb-1 text-lg leading-tight font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
