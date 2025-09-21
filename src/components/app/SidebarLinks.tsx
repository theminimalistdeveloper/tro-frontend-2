import { Link } from '@tanstack/react-router'

export default function SidebarLinks() {
  return (
    <div className='border-b-3 border-base-content/20 p-4 font-bold text-lg'>
      <ul className='flex flex-col'>
        <li>
          <Link to='/app' className='py-3 flex h-full hover:text-white'>
            <span className='icon-[tabler--home] size-6 mr-2 align-middle'></span>
            Home
          </Link>
        </li>
        <li>
          <Link to='/app' className='hover:text-white flex h-full py-3'>
            <span className='icon-[tabler--bookmark-filled] size-6 mr-2 align-middle'></span>
            Bookmarks
          </Link>
        </li>
        <li>
          <Link to='/app' className='hover:text-white flex h-full py-3'>
            <span className='icon-[tabler--folder-plus] size-6 mr-2 align-middle'></span>
            Add Folder
          </Link>
        </li>
        <li>
          <Link to='/app/search' className='hover:text-white flex h-full py-3'>
            <span className='icon-[tabler--search] size-6 mr-2 align-middle'></span>
            Search
          </Link>
        </li>
      </ul>
    </div>
  )
}
