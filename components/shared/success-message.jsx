import { Bot, LocateIcon } from 'lucide-react'
import Link from 'next/link'
import { BsCheckCircleFill } from 'react-icons/bs'
import { FcDocument } from 'react-icons/fc'

const SuccessMessage = () => {
	return (
		<div className='max-w-5xl mt-8 mx-auto border-2 bg-white dark:bg-[#193236] border-green-700 rounded-xl p-5'>
			<div className='flex gap-4 items-center'>
				<div>
					<BsCheckCircleFill
						className='text-green-700 rounded-full size-10'
						size={50}
					/>
				</div>
				<div className='flex gap-4'>
					🎉 <h1>Ariza muvaffaqiyatli qabul qilindi!</h1>
				</div>
			</div>
			<div className='pl-14'>
				<p>
					Ariza raqami: <span className='font-bold text-3xl'>#3</span>
				</p>
			</div>
			<div className='pl-14'>
				<div className='my-4 dark:border-[#042a4c] border-2 bg-slate-100 dark:bg-[#1a3750] rounded-xl p-5'>
					<div>
						<div className='flex gap-3 items-center'>
							<Bot />
							<p>AI Avtomatik javob:</p>
						</div>
						<p>
							Hurmatli fuqaro, murojaatingiz qabul qilindi va Elektr energiyasi
							bo`limiga yuborildi.
						</p>
						<div className='flex gap-3 items-center'>
							<LocateIcon />
							<p>
								<span>Yo`naltirildi:</span>
								Elektr energiyasi
							</p>
						</div>
					</div>
					<div></div>
				</div>
				<div className='w-fit'>
					<Link href={'/ariza/123'}>
						<button className='button'>
							{' '}
							<FcDocument /> Ariza holatini tekshirish
						</button>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default SuccessMessage
