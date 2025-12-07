import { LocationEditIcon } from 'lucide-react'
import { MdLocationOn } from 'react-icons/md'
import { Label } from '../ui/label'

const Location = () => {
	return (
		<div className='dark:bg-[#1e2836] bg-white rounded-xl p-5'>
			<div>
				<div className='flex items-center gap-4'>
					<div className='bg-green-700 rounded-md size-14 flex items-center justify-center'>
						<LocationEditIcon size={30} className='text-white' />
					</div>

					<div>
						<h1 className='text-2xl font-bold'>Muammo joylashuvi</h1>
					</div>
				</div>
				<div className='mt-5'>
					<Label>
						<span className='text-red-500'>*</span>
						Xaritada muammo joylashgan hududni tanlang
					</Label>
				</div>

				<div className='w-fit my-5'>
					<button className='button'>
						<MdLocationOn size={20} />
						Mening joylashuyimni aniqlash
					</button>
				</div>

				<div>
					<iframe
						className='w-full h-60'
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48126.29110286201!2d71.78316478329923!3d41.07132724134208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb53171d45fdc1%3A0x42561f3e8ba4c90e!2sChortoq%2C%20Namangan%20viloyati%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1764877643067!5m2!1suz!2s'
						allowFullScreen=''
						loading='lazy'
						referrerPolicy='no-referrer-when-downgrade'
					></iframe>
				</div>
			</div>
		</div>
	)
}

export default Location
