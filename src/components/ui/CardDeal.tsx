import { FC } from 'react'

interface CardDealProps {
	id_deal?: number
	date_deal?: string
	brand_car?: string
	model_car?: string
	price_car?: number
	post_employee?: string
	name_employee?: string
	email_employee?: string
	name_client?: string
	phone_client?: string
	email_client?: string
}

const CardDeal: FC<CardDealProps> = ({
	id_deal = 5413,
	date_deal = '19.01.2014',
	brand_car = 'BMW',
	model_car = 'X-2012',
	price_car = 3500000,
	post_employee = 'Менеджер',
	name_employee = 'Иванов Иван Иванович',
	email_employee = 'ivanov@gmail.com',
	name_client = 'Петров Петр Петрович',
	phone_client = '+79998887766',
	email_client = 'petrov@gmail.com'
}) => {
    const titleStyle = 'text-lg pl-3'
	const divStyle = 'flex flex-col'
    const divItemsStyle = 'flex flex-row gap-4 pl-3 SM:flex-col SM:gap-0'
    
    return (
		<>
			<div className='flex flex-col w-full border-2 border-black rounded-md p-1'>
				<div>
					<span className='text-sm pl-1 underline underline-offset-2'>Сделка №{id_deal}</span>
				</div>

				<div className={divStyle}>
					<b className={titleStyle}>Автомобиль</b>
					<div className={divItemsStyle}>
						<span>{brand_car}</span>
						<span>{model_car}</span>
					</div>
				</div>

				<div className={divStyle}>
					<b className={titleStyle}>Сотрудник автосалона</b>
					<div className={divItemsStyle}>
						<span>{post_employee}</span>
						<span>{name_employee}</span>
						<span>{email_employee}</span>
					</div>
				</div>

				<div className={divStyle}>
					<b className={titleStyle}>Клиент</b>
					<div className={divItemsStyle}>
						<span>{name_client}</span>
						<span>{email_client}</span>
						<span>{phone_client}</span>
					</div>
				</div>

				<div className={divStyle}>
					<b className={titleStyle}>Дата сделки</b>
					<div className={divItemsStyle}>
						<span>{date_deal}</span>
					</div>
				</div>

				<div className={divStyle}>
                    <b className={titleStyle}>Сумма сделки</b>
					<div className={divItemsStyle}>
						<span>{price_car} ₽</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardDeal
