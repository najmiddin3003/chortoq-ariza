import { GrDocumentNotes } from 'react-icons/gr'
import { Label } from '../ui/label'
import { Separator } from '../ui/separator'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '../ui/textarea'

const ArizaMalumotlari = () => {
	return (
		<div className='dark:bg-[#1e2836] bg-white rounded-xl p-5 h-112'>
			<div className='flex items-center gap-4'>
				<div className='dark:bg-[#ed4242] text-white bg-[#eaeced] rounded-md size-14 flex items-center justify-center'>
					<GrDocumentNotes size={30} />
				</div>

				<div>
					<h1 className='text-2xl font-bold'>Muammo rasmi</h1>
				</div>
			</div>
			<div className='mt-4'>
				<Separator />
			</div>

			<div className='mt-8 mb-4'>
				<div className='flex gap-4'>
					<div className='w-1/2'>
						<Label className='mb-4'>
							Kategoriya (ixtiyoriy - AI avtomatik aniqlaydi)
						</Label>
						<div>
							<Select>
								<SelectTrigger className='w-full'>
									<SelectValue placeholder='Select a fruit' />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Fruits</SelectLabel>
										<SelectItem value='apple'>Apple</SelectItem>
										<SelectItem value='banana'>Banana</SelectItem>
										<SelectItem value='blueberry'>Blueberry</SelectItem>
										<SelectItem value='grapes'>Grapes</SelectItem>
										<SelectItem value='pineapple'>Pineapple</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>
					</div>
					<div className='w-1/2'>
						<div>
							<Label className='mb-4'>
								<span className='text-red-500'>*</span> Arizaning to`liq ismi
							</Label>
							<Textarea
								className='h-40'
								placeholder='Arizangizni to`liq matnini batafsil yozing...'
							/>
						</div>

						<div className='flex justify-between items-center mt-5'>
							<p>0 belgi</p>
							<p className='text-blue-500'>Minimal 10 belgi</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArizaMalumotlari
