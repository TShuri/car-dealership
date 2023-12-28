import { Outlet } from 'react-router-dom'

import React, { FC } from 'react'
import NavigationMenu from './ui/NavigationMenu'
import { Toaster } from './ui/toaster'

interface LayoutProps {
	logined: boolean
}

export const Layout: FC<LayoutProps> = ({logined}) => {
	
	return (
		<div>
			<header className='bg-black'>
				<NavigationMenu logined={logined}></NavigationMenu>
			</header>

			<div className='max-w-[1200px] p-5 m-auto min-h-screen'>
				<Outlet />
			</div>

			<Toaster/>

			<footer className='bg-black text-white'>2023</footer>
		</div>
	)
}
