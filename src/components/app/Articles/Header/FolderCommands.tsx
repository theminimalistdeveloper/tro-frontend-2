export default function FolderCommands() {
  return (
    <div>
      <div className='tooltip'>
        <button
          type='button'
          className='tooltip-toggle'
          data-overlay='#folder-form-modal'
        >
          <span className='icon-[tabler--pencil] size-6'></span>
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
          <span className='tooltip-body tooltip-primary'>Edit folder</span>
        </span>
      </div>
      <div className='tooltip'>
        <button type='button' className='tooltip-toggle '>
          <span className='icon-[tabler--plus] size-6'></span>
        </button>
        <span className='tooltip-content tooltip-shown:opacity-100 tooltip-shown:visible'>
          <span className='tooltip-body tooltip-primary'>Add a new source</span>
        </span>
      </div>
    </div>
  )
} 
