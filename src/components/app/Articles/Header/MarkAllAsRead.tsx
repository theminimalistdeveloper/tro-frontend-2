export default function MarkAllAsRead() {
  return (
    <div className='tooltip'>
      <button type='button' className='tooltip-toggle'>
        <span className='icon-[tabler--check] size-6'></span>
      </button>
      <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
        <span className='tooltip-body tooltip-primary'>Mark all as read</span>
      </span>
    </div>
  )
}
