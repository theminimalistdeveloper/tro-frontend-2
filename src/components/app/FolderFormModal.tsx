export default function FolderFormModal() {
  return (
    <div
      id='folder-form-modal'
      className='overlay modal overlay-open:opacity-100 overlay-open:duration-300 hidden'
      role='dialog'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h3 className='modal-title'>Folder</h3>
            <button
              type='button'
              className='btn btn-text btn-circle btn-sm absolute end-3 top-3'
              aria-label='Close'
              data-overlay='#folder-form-modal'>
              <span className='icon-[tabler--x] size-4' />
            </button>
          </div>
          <form>
            <div className='modal-body pt-0'>
              <div className='mb-4'>
                <label className='label-text'>Folder Title</label>
                <input
                  type='text'
                  placeholder=''
                  className='input'
                  id='folder-title'
                  autoFocus
                />
              </div>
              <div className='mb-0.5 flex gap-4 max-sm:flex-col'>
                <div className='w-full'>
                  <label className="label-text">Description</label>
                  <textarea className="textarea" placeholder="Hello!!!" id="textareaLabel"></textarea>
                </div>
              </div>
            </div>
            <div className='modal-footer flex justify-between'>
              <div className="flex items-center gap-1">
                <label className="label-text text-base">Public</label>
                <input type="checkbox" className="switch switch-primary" id="switchType2" checked />
              </div>

              <div className=''>
                <button
                  type='button'
                  className='btn btn-soft btn-secondary'
                  data-overlay='#form-modal'
                >Close</button>
                <button
                  type='submit'
                  className='btn btn-primary'
                >Save changes</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}
