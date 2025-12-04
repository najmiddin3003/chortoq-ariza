import Image from 'next/image'
import { IoIosCheckmarkCircle } from 'react-icons/io'
import HerSectionImage from '../assets/images/folder.png'
import Location from './location'
import PrivateInfoHero from './private-info-hero'

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
					<p className='text-muted-foreground text-xl my-4'>
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
			<div className='max-w-5xl mx-auto mt-10 mb-20'>
				<div className='flex items-start gap-4 '>
					<div className='w-1/2'>
						<PrivateInfoHero />
					</div>
					<div className='w-1/2'>
						<Location />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Hero
