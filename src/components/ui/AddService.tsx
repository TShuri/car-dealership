import { FC, useState } from 'react'
import { Button } from './Button'
import { Input } from './Input'
import { domain } from '../../api/url'
import axios from 'axios'
import { Toaster } from "../../components/ui/toaster"
import { useToast } from "../../components/ui/use-toast"
import { exitCode } from 'process'


interface AddServiceProps {
	id_car?: number
    closeModal: (state:boolean) => void
}

const AddService: FC<AddServiceProps> = ({ id_car, closeModal }) => {
	//states for post request
	const [date, setDate] = useState('')
	const [response, setResponse] = useState('')
    const { toast } = useToast()

	const handlerDate = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDate(event.target.value)
	}

	const submit = () => {
		if (date === '') {
			return window.alert('Заполните дату')
		}
		const apiUrl = `${domain}/services/history`
		axios
			.post(apiUrl, {
				id_car: id_car,
				date: date,
				status: false,
			})
			.then((response) => {
				if (response.data !== 'ok') {
                    toast({
                        variant: 'destructive',
                        title: "Ошибка",
                        description: `Вы не можете выбрать данную дату, дата последнего ТО ${response.data}`,
                    })
				} else {
                    toast({
                        title: "Успешно",
                        description: `Вы успешно записались на ТО на ${date}`,
                    })
                    closeModal(false)
                }
			})
	}

	return (
		<>
			<div className='flex flex-col items-center mt-80 gap-10'>
				<h2 className='text-3xl font-medium mb-5'>
					Выберите дату записи на техническое обслуживание
				</h2>
				<p>
					Дата не должна быть ранее, чем сегодняшняя, а также не ранее
					даты последнеего ТО
				</p>
				<Input
					max="2030-04-30"
					type='date'
					className='w-1/3 border-2 border-black rounded-lg'
					onChange={handlerDate}
				/>
				<Button onClick={submit}>Записаться на ТО</Button>
			</div>
		</>
	)
}

export default AddService
