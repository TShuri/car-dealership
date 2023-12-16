import React from 'react'

import NavigationMenu from './components/ui/NavigationMenu'
import CardCar from './components/ui/CardCar'
import Filter from './components/ui/Filter'

function App() {
	return (
		<div className='App'>
			<header className='bg-black'>
				<NavigationMenu></NavigationMenu>
			</header>
			<div className='px-5 flex'>
				<span>{'Главная->Автомобили'}</span>
				<div className='m-5'>
					<CardCar></CardCar>
				</div>
                <div className='m-5'>
					<Filter></Filter>
				</div>
                
			</div>
		</div>
	)
}

export default App
