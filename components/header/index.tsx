'use client'

import { authClient } from '@/lib/auth-client'
import { Auth } from './auth'
import { NavMenu } from './nav-menu'

export function Header() {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch //refetch the session
  } = authClient.useSession()

  return (
    <header className='transform transition-all duration-300 z-50 left-0 right-0 fixed top-0 translate-y-0 bg-background shadow-xs'>
      <div className='transition-all duration-300 px-4 sm:px-6 py-4'>
        <div className='w-full flex items-center justify-between'>
          <a className="font-semibold tracking-widest" href="/">Блог</a>
          <NavMenu />
          <Auth></Auth>
        </div>
      </div>
    </header>
  )
}