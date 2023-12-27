import { FC, useState } from 'react'
import ModalWindow from './ModalWindow'
import { Button } from './Button'
import HistoryServices from './HistoryServices'
import AddService from './AddService'

interface CardServiceProps {
	id_car?: number
	brand?: string
	model?: string
	color?: string
}

const CardServiceClient: FC<CardServiceProps> = ({
	id_car,
	brand,
	model,
	color
}) => {
	//states for modal
	const [modalHistory, setModalHistory] = useState(false)
	const [modalAddService, setModalAddService] = useState(false)

	return (
		<>
			<div className='flex flex-row justify-between w-[600px] SM:w-full border-2 border-black rounded-md p-1'>
				<div className='flex flex-col p-2 gap-2'>
					<b>Ваш автомобиль:</b>
					<div className='flex flex-col gap-1 pl-2'>
						<span>{brand}</span>
						<span>{model}</span>
						<span>{color}</span>
					</div>

					<div className='flex flex-col gap-1'>
						<Button className='basis-1/2' variant={'outline'} onClick={() => setModalHistory(true)}>
							Посмотреть историю
						</Button>
						<Button className='basis-1/2' variant='default' onClick={() => setModalAddService(true)}>
							Записаться на ТО
						</Button>
					</div>
				</div>

				<div>
				<div>
					<img
						className='h-[185px] SM:h-[145px] object-cover hover:scale-105 duration-300 '
						src={process.env.PUBLIC_URL + `/${brand}.png`}
						alt='404'
					/>
				</div>

				<div>
					{ (modalHistory) ? 
					<ModalWindow active={modalHistory} setActive={setModalHistory}>
						<HistoryServices
							id_car={id_car}
						></HistoryServices>
					</ModalWindow> : ''
					}
				</div>

				<div>
					{ (modalAddService) ? 
					<ModalWindow active={modalAddService} setActive={setModalAddService}>
						<AddService
							id_car={id_car}
							closeModal={setModalAddService}
						></AddService>
					</ModalWindow> : ''
					}
				</div>

				</div>
			</div>
		</>
	)
}

export default CardServiceClient
