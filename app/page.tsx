import { Settings } from 'lucide-react'
import Chat from './../components/shared/chat'
import Hero from './../components/shared/hero'

const page = () => {
	return (
		<div>
			<div className='bg-red-500 py-3 text-center fixed top-0 w-full flex justify-center gap-5 z-50'>
				<h1>Beta versiyada ishlamoqda...</h1>
				<div className='animate-bounce'>
					<Settings
						className='animate-spin '
						style={{ animationDuration: '3s' }}
					/>
				</div>
			</div>
			<Hero />
			<Chat />
		</div>
	)
}

export default page
