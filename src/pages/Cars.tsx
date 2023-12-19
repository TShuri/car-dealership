import CardCar from '../components/ui/CardCar'
import Filter from '../components/ui/Filter'
import { FC, useState } from 'react'

interface CarsProps {
	employee?: boolean
	client?: boolean
}

const Cars: FC<CarsProps> = ({ employee, client }) => {
	return (
		<>
			<div className='grid grid-cols-4 gap-3 place-items-center XL:grid-cols-3 MD:grid-cols-2 SS:grid-cols-1'>
				<div>
					<Filter></Filter>
				</div>

                <div>
                    <CardCar></CardCar>
                </div>

                <div>
                    <CardCar></CardCar>
                </div>

                <div>
                    <CardCar></CardCar>
                </div>

                <div>
                    <CardCar></CardCar>
                </div>

                <div>
                    <CardCar></CardCar>
                </div>

                <div>
                    <CardCar></CardCar>
                </div>
                
                <div>
                    <CardCar></CardCar>
                </div>

                <div>
                    <CardCar></CardCar>
                </div>
			</div>
		</>
	)
}

export default Cars
