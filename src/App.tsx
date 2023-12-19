import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Cars from './pages/Cars'
import Deals from './pages/Deals'
import Services from './pages/Services'
import NotFound from './pages/NotFound'
import { Layout } from './components/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Cars />} />
					<Route path='deals' element={<Deals />} />
					<Route path='services' element={<Services />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
