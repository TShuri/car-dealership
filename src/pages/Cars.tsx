import CardCar from '../components/ui/CardCar'
import Filter from '../components/ui/Filter'
import { FC, useEffect, useState } from 'react'
import { Car } from '@/models/Car'
import { domain } from '../api/url'
import axios from 'axios'

interface CarsProps {
	employee?: boolean
	client?: boolean
}

const Cars: FC<CarsProps> = ({ employee, client }) => {
	// states for get request
	const [cars, setCars] = useState<Car[]>([])
	const [currentPage, setCurrentPage] = useState(1)
	const [fetching, setFetching] = useState(true)
	const [empty, setEmpty] = useState(false)

	// states for filter
	const [brand, setBrand] = useState('')
	const [model, setModel] = useState('')
	const [year, setYear] = useState('')
	const [color, setColor] = useState('')
	const [engine, setEngine] = useState('')
	const [gearbox, setGearbox] = useState('')
	const [powerFrom, setPowerFrom] = useState(0)
	const [powerTo, setPowerTo] = useState(300)
	const [priceFrom, setPriceFrom] = useState(1000000)
	const [priceTo, setPriceTo] = useState(7000000)

	useEffect(() => {
		const apiUrl = `${domain}/cars`
		if (fetching) {
			console.log('fetching')
			console.log(cars.length)
			axios.get(apiUrl, {
					params: {
						page: currentPage,
						brand: brand,
						model: model,
						year: year,
						color: color,
						engine: engine,
						gearbox: gearbox,
						powerFrom: powerFrom,
						powerTo: powerTo,
						priceFrom: priceFrom,
						priceTo: priceTo,
					},
				})
				.then((response) => {
					if (response.data['Empty']) {
						setEmpty(true)
					} else {
						setCars([...cars, ...response.data])
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

	const carsRender = cars.map((el) => {
		return (
			<div key={el.id_car}>
				<CardCar
					brand={el?.brand}
					model={el?.model}
					color={el?.color}
					engine={el?.engine}
					gearbox={el?.gearbox}
					power={el?.power}
					price={el?.price}
				></CardCar>
			</div>
		)
	})

	const filtered = () => {
		setCars([])
		setCurrentPage(1)
		setFetching(true)
		setEmpty(false)
	}

	return (
		<>
			<div className='grid grid-cols-4 gap-3 place-items-center XL:grid-cols-3 MD:grid-cols-2 SS:grid-cols-1'>
				<div>
					<Filter
						brand={brand}
						model={model}
						year={year}
						color={color}
						engine={engine}
						gearbox={gearbox}
						powerFrom={powerFrom}
						powerTo={powerTo}
						priceFrom={priceFrom}
						priceTo={priceTo}
						setBrand={setBrand}
						setModel={setModel}
						setYear={setYear}
						setColor={setColor}
						setEngine={setEngine}
						setGearbox={setGearbox}
						setPowerFrom={setPowerFrom}
						setPowerTo={setPowerTo}
						setPriceFrom={setPriceFrom}
						setPriceTo={setPriceTo}

						clickFiltered={filtered}
					></Filter>
				</div>
				{carsRender}
			</div>
		</>
	)
}

export default Cars
