import React from 'react'

import NavigationMenu from './components/ui/NavigationMenu'
import CardCar from './components/ui/CardCar'
import Filter from './components/ui/Filter'
import CardDeal from './components/ui/CardDeal'
import CardService from './components/ui/CardService'
import Search from './components/ui/Search'
import Cars from './pages/Cars'
import Deals from './pages/Deals'
import Services from './pages/Services'

function App() {
	return (
		<div className=''>
			<header className='bg-black'>
				<NavigationMenu></NavigationMenu>
			</header>
			<div className='max-w-[1200px] p-5 m-auto'>
				<Cars></Cars>
			</div>
		</div>
	)
}

export default App
