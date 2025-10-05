import { Link } from '@tanstack/react-router'

export default function Profile() {
  return (
    <div className='flex flex-wrap'>
      <Link className='font-bold text-md w-full' to='/'>
      </Link>

      <div className='dropdown relative inline-flex cursor-pointer'>
        <div id='dropdown-default' className='dropdown-toggle'>
          <div className='avatar ml-4'>
            <button className='size-12 rounded-full'>
              <img
                className='p-1 bg-base-200 rounded-full'
                src='https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png'
                alt='avatar' />
            </button>
          </div>
        </div>
        <ul
          className='dropdown-menu dropdown-open:opacity-100 border border-base-content/40 hidden min-w-60'
          aria-orientation='vertical'
          aria-labelledby='dropdown-default'
        >
          <li>
            <Link className='dropdown-item' to='/app/profile'>
              <span className='icon-[tabler--user] size-5' />
              Profile
            </Link>
          </li>
          <li>
            <Link className='dropdown-item' to='/app/settings'>
              <span className='icon-[tabler--settings] size-5' />
              Settings
            </Link>
          </li>
          <li>
            <Link className='dropdown-item' to='/app/help'>
              <span className='icon-[tabler--help] size-5' />
              Help
            </Link>
          </li>
          <li>
            <Link className='dropdown-item' to='/logout'>
              <span className='icon-[tabler--logout] size-5' />
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
} 
