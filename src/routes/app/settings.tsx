import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/app/settings')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <div className='w-full max-w-3xl m-auto p-4 flex flex-wrap align-middle'>
      <h2 className='text-2xl font-bold mb-4 w-full border-b border-base-content/20 pb-4'>Settings</h2>

      <div className='pb-4 w-1/2'>
        <form className='flex flex-col gap-4'>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Username</span>
            </label>
            <input type='text' placeholder='Username' className='input input-bordered w-full max-w-xs' defaultValue='juan.delacruz' />
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Email</span>
            </label>
            <input type='email' placeholder='Email' className='input input-bordered w-full max-w-xs'>
            </input>
          </div>
          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Password</span>
            </label>
            <input type='password' placeholder='Password' className='input input-bordered w-full max-w-xs' defaultValue='password123' />
          </div>
        </form>
      </div>

      <div className='pb-4 w-1/2'>
        <h3 className='text-xl font-bold mb-2'>Notification Preferences</h3>
        <form className='flex flex-col gap-4'>
          <div className='form-control'>
            <label className='flex gap-2'>
              <input type='checkbox' className='checkbox' defaultChecked />
              <span className='text-md'>Email Notifications</span>
            </label>
          </div>
          <div className='form-control'>
            <label className=''>
              <span className='text-md'>Theme</span>
              <div className='flex items-center gap-1'>
                <input type='radio' name='theme' className='radio radio-primary' id='light-theme' />
                <label className='label-text text-base'>Light</label>
              </div>
              <div className='flex items-center gap-1'>
                <input type='radio' name='theme' className='radio radio-primary' id='dark-theme' checked />
                <label className='label-text text-base'>Dark</label>
              </div>
            </label>
          </div>
          <button className='btn btn-primary mt-4 w-full max-w-xs'>Save Preferences</button>
        </form>
      </div>

      <div className='pt-4 border-t border-base-content/20 w-full'>
        <h3 className='text-xl font-bold mb-2 text-error'>Danger Zone</h3>
        <button className='btn btn-error w-full max-w-xs'>Delete Account</button>
      </div>
    </div>
  </div>
}
