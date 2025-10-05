import { useArticles } from '@/providers/ArticlesProvider'
import { viewList } from '@/components/app/Articles/types'


const views = [
  { name: 'Cards View', icon: 'icon-[tabler--layout-grid-filled] size-5', value: 'cards' },
  { name: 'List View', icon: 'icon-[tabler--layout-list-filled] size-5', value: 'list' },
  { name: 'Condensed View', icon: 'icon-[tabler--list] size-5', value: 'small' },
]

const selectedView = {
  cards: 'icon-[tabler--layout-grid-filled] size-6',
  list: 'icon-[tabler--layout-list-filled] size-6',
  small: 'icon-[tabler--list] size-6',
}

export default function ViewSelection() {
  const { state, setState } = useArticles()

  return (
    <div className='dropdown relative inline-flex cursor-pointer'>
      <div id='dropdown-default' className='dropdown-toggle'>
        <div className='tooltip'>
          <button type='button' className='tooltip-toggle'>
            <span className={selectedView[state.currentView]}></span>
          </button>
          <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
            <span className='tooltip-body tooltip-primary'>Type of view</span>
          </span>
        </div>
      </div>
      <ul
        className='dropdown-menu dropdown-open:opacity-100 border border-base-content/40 hidden min-w-60'
        aria-orientation='vertical'
        aria-labelledby='dropdown-default'
      >
        {views.map((view) => (
          <li>
            <button className='dropdown-item' onClick={() => {
              setState({ ...state, currentView: view.value as viewList })
            }}>
              <span className={view.icon} /> {view.name}
            </button>
          </li>
        ))}
      </ul>
    </div >
  )
}
