export default function ArticleActions(
  { bookmark = false, pinned = false }:
    { bookmark?: boolean, pinned?: boolean }) {
  return (
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
          <span className="icon-[tabler--share] size-6"></span>
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible' role="tooltip">
          <span className='tooltip-body tooltip-primary'>Share</span>
        </span>
      </div>
    </div>
  )
}
