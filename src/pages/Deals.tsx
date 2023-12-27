import CardDeal from '../components/ui/CardDeal'
import Search from '../components/ui/Search'
import { FC, useState } from 'react'

interface DealsProps {
	employee?: boolean
	client?: boolean
}

const Deals: FC<DealsProps> = ({ employee, client }) => {
	return (
		<>
			<div className='grid grid-cols-1 gap-3'>
				<div>
					{/* <Search></Search> */}
				</div>

                <div>
                    <CardDeal></CardDeal>
                </div>

                <div>
                    <CardDeal></CardDeal>
                </div>
			</div>
		</>
	)
}

export default Deals
