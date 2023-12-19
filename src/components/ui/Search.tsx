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

interface SearchProps {
	price_date?: boolean
	name_number?: boolean
}

const Search: FC<SearchProps> = ({ price_date, name_number }) => {
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
		'-',
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
		'-',
	]

	// states
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')

	// handlers
	const handlerBrand = (e: string) => {
		setBrand(e)
	}
	const handlerModel = (e: string) => {
		setModel(e)
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

	return (
		<>
			<div className='flex flex-col w-[260px] border-2 border-black sm:w-[245px] rounded-md p-1'>
				<div className='self-center'>
					<b>Поиск</b>
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

				<div className='flex flex-row my-1'>
					<Button className='basis-1/2' variant={'outline'}>
						Сбросить
					</Button>
					<Button className='basis-1/2' variant='default'>
						Найти
					</Button>
				</div>
			</div>
		</>
	)
}

export default Search
