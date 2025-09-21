import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/article')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-4 max-w-4xl m-auto' >
      <h1 className='text-3xl font-bold mb-4'>Article Title</h1>
      <p className='mb-2 text-sm text-gray-500'>Source Name • 2 hours ago</p>
      <img src='https://via.placeholder.com/800x400' alt='Article' className='w-full h-auto mb-4 rounded-lg' />
      <div className='prose max-w-none'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.</p>
      </div>
    </div>
  )
}
