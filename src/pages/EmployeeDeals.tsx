import CardDeal from '../components/ui/CardDeal'
import { FC, useState, useEffect } from 'react'
import {CardDealType} from '../models/CardDealType'
import { domain } from '../api/url'
import axios from 'axios'
import Search from '../components/ui/Search'

interface DealsProps {
	employee?: boolean
	client?: boolean
}

const EmployeeDeal: FC<DealsProps> = ({ employee, client }) => {
    // states for get request
    const [deals, setDeals] = useState<CardDealType[]>([])
	const [fetching, setFetching] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [empty, setEmpty] = useState(false)

	// states for search
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')

    useEffect(() => {
		const apiUrl = `${domain}/employee/deals`
		if (fetching) {
		axios.get(apiUrl, {
				params: {
					page: currentPage,
					id_employee: 341,
					brand: brand,
					model: model,
				},
			})
			.then((response) => {
				if (response.data['Empty']) {
					setEmpty(true)
				} else {
					setDeals([...deals, ...response.data])
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

	const searched = () => {
		setDeals([])
		setCurrentPage(1)
		setFetching(true)
		setEmpty(false)
	}

	return (
		<>
			<div className='grid grid-cols-1 gap-3'>
				<div className='grid grid-cols-3'>
					<div className=''>
						<Search
							brand={brand}
							model={model}
							setBrand={setBrand}
							setModel={setModel}
							clickSearched={searched}
							></Search>
					</div>
					<h1 className='text-5xl font-semibold text-center col-span-2 pt-10 border-b-black border-b-4'>Ваши сделки</h1>
				</div>
                {dealsRender}
			</div>
		</>
	)
}

export default EmployeeDeal
