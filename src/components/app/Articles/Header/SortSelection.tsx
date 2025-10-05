export default function SortSelection() {
  return (
    <div className='tooltip'>
      <button type='button' className='tooltip-toggle '>
        <span className='icon-[tabler--sort-descending] size-6'></span>
      </button>
      <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
        <span className='tooltip-body tooltip-primary'>Sort descending</span>
      </span>
    </div>
  )
} 
