import { createFileRoute } from '@tanstack/react-router'
import SourcesList from '../../components/app/SourcesList'
import ListView from '../../components/app/ListView'
import SmallView from '../../components/app/SmallView'

export const Route = createFileRoute('/app/search')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='w-full h-full max-w-3xl m-auto'>
    <header>
      <h2 className='text-3xl font-bold pb-2'>Search</h2>
      <p>Search for articles, folders, and more.</p>
    </header>
    <div className='pb-4'>
      <form className='p-4 flex gap-4 mt-4'>
        <input type='text' placeholder='Search...' className='input input-bordered' />
        <input type='submit' value='Search' className='btn btn-primary' />
      </form>
    </div>
    <section className='mt-4'>
      <nav className='tabs tabs-bordered' aria-label='Tabs' role='tablist' aria-orientation='horizontal'>
        <button type='button' className='tab active-tab:tab-active active w-full' id='tabs-basic-filled-item-1' data-tab='#tabs-basic-filled-1' aria-controls='tabs-basic-filled-1' role='tab' aria-selected='true'>
          Sources
        </button>
        <button type='button' className='tab active-tab:tab-active w-full' id='tabs-basic-filled-item-2' data-tab='#tabs-basic-filled-2' aria-controls='tabs-basic-filled-2' role='tab' aria-selected='false'>
          Articles
        </button>
        <button type='button' className='tab active-tab:tab-active w-full' id='tabs-basic-filled-item-3' data-tab='#tabs-basic-filled-3' aria-controls='tabs-basic-filled-3' role='tab' aria-selected='false'>
          Users
        </button>
      </nav>

      <div className='mt-3'>
        <div id='tabs-basic-filled-1' role='tabpanel' aria-labelledby='tabs-basic-filled-item-1'>
          <SourcesList />
        </div>
        <div id='tabs-basic-filled-2' className='hidden' role='tabpanel' aria-labelledby='tabs-basic-filled-item-2'>
          <ListView />
        </div>
        <div id='tabs-basic-filled-3' className='hidden' role='tabpanel' aria-labelledby='tabs-basic-filled-item-3'>
          <SmallView />
        </div>
      </div>
    </section>
  </div>
}
