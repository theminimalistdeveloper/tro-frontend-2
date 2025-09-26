import { createFileRoute } from '@tanstack/react-router'
import CardsView from '@/components/app/Articles/CardsView'

export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <CardsView />
  </div>
}
