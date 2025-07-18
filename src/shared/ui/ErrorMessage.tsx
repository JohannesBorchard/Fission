import { Button } from "./Button"

export function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="text-center text-red-500">
      <div className="mb-3">Error: {error}</div>
      <Button className="mt-4" onClick={() => window.location.reload()}>
        Reload Page
      </Button>
    </div>
  )
}
