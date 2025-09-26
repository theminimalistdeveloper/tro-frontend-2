import { Link } from '@tanstack/react-router'

export default function SidebarBoards() {
  return (
    <div className='accordion divide-neutral/20 divide-y'>
      <h2 className='text-lg font-bold p-4 flex justify-between border-b border-base-content/20'>
        <Link to='/app/board' className='hover:text-primary'>
          <span className='icon-[tabler--pin] size-6 mr-2 align-middle'></span>
          Board
        </Link>
        <span className='badge badge-sm badge-primary'>327</span>
      </h2>
    </div>
  )
}
