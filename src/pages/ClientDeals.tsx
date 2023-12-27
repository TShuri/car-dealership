import { Car } from '../models/Car'
import CardDeal from '../components/ui/CardDeal'
import { FC, useState, useEffect } from 'react'
import CardDealType from '../models/CardDealType'
import { domain } from '../api/url'
import axios from 'axios'

interface DealsProps {
	employee?: boolean
	client?: boolean
}

const ClientDeals: FC<DealsProps> = ({ employee, client }) => {
    // states for get request
    const [deals, setDeals] = useState<CardDealType[]>([])

    useEffect(() => {
		const apiUrl = `${domain}/deals`
		axios.get(apiUrl, {
				params: {
					id_client: 10
				},
			})
			.then((response) => {
                setDeals(response.data)
            })
	},)

    const dealsRender = deals.map((el) => {
        return (
			<div key={el.id_deal}>
				<CardDeal
                    id_deal={el.id_deal}
                    date_deal={el.date}
					brand_car={el?.brand}
                    model_car={el?.model}
                    price_car={el?.price}
                    post_employee={el?.employee_post}
                    name_employee={el?.employee_name}
                    email_employee={el?.employee_email}
				></CardDeal>
			</div>
		)
    }

	return (
		<>
			<div className='grid grid-cols-1 gap-3'>
                <div>
                    <CardDeal></CardDeal>
                </div>

                <div>
                    <CardDeal></CardDeal>
                </div>
			</div>
		</>
	)
}

export default ClientDeals
