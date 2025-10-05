import { createFileRoute } from '@tanstack/react-router'
import ListView from '@/components/app/Articles/ListView'
import Header from '@/components/app/Header/Header'
import Actions from '@/components/app/Articles/Actions'
import SectionTitle from '@/components/app/SectionTitle'

export const Route = createFileRoute('/app/board')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Header actions=<Actions /> />
    <SectionTitle title='Board' />
    <ListView />
  </div>
}
