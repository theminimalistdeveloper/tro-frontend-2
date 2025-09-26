export default function ArticleActions(
  { read = false, bookmark = false, pinned = false }:
    { read?: boolean, bookmark?: boolean, pinned?: boolean }) {
  return (
    <div
      className='card-actions flex justify-between'>
      <div className="tooltip mt-1">
        <button type="button" className="tooltip-toggle ">
          {(read) ?
            <span className="icon-[tabler--circle] size-4"></span> :
            <span className="icon-[tabler--circle-filled] text-primary size-4"></span>
          }
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
          <span className='tooltip-body tooltip-primary'>
            {(read) ? 'Mark as unread' : 'Mark as read'}
          </span>
        </span>
      </div>
      <div className='flex gap-4'>
        <div className="tooltip">
          <button type="button" className="tooltip-toggle ">
            {(bookmark) ?
              <span className="icon-[tabler--bookmark-filled] size-6"></span> :
              <span className="icon-[tabler--bookmark] size-6"></span>}
          </button>
          <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
            <span className='tooltip-body tooltip-primary'>Read it later</span>
          </span>
        </div>

        <div className="tooltip">
          <button type="button" className="tooltip-toggle ">
            {(pinned) ?
              <span className="icon-[tabler--pinned-filled] size-6" ></span> :
              <span className="icon-[tabler--pinned] size-6" ></span>}
          </button>
          <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
            <span className='tooltip-body tooltip-primary'>Pin to a board</span>
          </span>
        </div>

        <div className="tooltip">
          <button type="button" className="tooltip-toggle ">
            <span className="icon-[tabler--share] size-6" />
          </button>
          <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
            <span className='tooltip-body tooltip-primary'>Share!</span>
          </span>
        </div>
      </div>
    </div>
  )
}
