import { useNavigate, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/article/modal')({
  component: RouteComponent,
})

function RouteComponent() {
  const navigate = useNavigate()
  const closeModal = () => {
    navigate({ to: '/app' })
  }

  return (
    <div className="fixed inset-0 bg-indigo-800 opacity-50  items-start justify-center z-10 ">
      <div
        onClick={closeModal}
        className="bg-white p-4 rounded shadow-lg max-w-2xl mx-auto mt-20 opacity-100">
        hello
      </div>
    </div>
  )
}
