export function ArticleDetailSkeleton() {
  return (
    <div className="max-w-2xl animate-pulse">
      {/* H1 (2 Zeilen) */}
      <div className="mb-8 space-y-4">
        <div className="bg-foreground/5 h-11 w-5/6 rounded" />
        <div className="bg-foreground/5 h-11 w-3/4 rounded" />
      </div>

      {/* Lead (2 Zeilen) */}
      <div className="mt-6 mb-6 space-y-2">
        <div className="bg-foreground/5 h-5 w-full rounded" />
        <div className="bg-foreground/5 h-5 w-5/6 rounded" />
      </div>

      {/* Meta (Author + Date) */}
      <div className="text-muted-foreground mt-4 flex gap-4 text-base">
        <div className="bg-foreground/5 h-4 w-30 rounded" />
        <div className="bg-foreground/5 h-4 w-30 rounded" />
      </div>

      {/* Optional: Spacer für späteren Content */}
      <div className="mt-10 space-y-4">
        <div className="bg-foreground/5 h-5 w-full rounded" />
        <div className="bg-foreground/5 h-5 w-11/12 rounded" />
        <div className="bg-foreground/5 h-5 w-4/5 rounded" />
      </div>

      <div className="mt-10 space-y-4">
        <div className="bg-foreground/5 h-5 w-full rounded" />
        <div className="bg-foreground/5 h-5 w-11/12 rounded" />
        <div className="bg-foreground/5 h-5 w-4/5 rounded" />
      </div>

      <div className="mt-10 space-y-4">
        <div className="bg-foreground/5 h-5 w-full rounded" />
        <div className="bg-foreground/5 h-5 w-11/12 rounded" />
        <div className="bg-foreground/5 h-5 w-4/5 rounded" />
      </div>
    </div>
  )
}
