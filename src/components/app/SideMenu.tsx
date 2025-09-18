import { Link } from '@tanstack/react-router'

export default function SideMenu() {
  return (
    <div className="z-5">
      <aside id="collapsible-sidebar" className="overlay [--body-scroll:true] border-base-content/20 overlay-open:translate-x-0 drawer drawer-start sm:overlay-layout-open:translate-x-0 hidden w-64 border-e [--auto-close:sm] [--is-layout-affect:true] [--opened:lg] sm:absolute sm:z-0 sm:flex sm:shadow-none lg:[--overlay-backdrop:false]" role="dialog">
        <div className="drawer-body p-0">
          <div className="border-b border-base-content/20">
            <button type="button" className="btn btn-text btn-square" aria-haspopup="dialog" aria-expanded="false" aria-controls="collapsible-sidebar" data-overlay="#collapsible-sidebar" >
              <span className="icon-[tabler--x] size-6"></span>
            </button>
          </div>
          <div className="accordion divide-neutral/20 divide-y">
            <h3 className="font-bold text-lg p-4">Feeds</h3>
            <div className="accordion-item active p-0" id="payment-arrow">
              <button className="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="payment-arrow-collapse" aria-expanded="true">
                <span className="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180" ></span>
                <span className="font-medium">Technology</span>
              </button>
              <div id="payment-arrow-collapse" className="accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="payment-arrow" role="region">
              </div>
            </div>
            <h3 className="font-bold text-lg p-4">Boards</h3>
            <div className="accordion-item" id="delivery-arrow">
              <button className="accordion-toggle inline-flex items-center gap-x-4 text-start" aria-controls="delivery-arrow-collapse" aria-expanded="false">
                <span className="icon-[tabler--chevron-right] accordion-item-active:rotate-90 size-5 shrink-0 transition-transform duration-300 rtl:rotate-180" ></span>
              </button>
              <div id="delivery-arrow-collapse" className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="delivery-arrow" role="region">
                <div className="px-5 pb-4">
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="p-4 border-t border-base-content/20">
          <Link to='/' className=''>Help</Link>
        </footer>
      </aside>
    </div>);
}
