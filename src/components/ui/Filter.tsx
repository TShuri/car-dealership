import { FC, useState } from 'react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './Select'
import { Input } from './Input'
import { Button } from './Button'

interface FilterProps {
	date?: boolean
}

const Filter: FC<FilterProps> = () => {
	// values
	const brands = [
		'BMW',
		'Audi',
		'Ford',
		'Chevrolet',
		'Toyota',
		'Mitsubishi',
		'Hyundai',
		'Kia',
		'-'
	]
	const models = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
		'-'
	]
	const years = [
		'2000',
		'2001',
		'2002',
		'2003',
		'2004',
		'2005',
		'2006',
		'2007',
		'2008',
		'2009',
		'2010',
		'2011',
		'2012',
		'2013',
		'2014',
		'2015',
		'2016',
		'2017',
		'2018',
		'2019',
		'2020',
		'2021',
		'2022',
		'-'
	]
	const colors = [
		'Белый',
		'Желтый',
		'Зеленый',
		'Красный',
		'Серый',
		'Синий',
		'Черный',
		'-'
	]
	const engines = ['Бензин', 'Дизель', 'Гибрид', '-']
	const gearboxes = ['АКПП', 'МКПП', '-']

	// states
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')
	const [year, setYear] = useState('')
	const [color, setColor] = useState('')
	const [Engine, setEngine] = useState('')
	const [gearbox, setGearbox] = useState('')
	const [powerFrom, setPowerFrom] = useState(0)
	const [powerTo, setPowerTo] = useState(300)
	const [priceFrom, setPriceFrom] = useState(1000000)
	const [priceTo, setPriceTo] = useState(7000000)

	// handlers
	const handlerBrand = (e: string) => {
		setBrand(e)
	}
	const handlerModel = (e: string) => {
		setModel(e)
	}
	const handlerColor = (e: string) => {
		setColor(e)
	}
	const handlerEngine = (e: string) => {
		setEngine(e)
	}
	const handlerGearbox = (e: string) => {
		setGearbox(e)
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
			<SelectItem key={item} value={20 + item}>
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
					<Select name='year' onValueChange={handlerModel}>
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
					<Button className='basis-1/2' variant={'outline'}>Сбросить</Button>
					<Button className='basis-1/2' variant='default'>Показать</Button>
				</div>
			</div>
		</>
	)
}

export default Filter
