import { createFileRoute } from '@tanstack/react-router'
import ListView from '../../components/app/ListView'

export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <ListView />
  </div>
}
