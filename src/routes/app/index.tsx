import { createFileRoute } from '@tanstack/react-router'
import Timeline from '../../components/app/Timeline'

export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Timeline />
}
