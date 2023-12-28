import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import ModalWindow from '../components/ui/ModalWindow'
import { FC } from 'react'

interface LogoutProps {
	logined?: boolean
    setLogined: (v: boolean) => void
}

const Logout: FC<LogoutProps> = ({logined, setLogined}) => {
	const navigate = useNavigate()

	const logoutUser = () => {
		localStorage.removeItem('id')
		localStorage.removeItem('login')
        localStorage.removeItem('group')
        localStorage.removeItem('name')

        setLogined(false)
        navigate("/login")
	}

	return (
		<ModalWindow active={true} setActive={() => {}}>
            <div className='flex flex-col mx-auto gap-2'>
                <h3 className='text-xl font-semibold'>Вы хотите выйти из аккаунта?</h3>
                <Button onClick={logoutUser}>Выйти из аккаунта</Button>
                <Button onClick={() => navigate(-1)}>Нет</Button>
            </div>
		</ModalWindow>
	)
}

export default Logout
