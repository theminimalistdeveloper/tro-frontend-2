import { createFileRoute } from '@tanstack/react-router'
import SideMenu from '../../components/app/SideMenu'
import Timeline from '../../components/app/Timeline'
import Header from '../../components/app/Header'

export const Route = createFileRoute('/app/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <main className='h-screen bg-base-300 pl-17 overflow-y-auto'>
        <Header />
        <Timeline />
      </main>
      <SideMenu />
    </div>
  )
}
