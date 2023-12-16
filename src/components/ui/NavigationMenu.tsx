import { FC } from 'react'

interface NavigationMenuProps {
	pageCars?: string
	pageDeals?: string
	pageServices?: string
}

const NavigationMenu: FC<NavigationMenuProps> = ({
	pageCars,
	pageDeals,
	pageServices,
}) => {
	const itemStyle = 'mx-8 my-4 text-white hover:cursor-pointer hover:opacity-50 sm:mx-4'

	return (
		<>
			<div className='flex flex-row justify-center'>
				<div className={itemStyle}>
					<span>Автомобили</span>
				</div>
				<div className={itemStyle}>
					<span>Мои сделки</span>
				</div>
				<div className={itemStyle}>
					<span>ТО</span>
				</div>
			</div>
		</>
	)
}

export default NavigationMenu
