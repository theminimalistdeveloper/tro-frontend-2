import { createFileRoute } from '@tanstack/react-router'
import SectionTitle from '@/components/app/SectionTitle'

export const Route = createFileRoute('/app/help')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <SectionTitle title='Help' />
  </div>
}
