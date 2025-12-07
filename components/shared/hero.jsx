import Image from 'next/image'
import { BsSendFill } from 'react-icons/bs'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import HerSectionImage from '../assets/images/folder.png'
import Alert from './alert'
import ArizaMalumotlari from './ariza-malumotlari'
import Location from './location'
import PrivateInfoHero from './private-info-hero'
import ProblemImage from './problem-image'
import SoundMessage from './sound-message'
import SuccessMessage from './success-message'

const Hero = () => {
	return (
		<div>
			<div className='flex flex-col justify-center items-center pt-50'>
				<div className='w-25 h-25 relative'>
					<Image
						className='hero-section-image'
						fill
						src={HerSectionImage}
						alt='Hero section image'
					/>
				</div>

				<div className='text-center'>
					<h1 className='text-6xl font-bold mt-7'>Ariza Topshirish</h1>
					<p className='text-muted-foreground text-xl my-4 !font-[100]'>
						Namangan viloyati Chortoq tumani hokimligiga ariza yuborish
					</p>
					<div className='flex items-center justify-center gap-10 mt-2'>
						<div className='flex gap-2 items-center'>
							<IoIosCheckmarkCircle className='text-green-500' />
							<p>Tezkor javob</p>
						</div>
						<div className='flex gap-2 items-center'>
							<IoIosCheckmarkCircle className='text-green-500' />
							<p>AI yordamida</p>
						</div>
						<div className='flex gap-2 items-center'>
							<IoIosCheckmarkCircle className='text-green-500' />
							<p>24/7 mavjud</p>
						</div>
					</div>
				</div>
			</div>
			<SuccessMessage />

			<div className='max-w-5xl mx-auto'>
				<div className='mt-10 mb-10'>
					<div className='flex items-start gap-10 '>
						<div className='w-1/2 border border-slate-100/20 rounded-xl'>
							<PrivateInfoHero />
						</div>
						<div className='w-1/2 border border-slate-100/20 rounded-xl'>
							<Location />
						</div>
					</div>
				</div>
				{/* qoshildi, 5-dekabr */}
				<div className='flex items-center justify-between gap-10'>
					<div className='w-1/2 border border-slate-100/20 rounded-xl'>
						<ProblemImage />
					</div>
					<div className='w-1/2 border border-slate-100/20 rounded-xl'>
						<SoundMessage />
					</div>
				</div>

				<div className='w-full border border-slate-100/20 rounded-xl mt-10'>
					<ArizaMalumotlari />
				</div>
			</div>
			<div className='max-w-5xl mx-auto mt-5'>
				<button className='button py-4 text-xl! font-light!'>
					<BsSendFill /> Arizani yuborish
				</button>
			</div>
			<div className='max-w-5xl mx-auto mt-5 bg-[#362628] border-gray-200 border-2 dark:border-[#e9ba17] p-5 rounded-xl mb-30'>
				<Alert />
			</div>
		</div>
	)
}

export default Hero
