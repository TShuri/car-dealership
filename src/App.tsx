import React from 'react'
import { Button } from './components/ui/button'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
        <div>
          <Button>Click</Button>
        </div>
			</header>
		</div>
	)
}

export default App
