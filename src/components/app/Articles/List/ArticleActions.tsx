import { ActionsProps } from '@/components/app/Articles/Views/types'

export default function Actions(ActionsProps: ActionsProps) {
  const { read = false, bookmark = false, pinned = false } = ActionsProps
  return (
    <div className='flex gap-4'>
      <div className='tooltip'>
        <button type='button' className='tooltip-toggle'>
          <span className={`icon-[tabler--check] size-6 ${read ? 'text-primary' : ''}`}></span>
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
          <span className='tooltip-body tooltip-primary'>Mark as read</span>
        </span>
      </div>

      <div className='tooltip'>
        <button type='button' className='tooltip-toggle '>
          <span className={`icon-[tabler--bookmark] size-6 ${bookmark ? 'text-primary' : ''}`}></span>
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
          <span className='tooltip-body tooltip-primary'>Bookmark</span>
        </span>
      </div>

      <div className='tooltip'>
        <button type='button' className='tooltip-toggle '>
          <span className={`icon-[tabler--pin] size-6 ${pinned ? 'text-primary' : ''}`}></span>
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
          <span className='tooltip-body tooltip-primary'>Pin</span>
        </span>
      </div>
    </div>
  )
}
