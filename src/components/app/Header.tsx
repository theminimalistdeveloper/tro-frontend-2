import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <nav className="navbar shadow-lg fixed justify-between align-middle m-auto bg-base-100 md:h-15 start-0 top-0 z-10">
      <div className="">
        <button type="button" className="btn btn-text btn-square" aria-haspopup="dialog" aria-expanded="false" aria-controls="collapsible-sidebar" data-overlay="#collapsible-sidebar" >
          <span className="icon-[tabler--menu-2] size-5"></span>
        </button>
      </div>
      <div className="w-full max-w-4xl flex items-center md:gap-2">
        <div className='hidden md:block md:w-1/6'>
          <Link to="/app" className='text-xl font-bold'>
            The Reader One
          </Link>
        </div>

        <div className='m-auto hidden md:flex md:w-4/6' >
          <input
            type="text"
            placeholder="Search"
            className="input p-4 h-10 border-base-content/60 rounded-xl border-r-0 rounded-tr-none rounded-br-none w-full"
          />
          <button className="p-2 pr-4 h-10 border border-base-content/60 rounded-xl rounded-tl-none rounded-bl-none border-l-0 ">
            <span className="icon-[tabler--search] size-5"></span>
          </button>
        </div>

        <div className='md:w-1/6 flex gap-4 pl-5'>
          <div className="tooltip">
            <button type="button" className="tooltip-toggle">
              <span className="icon-[tabler--check] size-6"></span>
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>Mark all as read</span>
            </span>
          </div>
          <div className="tooltip">
            <button type="button" className="tooltip-toggle ">
              <span className="icon-[tabler--sort-descending] size-6"></span>
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>Sort descending</span>
            </span>
          </div>
          <div className="tooltip">
            <button type="button" className="tooltip-toggle ">
              <span className="icon-[tabler--refresh] size-6"></span>
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>Refresh the list</span>
            </span>
          </div>
          <div className="tooltip">
            <button type="button" className="tooltip-toggle ">
              <span className="icon-[tabler--pencil] size-6"></span>
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>Edit folder</span>
            </span>
          </div>
          <div className="tooltip">
            <button type="button" className="tooltip-toggle ">
              <span className="icon-[tabler--plus] size-6"></span>
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>Add a new source</span>
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 pr-4 pl-2 items-center">
        <div className='flex flex-wrap'>
          <Link className='font-bold text-md w-full' to='/'>
          </Link>

          <div className='dropdown relative inline-flex cursor-pointer'>
            <div id='dropdown-default' className='dropdown-toggle'>
              <div className="avatar ml-4">
                <div className="size-12 rounded-full">
                  <img
                    className='p-1 bg-base-200 rounded-full'
                    src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                    alt="avatar" />
                </div>
              </div>
            </div>
            <ul
              className='dropdown-menu dropdown-open:opacity-100 border border-base-content/40 hidden min-w-60'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='dropdown-default'
            >
              <li>
                <Link className='dropdown-item' to='/'>
                  <span className='icon-[tabler--user] size-5' />
                  Profile
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/'>
                  <span className='icon-[tabler--settings] size-5' />
                  Settings
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/'>
                  <span className='icon-[tabler--help] size-5' />
                  Help
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/'>
                  <span className='icon-[tabler--logout] size-5' />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}
