import CardServiceClient from '../components/ui/CardServiceClient'
import { ClientCarService } from '@/models/ClientCarService'
import { useState, useEffect } from 'react'
import { domain } from '../api/url'
import axios from 'axios'
import { Toaster } from '../components/ui/toaster'



const ClientServices = () => {
    const [clientCars, setClientCars] = useState<ClientCarService[]>([])
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
		const apiUrl = `${domain}/client/services`
		if (fetching) {
		axios.get(apiUrl, {
				params: {
					id_client: localStorage.getItem('id')
				},
			})
			.then((response) => {
                setClientCars(response.data)
            })
			.finally(() => setFetching(false))
		}
	}, [fetching])

    const clientCarsRender = clientCars.map((el) => {
        return (
			<div key={el.id_car}>
				<CardServiceClient
					id_car={Number(el?.id_car)}
                    brand={el?.id_car__brand}
                    model={el?.id_car__model}
                    color={el?.id_car__color}
				></CardServiceClient>
			</div>
		)
    })

	return (
		<>
			<h1 className='text-5xl font-semibold text-center border-b-black border-b-4 mb-5 pb-5'>Обслуживание ваших автомобилей</h1>
			<div className='flex flex-col items-center gap-2'>
                {clientCarsRender}
			</div>
			<Toaster/>
		</>
	)
}

export default ClientServices
