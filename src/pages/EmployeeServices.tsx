import CardServiceEmployee from '../components/ui/CardServiceEmployee'
import { EmployeeCarService } from '../models/EmployeeCarService'
import { useState, useEffect } from 'react'
import { domain } from '../api/url'
import axios from 'axios'
import { Toaster } from '../components/ui/toaster'
import Search from '../components/ui/Search'

const EmployeeServices = () => {
    // states for get request
    const [clientCars, setClientCars] = useState<EmployeeCarService[]>([])
    const [fetching, setFetching] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
	const [empty, setEmpty] = useState(false)

    // states for search
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')

    useEffect(() => {
		const apiUrl = `${domain}/employee/services`
		if (fetching) {
		axios.get(apiUrl, {
				params: {
					page: currentPage,
					id_employee: localStorage.getItem('id'),
					brand: brand,
					model: model,
				},
			})
			.then((response) => {
				if (response.data['Empty']) {
					setEmpty(true)
				} else {
					setClientCars([...clientCars, ...response.data])
					setCurrentPage(prevState => prevState + 1)
				}
            })
			.finally(() => setFetching(false))
		}
	}, [fetching])

    useEffect(() => {
		document.addEventListener('scroll', scrollHandler)
		return function () {
			document.removeEventListener('scroll', scrollHandler)
		}
	}, )

	const scrollHandler = (e:any) => {
		if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 )
			&& (empty===false)) {
			setFetching(true)
		}
	}

    const clientCarsRender = clientCars.map((el) => {
        return (
			<div key={el.id_car}>
				<CardServiceEmployee
					id_car={Number(el?.id_car)}
                    brand={el?.id_car__brand}
                    model={el?.id_car__model}
                    color={el?.id_car__color}
                    name={el?.id_client__name}
				></CardServiceEmployee>
			</div>
		)
    })

    const searched = () => {
		setClientCars([])
		setCurrentPage(1)
		setFetching(true)
		setEmpty(false)
	}

	return (
		<>
			<h1 className='text-5xl font-semibold text-center border-b-black border-b-4 mb-5 pb-5'>Обслуживание автомобилей ваших клиентов</h1>
			<div className='flex justify-center mb-2'>
						<Search
							brand={brand}
							model={model}
							setBrand={setBrand}
							setModel={setModel}
							clickSearched={searched}
							></Search>
					</div>
            <div className='flex flex-col items-center gap-2'>
                {clientCarsRender}
			</div>
			<Toaster/>
		</>
	)
}

export default EmployeeServices
