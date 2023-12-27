import { FC, useState, useEffect } from 'react'
import { Button } from './Button'
import { HistoryServicesType } from '../../models/HistoryServicesType'
import { domain } from '../../api/url'
import axios from 'axios'

interface HistoryServicesProps {
    id_car?: number
	brand?: string
	model?: string
	color?: string
}

const HistoryServices: FC<HistoryServicesProps> = ({
    id_car,
	brand,
	model,
	color,
}) => {
	//states for get request
    const [services, setServices] = useState<HistoryServicesType[]>([])
	const [fetching, setFetching] = useState(true)

    useEffect(() => {
		const apiUrl = `${domain}/services/history`
		if (fetching) {
		axios.get(apiUrl, {
				params: {
					id_car: id_car
				},
			})
			.then((response) => {
                setServices(response.data)
            })
			.finally(() => setFetching(false))
		}
	}, [fetching])

    const historyRender = services.map((el) => {
        return (
			<div key={el.id_service} className='flex flex-row gap-10 text-xl hover:opacity-50 duration-300'>
                <div>
                    <b>Дата: </b>
                    <span>{el?.date}</span>
                </div>
                <div>
                    <b>Статус: </b>
                    <span>{(el?.status) ? 'Пройдено' : 'Не пройдено'}</span>
                </div>
			</div>
		)
    })

	return (
		<>
            <div className='flex flex-col items-center'>
                <h1 className='text-4xl font-bold pt-10 mb-10'>История обслуживания:</h1>	
                <div>
                    {historyRender}
                </div>
            </div>
		</>
	)
}

export default HistoryServices
