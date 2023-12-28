import { FC } from 'react'
import { NavLink } from 'react-router-dom'

interface NavigationMenuProps {
	logined: boolean
}

interface activeLink {
	isActive: boolean
}
type setActiveLink = (props: activeLink) => string

const NavigationMenu: FC<NavigationMenuProps> = ({
	logined
}) => {
	const itemStyle =
		'flex items-center mx-8 my-4 text-white hover:cursor-pointer hover:opacity-50 SM:mx-4 duration-300'

	const setActive: setActiveLink = ({ isActive }) =>
		isActive ? 'opacity-60 underline underline-offset-2' : ''

	const checkDealsRender = () => {
		if (localStorage.getItem('group') === 'Client') {
			return (
				<NavLink to='client/deals' className={setActive}>Мои сделки</NavLink>
			)
		}
		if (localStorage.getItem('group') === 'Employee') {
			return (
				<NavLink to='employee/deals' className={setActive}>Мои сделки</NavLink>
			)
		}
	}

	const checkServicesRender = () => {
		if (localStorage.getItem('group') === 'Client') {
			return (
				<NavLink to='client/services' className={setActive}>Тех обслуживание</NavLink>
			)
		}
		if (localStorage.getItem('group') === 'Employee') {
			return (
				<NavLink to='employee/services' className={setActive}>Тех обслуживание</NavLink>
			)
		}
	}

	return (
		<>
			<div className='grid grid-cols-6'>
				<div></div>
				<div className='col-start-2 col-span-4 flex flex-row justify-center'>
					<div className={itemStyle}>
						<NavLink to='/' className={setActive}>
							Автомобили
						</NavLink>
					</div>
					<div className={itemStyle}>
						{logined? checkDealsRender() :
						<NavLink to='/login' className={setActive}>
							Мои сделки
						</NavLink>
						}
					</div>
					<div className={itemStyle}>
						{logined? checkServicesRender() :
							<NavLink to='/login' className={setActive}>
								Тех обслуживание
							</NavLink>
						}
					</div>
				</div>

				<div className='flex justify-end pe-10 my-4 text-white hover:cursor-pointer hover:opacity-50 SM:mx-4 duration-300'>
					{ logined?
						<NavLink to='/logout'>Выйти</NavLink> : 
						<NavLink to='/login'>Войти</NavLink>
					}
				</div>
			</div>
		</>
	)
}

export default NavigationMenu
