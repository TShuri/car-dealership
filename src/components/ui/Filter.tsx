import { FC, useState } from 'react'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './Select'

import { Input } from './Input'

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
	]
	const years = [
		'00',
		'01',
		'02',
		'03',
		'04',
		'05',
		'06',
		'07',
		'08',
		'09',
		'10',
		'11',
		'12',
		'13',
		'14',
		'15',
		'16',
		'17',
		'18',
		'19',
		'20',
		'21',
		'22',
	]
	const colors = [
		'Белый',
		'Желтый',
		'Зеленый',
		'Красный',
		'Серый',
		'Синий',
		'Черный',
	]
	const engines = ['Бензин', 'Дизель', 'Гибрид']
	const gearboxes = ['АКПП', 'МКПП']
	// states
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')
	const [year, setYear] = useState('')
	const [color, setColor] = useState('')
	const [Engine, setEngine] = useState('')
	const [gearbox, setGearbox] = useState('')
	type powerType = {
		start: number;
		end: number;
	  }
	const [power, setPower] = useState<powerType>({
		start: 0,
		end: 0
	})

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
	const handlerPower = (e: {start:number, end:number}) => {
		setPower(e)
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
				{20 + item}
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
			<div className='flex flex-col w-[260px] border-2 border-black sm:w-[245px] rounded-md'>
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
							<SelectValue placeholder='Тип двигателя' />
						</SelectTrigger>
						<SelectContent>{gearboxesRender}</SelectContent>
					</Select>
				</div>

				<div className='self-center'>
					<span>Мощность</span>
				</div>
				<div className='flex flex-row'>
					<Input placeholder='От' value={power.start} onChange={(e) => handlerPower} />
					<p>{power.start}</p>
					<Input placeholder='До' value={power.end} onChange={(e) => handlerPower}/>
					<p>{power.start}</p>
				</div>

				<div className='self-center'>
					<span>Цена</span>
				</div>
				<div className='flex flex-row'>
					<Input placeholder='От' />
					<Input placeholder='До' />
				</div>
			</div>
		</>
	)
}

export default Filter
