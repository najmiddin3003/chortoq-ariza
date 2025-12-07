import { GoAlertFill } from 'react-icons/go'
import { RiAlertLine } from 'react-icons/ri'

const Alert = () => {
	return (
		<div>
			<div className='flex gap-4 items-center'>
				<div>
					<GoAlertFill size={30} className='text-[#f9c812] scale-icon' />
				</div>
				<div>
					<div className='flex gap-2 items-center'>
						<RiAlertLine className='text-yellow-500' size={25} />
						<h2 className='text-yellow-500 font-bold text-2xl'>
							Muhim Ogohlantirish
						</h2>
					</div>
				</div>
			</div>

			<div className='text-[#f9c812] pl-12 mt-5'>
				<p>
					<span className='font-bold '>Qonuniy javobgarlik: </span>
					<span className='opacity-90'>
						O`zbekiston Respublikasi qonunchiligiga muvofiq, noo`rin so`zlar,
						haqorat, yolg`on ma`lumotlar yoki qasddan noto`g`ri ma`lumot berish
						uchun javobgarlik nazarda tutilgan.
					</span>
				</p>{' '}
				<br />
				<p className='font-bold'>O`zbekiston Respublikasi Jinoyat kodeksi:</p>
				<br />
				<div className='flex items-center'>
					<div className='w-1.5 h-1.5 bg-[#f9c812] rounded-full mr-5'></div>
					<p className='text-[14px]'>
						<span className='font-bold'>104-moddasi </span>
						<span className='opacity-90'>
							- &quot;Haqorat&quot; - 1 yilgacha ozodlikdan mahrum qilish yoki
							jarima •
						</span>
					</p>
				</div>
				<div className='flex items-center'>
					<div className='w-1.5 h-1.5 bg-[#f9c812] rounded-full mr-5'></div>
					<p className='text-[14px]'>
						<span className='font-bold'>139-moddasi </span>{' '}
						<span className='opacity-90'>
							- &quot;Yolg`on ma`lumot berish&quot; - rasmiy shaxslarga nisbatan
							yolg`on ma`lumot berish uchun javobgarlik
						</span>
					</p>
				</div>
				<div className='flex items-center'>
					<div className='w-1.5 h-1.5 bg-[#f9c812] rounded-full mr-5'></div>
					<p className='text-[14px]'>
						<span className='font-bold'>140-moddasi </span>
						<span className='opacity-90'>
							- &quot;Qasddan noto`g`ri ma`lumot berish&quot; - davlat
							organlariga qasddan noto`g`ri maʼlumot berish uchun javobgarlik
						</span>
					</p>
				</div>
				<br />
				<div className='font-bold'>
					Iltimos, faqat haqiqiy va to`g`ri ma`lumotlarni kiriting. Yolg`on
					ma`lumotlar yoki noo`rin so`zlar ishlatilgan holda yuborilgan arizalar
					qonuniy javobgarlikka olib kelishi mumkin.
				</div>
				<p className='mt-2 opacity-90 text-[14px]'>
					<em>
						*Barcha arizalar yuridik kuchga ega hujjatlar sifatida qayta
						ishlanadi va saqlanadi.
					</em>
				</p>
			</div>
		</div>
	)
}

export default Alert
