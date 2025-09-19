import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <nav className="navbar shadow-lg fixed justify-between align-middle m-auto bg-base-100 md:h-15 start-0 top-0 z-1">
      <div className="">
        <button type="button" className="btn btn-text btn-square" aria-haspopup="dialog" aria-expanded="false" aria-controls="collapsible-sidebar" data-overlay="#collapsible-sidebar" >
          <span className="icon-[tabler--menu-2] size-5"></span>
        </button>
      </div>
      <div className="w-full max-w-4xl flex items-center md:gap-2">
        <div className='md:w-1/6'>
          <Link to="/app" className='text-xl font-bold'>
            The Reader One
          </Link>
        </div>

        <div className='m-auto flex w-full md:w-4/6' >
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
          <div className='dropdown relative inline-flex'>
            <button
              id='dropdown-default'
              type='button'
              className='dropdown-toggle '
              aria-haspopup='menu'
              aria-expanded='false'
              aria-label='Dropdown'>
              <span className='icon-[tabler--dots] dropdown-open:rotate-180 size-6'></span>
            </button>
            <ul
              className='dropdown-menu dropdown-open:opacity-100 border border-base-content/40 hidden min-w-60'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='dropdown-default'
            >
              <li className='flex items-center gap-4 pl-2 pb-3 border-b border-base-content/20'>
                <div className="avatar">
                  <div className="size-14 rounded-full">
                    <img
                      className='p-1 bg-base-200 rounded-full'
                      src="https://cdn.flyonui.com/fy-assets/avatar/avatar-1.png"
                      alt="avatar" />
                  </div>
                </div>
                <div className='flex flex-wrap'>
                  <Link className='font-bold w-full' to='/'>
                    Rafael Dias
                  </Link>
                  <Link className='' to='/'>
                    <span className=''>Settings</span>
                  </Link>
                </div>
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
      <div />
    </nav>
  )
}
