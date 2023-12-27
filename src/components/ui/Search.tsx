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
import { brands, models } from '../../models/Car'

interface SearchProps {
	price_date?: boolean
	name_number?: boolean
	brand: string
	model: string
	setBrand: (value: string) => void
	setModel: (value: string) => void

	clickShow: () => void
}

const Search: FC<SearchProps> = ({ price_date, name_number, brand, model, setBrand, setModel, clickShow }) => {
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
