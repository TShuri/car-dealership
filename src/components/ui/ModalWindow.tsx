import React, { FC } from 'react'

interface ModalWindowProps {
    active: boolean
    setActive: (state: boolean) => void
    children?: React.ReactNode
}

const ModalWindow: FC<ModalWindowProps> = ({ active, setActive, children }) => {
	const windowStyle = `fixed top-0 left-0 h-full w-full flex items-center justify-center
                         bg-[rgba(0,0,0,0.5)] duration-500 backdrop-blur-sm ` 
                         + (active ? 'opacity-1 pointer-events-auto' : 'opacity-0 pointer-events-none')
	const contentStyle = `py-9 px-12 h-[90%] overflow-y-auto w-1/2 mobile:w-[90%] rounded-3xl bg-white delay-400 transition-all `
                          + (active ? 'scale-100' : 'scale-50')

	return (
		<div className={windowStyle} onClick={() => setActive(false)}>
			<div className={contentStyle} onClick={e => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default ModalWindow
