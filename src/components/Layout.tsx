import { Outlet } from 'react-router-dom'

import React from 'react'
import NavigationMenu from './ui/NavigationMenu'

export const Layout = () => {
	return (
		<div>
			<header className='bg-black'>
				<NavigationMenu></NavigationMenu>
			</header>

			<div className='max-w-[1200px] p-5 m-auto min-h-screen'>
				<Outlet />
			</div>

			<footer className='bg-black text-white'>2023</footer>
		</div>
	)
}
