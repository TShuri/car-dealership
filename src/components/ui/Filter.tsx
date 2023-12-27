import { FC } from 'react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './Select'
import { Input } from './Input'
import { Button } from './Button'
import { brands, models, years, colors, engines, gearboxes } from '../../models/Car'

interface FilterProps {
	brand: string
	model: String
	year: string
	color: string
	engine: string
	gearbox: string
	powerFrom: number
	powerTo: number
	priceFrom: number
	priceTo: number
	setBrand: (value: string) => void
	setModel: (value: string) => void
	setYear: (value: string) => void
	setColor: (value: string) => void
	setEngine: (value: string) => void
	setGearbox: (value: string) => void
	setPowerFrom: (value: number) => void
	setPowerTo: (value: number) => void
	setPriceFrom: (value: number) => void
	setPriceTo: (value: number) => void

	clickFiltered: () => void
}

const Filter: FC<FilterProps> = ({
	brand,
	model,
	year,
	color,
	engine,
	gearbox,
	powerFrom,
	powerTo,
	priceFrom,
	priceTo,
	setBrand,
	setModel,
	setYear,
	setColor,
	setEngine,
	setGearbox,
	setPowerFrom,
	setPowerTo,
	setPriceFrom,
	setPriceTo,

	clickFiltered
}) => {
	// handlers
	const handlerBrand = (e: string) => {
		e ==='-' ? setBrand('') : setBrand(e)
	}
	const handlerModel = (e: string) => {
		e ==='-' ? setModel('') : setModel(e)
	}
	const handlerYear = (e: string) => {
		e ==='-' ? setYear('') : setYear(e)
	}
	const handlerColor = (e: string) => {
		e ==='-' ? setColor('') : setColor(e)
	}
	const handlerEngine = (e: string) => {
		e ==='-' ? setEngine('') : setEngine(e)
	}
	const handlerGearbox = (e: string) => {
		e ==='-' ? setGearbox('') : setGearbox(e)
	}
	const handlerPowerFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPowerFrom(Number(event.target.value))
	}
	const handlerPowerTo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPowerTo(Number(event.target.value))
	}
	const handlerPriceFrom = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPriceFrom(Number(event.target.value))
	}
	const handlerPriceTo = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPriceTo(Number(event.target.value))
	}

	// renders
	const brandsRender = brands.map((item) => {
		return (
			<SelectItem key={item} value={item}>
				{item}
			</SelectItem>
		)
	})
	const modelsRender = models.map((item) => {
		return (
			<SelectItem key={item} value={item}>
				{item}
			</SelectItem>
		)
	})
	const yearsRender = years.map((item) => {
		return (
			<SelectItem key={item} value={item}>
				{item}
			</SelectItem>
		)
	})
	const colorsRender = colors.map((item) => {
		return (
			<SelectItem key={item} value={item}>
				{item}
			</SelectItem>
		)
	})
	const enginesRender = engines.map((item) => {
		return (
			<SelectItem key={item} value={item}>
				{item}
			</SelectItem>
		)
	})
	const gearboxesRender = gearboxes.map((item) => {
		return (
			<SelectItem key={item} value={item}>
				{item}
			</SelectItem>
		)
	})

	// funtionClickButton
	const thorwFilter = () => {
		setBrand('')
		setModel('')
		setYear('')
		setColor('')
		setEngine('')
		setGearbox('')
		setPowerFrom(0)
		setPowerTo(300)
		setPriceFrom(1000000)
		setPriceTo(7000000)

		clickFiltered()
	}

	return (
		<>
			<div className='flex flex-col w-[260px] border-2 border-black sm:w-[245px] rounded-md p-1'>
				<div className='self-center'>
					<b>Фильтр</b>
				</div>

				<div>
					<Select name='brand' onValueChange={handlerBrand}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Бренд' />
						</SelectTrigger>
						<SelectContent>{brandsRender}</SelectContent>
					</Select>
				</div>

				<div>
					<Select name='model' onValueChange={handlerModel}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Модель' />
						</SelectTrigger>
						<SelectContent>{modelsRender}</SelectContent>
					</Select>
				</div>

				<div>
					<Select name='year' onValueChange={handlerYear}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Год' />
						</SelectTrigger>
						<SelectContent>{yearsRender}</SelectContent>
					</Select>
				</div>

				<div>
					<Select name='color' onValueChange={handlerColor}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Цвет' />
						</SelectTrigger>
						<SelectContent>{colorsRender}</SelectContent>
					</Select>
				</div>

				<div>
					<Select name='engine' onValueChange={handlerEngine}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Тип двигателя' />
						</SelectTrigger>
						<SelectContent>{enginesRender}</SelectContent>
					</Select>
				</div>

				<div>
					<Select name='gearbox' onValueChange={handlerGearbox}>
						<SelectTrigger className='w-full'>
							<SelectValue placeholder='Тип кпп' />
						</SelectTrigger>
						<SelectContent>{gearboxesRender}</SelectContent>
					</Select>
				</div>

				<div className='self-center'>
					<span>Мощность (л.с.)</span>
				</div>
				<div className='flex flex-row'>
					<Input
						name='powerFrom'
						type='number'
						min={100}
						max={300}
						maxLength={3}
						placeholder='От'
						onChange={handlerPowerFrom}
					/>
					<Input
						name='powerTo'
						type='number'
						min={100}
						max={300}
						maxLength={3}
						placeholder='До'
						onChange={handlerPowerTo}
					/>
				</div>

				<div className='self-center'>
					<span>Цена ₽</span>
				</div>
				<div className='flex flex-row'>
					<Input
						name='priceFrom'
						type='number'
						min={1000000}
						max={7000000}
						maxLength={7}
						placeholder='От'
						onChange={handlerPriceFrom}
					/>
					<Input
						name='priceTo'
						type='number'
						min={1000000}
						max={7000000}
						maxLength={7}
						placeholder='До'
						onChange={handlerPriceTo}
					/>
				</div>

				<div className='flex flex-row my-1'>
					<Button className='basis-1/2' variant={'outline'} onClick={thorwFilter}>
						Сбросить
					</Button>
					<Button className='basis-1/2' variant='default' onClick={clickFiltered}>
						Показать
					</Button>
				</div>
			</div>
		</>
	)
}

export default Filter
