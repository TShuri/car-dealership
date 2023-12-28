import React, { useState } from 'react'

import { Routes, Route } from 'react-router-dom'

import Cars from './pages/Cars'
import ClientDeals from './pages/ClientDeals'
import EmployeeDeal from './pages/EmployeeDeals'
import ClientServices from './pages/ClientServices'
import NotFound from './pages/NotFound'
import { Layout } from './components/Layout'
import EmployeeServices from './pages/EmployeeServices'
import Login from './pages/Login'
import Logout from './pages/Logout'

function App() {
	const [logined, setLogined] = useState(false)
	return (
		<>
			<Routes>
				<Route path='/' element={<Layout logined={logined} />}>
					<Route index element={<Cars />} />
					<Route path='client/deals' element={<ClientDeals  />} />
					<Route path='employee/deals' element={<EmployeeDeal />} />
					<Route path='client/services' element={<ClientServices />} />
					<Route path='employee/services' element={<EmployeeServices />} />
					<Route path='login' element={<Login setLogined={setLogined} />} />
					<Route path='logout' element={<Logout setLogined={setLogined} />} />
					<Route path='*' element={<NotFound />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
