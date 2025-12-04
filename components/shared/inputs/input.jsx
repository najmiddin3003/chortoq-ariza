import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputComponent = ({
	icon,
	placeholderText,
	labelText,
	isLabelRequired,
}) => {
	return (
		<div className='mt-6'>
			<Label className='flex items-center gap-1 mb-3'>
				{isLabelRequired && <p className='text-red-500'>*</p>}
				{labelText}
			</Label>
			<div className='relative'>
				<div className='absolute left-2 top-2'>{icon}</div>
				<Input className='pl-8' placeholder={placeholderText} />
			</div>
		</div>
	)
}

export default InputComponent
