// src/components/FeatureCard.tsx
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/Card"
import { type LucideIcon } from "lucide-react"
import { Badge } from "../../../shared/ui/Badge"

interface FeatureCardProps {
  Icon: LucideIcon
  title: string
  description: string
  done: boolean
}

export function FeatureCard({ Icon, title, description, done = true }: FeatureCardProps) {
  const badgeVariant = done ? "default" : "outline"

  return (
    <Card className="group relative h-full transition-shadow hover:shadow-lg sm:mx-0">
      <CardHeader className="flex flex-col items-start">
        <div className="flex w-full items-center gap-3 sm:flex-col sm:items-start">
          <div className="flex items-center justify-between gap-2 sm:w-full">
            <Icon className="text-primary mb-1 h-6 w-6 transition-transform group-hover:scale-110 sm:mb-0 sm:h-8 sm:w-8" />
            <Badge className="absolute top-6 right-6 sm:top-7" variant={badgeVariant}>
              {done ? <>Done</> : "Todo"}
            </Badge>
          </div>
          <CardTitle className="mb-1 text-lg leading-tight font-semibold">{title}</CardTitle>
        </div>
        <CardDescription className="text-muted-foreground text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
