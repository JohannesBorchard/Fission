import { Button } from "./Button"

export function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="text-center text-red-500">
      <div className="mb-3">Error: {error}</div>
      <Button onClick={() => window.location.reload()} className="mt-4">
        Reload Page
      </Button>
    </div>
  )
}
