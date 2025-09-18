export default function SideMenu() {
  return (
    <div className="z-5">
      <button type="button" className="btn btn-text max-sm:btn-square sm:hidden" aria-haspopup="dialog" aria-expanded="false" aria-controls="collapsible-mini-sidebar" data-overlay="#collapsible-mini-sidebar" >
        <span className="icon-[tabler--menu-2] size-5"></span>
      </button>

      <aside id="collapsible-mini-sidebar" className="overlay [--auto-close:sm] overlay-minified:w-17 sm:shadow-none overlay-open:translate-x-0 drawer drawer-start hidden w-66 sm:absolute sm:z-0 sm:flex sm:translate-x-0 border-e border-base-content/20" role="dialog" >
        <div className="drawer-header overlay-minified:px-3.75 py-2 w-full flex items-center justify-between gap-3">
          <div className="hidden sm:block">
            <button type="button" className="btn btn-circle btn-text" aria-haspopup="dialog" aria-expanded="false" aria-controls="collapsible-mini-sidebar" aria-label="Minify navigation" data-overlay-minifier="#collapsible-mini-sidebar">
              <span className="icon-[tabler--menu-2] size-5"></span>
              <span className="sr-only">Navigation Toggle</span>
            </button>
          </div>
        </div>
        <div className="drawer-body px-2 pt-4">
          <ul className="menu p-0">
            <li>
              <a href="#">
                <span className="icon-[tabler--home] size-5"></span>
                <span className="overlay-minified:hidden">Home</span>
              </a>
            </li>
            <li className="dropdown relative [--adaptive:none] [--strategy:static] overlay-minified:[--adaptive:adaptive] overlay-minified:[--strategy:fixed] overlay-minified:[--offset:15] overlay-minified:[--trigger:hover] overlay-minified:[--placement:right-start]" >
              <button id="dropdown-default" type="button" className="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <span className="icon-[tabler--apps] size-5"></span>
                <span className="overlay-minified:hidden">Feeds</span>
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4 overlay-minified:hidden" ></span>
              </button>
              <ul className="dropdown-menu mt-0 shadow-none overlay-minified:shadow-md overlay-minified:shadow-base-300/20 dropdown-open:opacity-100 hidden min-w-60 overlay-minified:before:absolute overlay-minified:before:-start-4 overlay-minified:before:top-0 overlay-minified:before:h-full overlay-minified:before:w-4 before:bg-transparent" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <li>
                  <a href="#">
                    <span className="icon-[tabler--mail] size-5"></span>
                    Email
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-[tabler--calendar] size-5"></span>
                    Calendar
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown relative [--adaptive:none] [--strategy:static] overlay-minified:[--adaptive:adaptive] overlay-minified:[--strategy:fixed] overlay-minified:[--offset:15] overlay-minified:[--trigger:hover] overlay-minified:[--placement:right-start]" >
              <button id="dropdown-default" type="button" className="dropdown-toggle" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                <span className="icon-[tabler--apps] size-5"></span>
                <span className="overlay-minified:hidden">Boards</span>
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4 overlay-minified:hidden" ></span>
              </button>
              <ul className="dropdown-menu mt-0 shadow-none overlay-minified:shadow-md overlay-minified:shadow-base-300/20 dropdown-open:opacity-100 hidden min-w-60 overlay-minified:before:absolute overlay-minified:before:-start-4 overlay-minified:before:top-0 overlay-minified:before:h-full overlay-minified:before:w-4 before:bg-transparent" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <li>
                  <a href="#">
                    <span className="icon-[tabler--mail] size-5"></span>
                    Email
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-[tabler--calendar] size-5"></span>
                    Calendar
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </aside>
    </div>);
}
