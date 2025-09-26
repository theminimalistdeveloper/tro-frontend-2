import SidebarFolders from '@/components/app/Sidebar/Folders';
import SidebarBoards from '@/components/app/Sidebar/Boards';
import SidebarLinks from '@/components/app/Sidebar/Links';

export default function SideMenu() {
  return (
    <div className="z-2">
      <aside
        id="collapsible-sidebar"
        className="bg-base-200 md:pt-15 overlay [--body-scroll:true] border-base-content/20 overlay-open:translate-x-0 drawer drawer-start sm:overlay-layout-open:translate-x-0 hidden w-64 border-e [--auto-close:sm] [--is-layout-affect:true] [--opened:lg] sm:absolute sm:z-0 sm:flex sm:shadow-none lg:[--overlay-backdrop:false]"
        role="dialog"
      >
        <div className="drawer-body p-0">
          <div className='md:hidden p-4 border-b border-base-content/20'>
            <button
              type="button"
              className="btn btn-text btn-square"
              aria-haspopup="dialog"
              aria-expanded="false"
              aria-controls="collapsible-sidebar"
              data-overlay="#collapsible-sidebar"
            >
              <span className="icon-[tabler--x] size-5"></span>
            </button>
          </div>
          <SidebarLinks />
          <SidebarBoards />
          <SidebarFolders />
        </div>
      </aside>
    </div>);
}
