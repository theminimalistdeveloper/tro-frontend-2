export default function Header() {
  return (
    <nav className="navbar justify-center m-auto bg-base-100 md:h-15 start-0 top-0 z-1 shadow-base-300/20 shadow-sm">
      <div className="w-full max-w-4xl flex items-center md:gap-2">
        <div className="flex items-center justify-between max-md:w-full">
          <div className="navbar-start items-center justify-between max-md:w-full">
            <a className="link text-base-content link-neutral text-xl font-bold no-underline" href="#">
              TRO
            </a>
          </div>
          <div className="md:hidden">
            <button type="button" className="collapse-toggle btn btn-outline btn-secondary btn-sm btn-square" data-collapse="#sticky-navbar-collapse" aria-controls="sticky-navbar-collapse" aria-label="Toggle navigation" >
              <span className="icon-[tabler--menu-2] collapse-open:hidden size-4"></span>
              <span className="icon-[tabler--x] collapse-open:block hidden size-4"></span>
            </button>
          </div>
        </div>

        <div className='m-auto align-center w-full' >
          <input type="text" placeholder="Search" className="input input-bordered input-sm w-full border " />
        </div>

      </div>
    </nav>
  )
}
