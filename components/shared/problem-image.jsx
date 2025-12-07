import { ImageIcon, ImageUpIcon } from 'lucide-react'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'

const ProblemImage = () => {
	return (
		<div className='dark:bg-[#1e2836] bg-white rounded-xl p-5 h-112'>
			<div className='flex items-center gap-4'>
				<div className='dark:bg-purple-700 bg-[#eaeced] rounded-md size-14 flex items-center justify-center'>
					<ImageIcon size={30} />
				</div>

				<div>
					<h1 className='text-2xl font-bold'>Muammo rasmi</h1>
				</div>
			</div>
			<div className='mt-4'>
				<Separator />
			</div>

			<div className='mt-8 mb-4'>
				<Label>Muammo rasmini ko`rsatadigan rasm yuklang (ixtiyoriy)</Label>
			</div>

			<div className='border-dashed w-full h-[60%] border-2 border-white/20 rounded-xl relative cursor-pointer'>
				<div className='absolute top-0 left-0 w-full h-full rounded-xl opacity-0 z-10'>
					<input
						className='w-full h-full rounded-xl cursor-pointer'
						type='file'
					/>
				</div>

				<div className='flex flex-col justify-center items-center h-full z-0 pointer-events-none'>
					<div className='opacity-70'>
						<ImageUpIcon size={50} />
					</div>
					<h2 className='text-white/50 text-xl my-2'>
						Rasm yuklash uchun bosing
					</h2>
					<h1 className='text-muted-foreground text-xs'>JPG, PNG yoki WEBP</h1>
				</div>
			</div>
		</div>
	)
}

export default ProblemImage
