import { ImageIcon } from 'lucide-react'
import { BiMicrophone } from 'react-icons/bi'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'

const SoundMessage = () => {
	return (
		<div className='dark:bg-[#1e2836] bg-white rounded-xl p-5 h-112'>
			<div>
				<div className='flex items-center gap-4'>
					<div className='dark:bg-purple-700 bg-[#eaeced] rounded-md size-14 flex items-center justify-center'>
						<ImageIcon size={30} />
					</div>

					<div>
						<h1 className='text-2xl font-bold '>Ovozli murojaat</h1>
					</div>
				</div>
				<div className='mt-4'>
					<Separator />
				</div>

				<div className='mt-8 mb-4'>
					<Label>
						Agar yozish qiyin bo`lsa, ovozli habar yuborishingiz mumkin
						(ixtiyoriy)
					</Label>
				</div>

				<div className='dark:bg-slate-700 bg-[#eaeced] rounded-xl mt-8 p-5'>
					<div
						className='flex items-center gap-4 bg-[#ed4242] w-fit py-3 px-2 rounded-xl cursor-pointert text-white
					'
					>
						<div className=''>
							<BiMicrophone size={25} />
						</div>
						<p>Ovozli xabar yuborish</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SoundMessage
