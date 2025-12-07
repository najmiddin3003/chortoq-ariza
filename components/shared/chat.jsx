'use client'

import { X } from 'lucide-react'
import { useState } from 'react'

export default function Chat() {
	const [open, setOpen] = useState(false)
	const [text, setText] = useState('')
	const [messages, setMessages] = useState([])

	const sendMessage = () => {
		if (!text.trim()) return
		setMessages([...messages, text])
		setText('')
	}

	return (
		<>
			<button
				onClick={() => setOpen(true)}
				className='fixed bottom-6 right-6 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition z-40'
			>
				Chat
			</button>

			{open && (
				<div
					onClick={() => setOpen(false)}
					className='fixed inset-0 bg-black/20 z-40'
				/>
			)}

			{open && (
				<div
					onClick={e => e.stopPropagation()}
					className='fixed bottom-4 right-4 w-[400px] h-[460px] bg-white dark:bg-[#121b2c] rounded-xl shadow-2xl border flex flex-col z-50 animate-slideUp'
				>
					<div className='flex items-center justify-between px-4 py-3 border-b !font-light'>
						<span>Jonli chat</span>
						<button
							onClick={() => setOpen(false)}
							className='text-gray-500 hover:text-black text-lg'
						>
							<X size={30} className='cursor-pointer' />
						</button>
					</div>

					{/* MESSAGES */}
					<div className='flex-1 overflow-y-auto p-3 space-y-2'>
						{messages.map((msg, i) => (
							<div
								key={i}
								className='bg-blue-500 text-white px-3 py-2 rounded-lg w-fit ml-auto !font-light'
							>
								{msg}
							</div>
						))}
					</div>

					{/* INPUT */}
					<div className='border-t p-2 flex gap-2 '>
						<input
							value={text}
							onChange={e => setText(e.target.value)}
							onKeyDown={e => e.key === 'Enter' && sendMessage()}
							placeholder='Xabar yozing...'
							className='flex-1 border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500'
						/>
						<button
							onClick={sendMessage}
							className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700'
						>
							Jo`natish
						</button>
					</div>
				</div>
			)}
		</>
	)
}
