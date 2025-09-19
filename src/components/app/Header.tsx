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
            TRO
          </Link>
        </div>

        <div className='m-auto align-center w-full md:w-4/6' >
          <input
            type="text"
            placeholder="Search"
            className="input p-4 input-bordered rounded-xl w-full"
          />
        </div>

        <div className='md:w-1/6 flex gap-3 pl-5'>
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
              <span className="icon-[tabler--dots] size-6"></span>
            </button>
            <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
              <span className='tooltip-body tooltip-primary'>More actions</span>
            </span>
          </div>
        </div>
      </div>
      <div />
    </nav>
  )
}
