export function ArticleTeaserSkeleton() {
  return (
    <div className="animate-pulse pb-8 not-last:border-b last:pb-0">
      {/* Author */}
      <div className="bg-foreground/5 mb-2 h-4 w-24 rounded" />

      {/* Title */}
      <div className="bg-foreground/5 mb-3 h-6 w-3/5 rounded" />

      {/* Excerpt (1 Zeile) */}
      <div className="bg-foreground/5 mb-3 h-4 w-3/4 rounded" />

      {/* Footer */}
      <div className="text-muted-foreground flex items-center justify-between text-xs">
        {/* Left side: Date, Views, Comments */}
        <div className="flex items-center gap-2">
          <div className="bg-foreground/5 h-4 w-20 rounded" />
          <div className="bg-foreground/5 h-4 w-6 rounded" />
          <div className="bg-foreground/5 h-4 w-6 rounded" />
        </div>

        {/* Right side: Bookmark, More */}
        <div className="flex items-center gap-2">
          <div className="bg-foreground/5 h-4 w-6 rounded" />
          <div className="bg-foreground/5 h-4 w-6 rounded" />
        </div>
      </div>
    </div>
  )
}
