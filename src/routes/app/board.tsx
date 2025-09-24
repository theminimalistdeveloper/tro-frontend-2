import { createFileRoute } from '@tanstack/react-router'
import ListView from '../../components/app/ListView'

export const Route = createFileRoute('/app/board')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className='w-full max-w-3xl m-auto p-4 flex flex-wrap align-middle'>
      <h2 className='text-2xl font-bold mb-4 w-full border-b border-base-content/20 pb-4'>Board</h2>
      <ListView />
    </div>
  </div>
}
