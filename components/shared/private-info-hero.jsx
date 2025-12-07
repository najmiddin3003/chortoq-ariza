import { PhoneCall, User, User2 } from 'lucide-react'
import { Separator } from '../ui/separator'
import InputComponent from './inputs/input'

const PrivateInfoHero = () => {
	return (
		<div className='dark:bg-[#1e2836] bg-white rounded-xl p-5 h-112'>
			<div className='flex items-center gap-4'>
				<div className='dark:bg-slate-700 bg-[#eaeced] rounded-md size-14 flex items-center justify-center'>
					<User size={30} />
				</div>

				<div>
					<h1 className='text-2xl font-bold'>Shaxsiy ma`lumotlar</h1>
				</div>
			</div>
			<div className='mt-4'>
				<Separator />
			</div>

			<div className='mt-4'>
				<InputComponent
					placeholderText='Masalan: Aliyev Vali'
					icon={<User2 size={20} />}
					labelText={'To`liq ism familiya'}
					isLabelRequired={true}
				/>
			</div>
			<div className='mt-4'>
				<InputComponent
					placeholderText='Telefon raqam'
					icon={<PhoneCall size={20} />}
					labelText={'To`liq ism familiya'}
					isLabelRequired={true}
				/>
			</div>
		</div>
	)
}

export default PrivateInfoHero
