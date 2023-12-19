import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface NavigationMenuProps {
	pageCars?: string
	pageDeals?: string
	pageServices?: string
}

interface activeLink {
	isActive: boolean
}
type setActiveLink = (props: activeLink) => string;

const NavigationMenu: FC<NavigationMenuProps> = ({
	pageCars,
	pageDeals,
	pageServices,
}) => {
	const itemStyle = 'flex items-center mx-8 my-4 text-white hover:cursor-pointer hover:opacity-50 SM:mx-4'

	const setActive: setActiveLink = ({isActive})=>isActive ? 'opacity-60 underline underline-offset-2' : ''

	return (
		<>
			<div className='flex flex-row justify-center'>
				<div className={itemStyle}>
					<NavLink to='/' className={setActive}>Автомобили</NavLink>
				</div>
				<div className={itemStyle}>
					<NavLink to='/deals' className={setActive}>Мои сделки</NavLink>
				</div>
				<div className={itemStyle}>
					<NavLink to='/services' className={setActive}>Тех обслуживание</NavLink>
				</div>
			</div>
		</>
	)
}

export default NavigationMenu
