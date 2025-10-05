export default function RefreshList() {
  return (
    <div className='tooltip indicator'>
      <span className='indicator-item bg-primary size-3 rounded-full'></span>
      <button type='button' className='tooltip-toggle '>
        <span className='icon-[tabler--refresh] size-6'></span>
      </button>
      <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
        <span className='tooltip-body tooltip-primary'>Refresh the list</span>
      </span>
    </div>
  )
} 
