import { User } from 'lucide-react'
import ModeToggle from './../components/shared/buttons/mode-toggle'
import InputComponent from './../components/shared/inputs/input'

const page = () => {
	return (
		<div>
			<ModeToggle />
			<InputComponent
				isLabelRequired={true}
				icon={<User size={20} />}
				placeholderText={'Masalan: Aliyev Vali Valiyevich'}
				labelText={'To`liq ism familiya'}
			/>
		</div>
	)
}

export default page
