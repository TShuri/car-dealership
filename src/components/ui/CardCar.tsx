import { FC } from 'react'

interface CardCarProps {
	brand?: string
	model?: string
	color?: string
	price?: number
	engine?: string
	power?: string
	gearbox?: string
}

const CardCar: FC<CardCarProps> = ({
	brand = 'BMW',
	model = 'X-2012',
	color = 'Черный',
	price = 3000000,
	engine = 'Бензин',
	power = '220',
	gearbox = 'Автомат'
}) => {
	return (
		<>
			<div className='flex flex-col items-center w-[275px] border-2 border-black SM:w-[245px] rounded-sm'>
				<div>
					<img
						className='h-[185px] SM:h-[145px] object-cover'
						src={process.env.PUBLIC_URL + `/${brand}.png`}
						alt='404'
					/>
				</div>
				<div className='flex flex-col items-center self-stretch gap-2 bg-gray-200 hover:cursor-pointer hover:opacity-50 duration-300'>
					<div className='text-4xl font-bold'>
						<span>{brand}</span>
					</div>
					<div className='text-2xl font-semibold'>
						<span>{model}</span>
					</div>
					<div className='flex flex-col border-y-2 border-black'>
						<span>Цвет: {color}</span>
						<span>Тип двигателя: {engine}</span>
						<span>Тип КПП: {gearbox}</span>
						<span>Мощность: {power} л.с.</span>
					</div>
					<div className='tracking-widest'>
						<span>{price} ₽</span>
					</div>
				</div>
			</div>
		</>
	)
}

export default CardCar
