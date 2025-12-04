import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const InputComponent = ({
	icon,
	placeholderText,
	labelText,
	isLabelRequired,
}) => {
	return (
		<div>
			<Label className='flex items-center gap-1 mb-2'>
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
