import { FC, useState } from 'react'

import { Button } from './Button'

interface CardServiceProps {
	brand_car?: string
	model_car?: string
	color_car?: string
	last_service?: string
	status_last_service?: boolean
	name_client?: string
	number_client?: string
}

const CardService: FC<CardServiceProps> = ({
	brand_car,
	model_car,
	color_car,
	last_service,
	status_last_service,
	name_client = '',
	number_client = '',
}) => {
	brand_car = 'BMW'
	model_car = 'X-2012'
	color_car = 'Черный'
	last_service = '20.05.2015'
	status_last_service = true

	const divStyle = 'flex flex-row gap-2 SM:flex-col SM:gap-0'

	const showClient = () => {
		if (name_client === '' && number_client === '') {
			return
		} else {
			return (
				<div className={divStyle}>
					<b>Клиент:</b>
					<span>{name_client}</span>
					<span>{number_client}</span>
				</div>
			)
		}
	}

	return (
		<>
			<div className='flex flex-col max-w-[600px] border-2 border-black rounded-md p-1'>
				<div className={divStyle}>
					<b>Автомобиль:</b>
					<span>{brand_car}</span>
					<span>{model_car}</span>
					<span>{color_car}</span>
				</div>

				{showClient()}

				<div className={divStyle}>
					<b>Последнее обслуживание:</b>
					<span>{last_service}</span>
					<b>Статус:</b>
					<span>
						{status_last_service ? 'Пройдено' : 'Не пройдено'}
					</span>
				</div>

				<div className='flex flex-row my-1'>
					<Button className='basis-1/2' variant={'outline'}>
						Посмотреть историю
					</Button>
					<Button className='basis-1/2' variant='default'>
						Записаться
					</Button>
				</div>
			</div>
		</>
	)
}

export default CardService
