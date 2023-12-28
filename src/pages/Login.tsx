import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import axios from 'axios'
import { FC, useState } from 'react'
import { Toaster } from '../components/ui/toaster'
import { useToast } from "../components/ui/use-toast"
import { domain } from '../api/url'
import { useNavigate } from 'react-router-dom'

interface LoginProps {
	logined?: boolean
    setLogined: (v: boolean) => void
}

const Login: FC<LoginProps> = ({logined, setLogined}) => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
    
    const { toast } = useToast()
    const navigate = useNavigate()
    

    const handlerUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }
    const handlerPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

	const loginUser = async () => {
        console.log(localStorage.getItem('id'))
		try {
            const apiUrl = `${domain}/auth/`
			const response = await axios.post(apiUrl, {
				username,
				password,
			})
			localStorage.setItem('id', response.data.id)
			localStorage.setItem('login', response.data.login)
			localStorage.setItem('group', response.data.group)
			localStorage.setItem('name', response.data.name)

            setLogined(true)

            toast({
                title: "Успешная авторизация",
                description: `Вы успешно вошли в аккаунт ${response.data.name}`,
            })

            navigate('/')
		} catch (err) {
            toast({
                variant: 'destructive',
                title: "Ошибка авторизации",
                description: `Неверный логин или пароль!`,
            })
		}
	}

	return (
		<>  <h1 className='font-bold text-5xl text-center border-black border-b-4 p-5 m-5'>Авторизация</h1>
			<div className='flex justify-center mt-5'>
				<div className='flex flex-col gap-4 w-[500px] border-black border-2 rounded-2xl p-5'>
					<h2 className='text-2xl'>Авторизация</h2>
					<div>
						<span>Login(email)</span>
						<Input type='email' onChange={handlerUsername}/>
					</div>
					<div className=''>
						<span>Password</span>
						<Input type='password' onChange={handlerPassword}/>
					</div>
					<Button onClick={loginUser}>Авторизоваться</Button>
				</div>
			</div>
		</>
	)
}

export default Login
