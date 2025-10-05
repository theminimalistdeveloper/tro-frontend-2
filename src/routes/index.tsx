import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mt-20">Welcome to the App!</h1>
    </div>
  )
}
