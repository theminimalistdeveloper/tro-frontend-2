import { createFileRoute, Outlet } from '@tanstack/react-router'
import SideMenu from '../../components/app/Sidebar/Sidebar'
import Header from '../../components/app/Header'

export const Route = createFileRoute('/app')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <main className='h-screen pt-20 bg-base-300 overflow-y-auto'>
        <Header />
        <Outlet />
      </main>
      <SideMenu />
    </div>
  )
}
