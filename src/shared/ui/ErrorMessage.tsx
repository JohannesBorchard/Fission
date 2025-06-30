import { Button } from "./Button"

export function ErrorMessage({ error }: { error: string }) {
  return (
    <div className="text-center text-red-500">
      Error: {error}
      <Button onClick={() => window.location.reload()} className="mt-4">
        Retry
      </Button>
    </div>
  )
}
