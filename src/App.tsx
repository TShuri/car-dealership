import React from 'react'

import { Routes, Route } from 'react-router-dom'

import Cars from './pages/Cars'
import ClientDeals from './pages/ClientDeals'
import EmployeeDeal from './pages/EmployeeDeals'
import ClientServices from './pages/ClientServices'
import NotFound from './pages/NotFound'
import { Layout } from './components/Layout'

function App() {
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Cars />} />
					<Route path='client/deals' element={<ClientDeals />} />
					<Route path='employee/deals' element={<EmployeeDeal />} />
					<Route path='services' element={<ClientServices />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
