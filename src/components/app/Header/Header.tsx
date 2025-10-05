import Profile from '@/components/app/Header/Profile'
import { Link } from '@tanstack/react-router'
import React from 'react';

export default function Header(
  { actions = null, title = '' }:
    { title?: String, actions?: React.ReactNode | null }
) {
  const loggedIn = true
  return (
    <nav className='navbar shadow-lg fixed justify-between align-middle m-auto bg-base-100 md:h-15 start-0 top-0 z-10'>
      <div>
        <button type='button'
          className='btn btn-text btn-square'
          data-overlay='#collapsible-sidebar' >
          <span className='icon-[tabler--menu-2] size-5'></span>
        </button>
      </div>

      <div className='w-full max-w-4xl flex items-center md:gap-2'>
        <div className='hidden md:block md:w-1/6'></div>

        <div id='location-title'
          className='m-auto hidden justify-center md:flex md:w-3/6'>
          <h2 className='text-lg font-bold uppercase'>{title}</h2>
        </div>

        <div className='md:w-2/6 pl-5'>{actions}</div>
      </div>

      <div className='flex gap-3 pr-4 pl-2 items-center'>
        {loggedIn ?
          <Profile />
          :
          <div className='flex gap-2'>
            <Link to='/login' className='btn btn-ghost btn-sm'>Login</Link>
            <Link to='/signup' className='btn btn-primary btn-sm'>Sign Up</Link>
          </div>
        }
      </div>
    </nav >
  )
}
