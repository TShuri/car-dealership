import CardService from '../components/ui/CardService'
import Search from '../components/ui/Search'
import { FC, useState } from 'react'

interface ServicesProps {
	employee?: boolean
	client?: boolean
}

const Services: FC<ServicesProps> = ({ employee, client }) => {
	return (
		<>
			<div className='grid grid-cols-1 gap-3'>
				<div>
                    <Search></Search>
                </div>

                <div>
                    <CardService></CardService>
                </div>

                <div>
                    <CardService></CardService>
                </div>

                <div>
                    <CardService></CardService>
                </div>
			</div>
		</>
	)
}

export default Services
