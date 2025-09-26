import { createFileRoute } from '@tanstack/react-router'
import ListView from '@/components/app/Articles/ListView'

export const Route = createFileRoute('/app/bookmarks')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className='w-full max-w-3xl m-auto flex flex-wrap align-middle'>
      <h2 className='text-2xl font-bold mb-4 w-full border-b border-base-content/20 pb-4'>
        Bookmarks
      </h2>
      <ListView />
    </div>
  </div>
}
