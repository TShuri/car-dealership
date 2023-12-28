import CardDeal from '../components/ui/CardDeal'
import { useState, useEffect } from 'react'
import {CardDealType} from '../models/CardDealType'
import { domain } from '../api/url'
import axios from 'axios'

const ClientDeals = () => {
    // states for get request
    const [deals, setDeals] = useState<CardDealType[]>([])
	const [fetching, setFetching] = useState(true)

    useEffect(() => {
		const apiUrl = `${domain}/client/deals`
		if (fetching) {
		axios.get(apiUrl, {
				params: {
					id_client: localStorage.getItem('id')
				},
			})
			.then((response) => {
                setDeals(response.data)
            })
			.finally(() => setFetching(false))
		}
	}, [fetching])

    const dealsRender = deals.map((el) => {
        return (
			<div key={el.id_deal}>
				<CardDeal
                    id_deal={el.id_deal}
                    date_deal={el.date}
					brand_car={el?.id_car__brand}
                    model_car={el?.id_car__model}
                    price_car={el?.id_car__price}
                    post_employee={el?.id_employee__post}
                    name_employee={el?.id_employee__name}
                    email_employee={el?.id_employee__email}
					name_client={el?.id_client__name}
					email_client={el?.id_client__email}
					phone_client={el?.id_client__phone}
				></CardDeal>
			</div>
		)
    })

	return (
		<>
			<h1 className='text-5xl font-semibold text-center border-b-black border-b-4 mb-5 pb-5'>Ваши сделки</h1>
			<div className='grid grid-cols-1 gap-3'>
                {dealsRender}
			</div>
		</>
	)
}

export default ClientDeals
