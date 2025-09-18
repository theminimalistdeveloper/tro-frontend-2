import { Link } from '@tanstack/react-router';

export default function Header() {
  return (
    <nav className="navbar fixed justify-between align-middle m-auto bg-base-100 md:h-15 start-0 top-0 z-1">
      <div className="">
        <button type="button" className="btn btn-text btn-square" aria-haspopup="dialog" aria-expanded="false" aria-controls="collapsible-sidebar" data-overlay="#collapsible-sidebar" >
          <span className="icon-[tabler--menu-2] size-5"></span>
        </button>
      </div>
      <div className="w-full max-w-4xl flex items-center md:gap-2">
        <div className='md:w-1/6'>
          <Link to="/app" className='text-xl font-bold'>
            TRO
          </Link>
        </div>

        <div className='m-auto align-center w-full md:w-4/6' >
          <input
            type="text"
            placeholder="Search"
            className="input p-4 input-bordered rounded-xl w-full"
          />
        </div>

        <div className='md:w-1/6 flex gap-2'>
          <button className='icon-[tabler--check] size-6' />
          <button className='icon-[tabler--sort-descending] size-6' />
          <button className='icon-[tabler--refresh] size-6' />
          <button className='icon-[tabler--dots] size-6' />
        </div>
      </div>
      <div />
    </nav>
  )
}
