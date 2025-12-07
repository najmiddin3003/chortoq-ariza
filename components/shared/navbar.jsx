'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Logo from '../assets/images/logo.png'
import { navbarData } from './../../constants/index'
import ModeToggle from './buttons/mode-toggle'

const Navbar = () => {
	const [isShrink, setIsShrink] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsShrink(window.scrollY > 20)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<div className=' w-full z-50 max-w-7xl mx-auto'>
			<div
				className={`fixed top-0 left-0 px-50 z-50 transition-all duration-300 ${
					isShrink ? 'py-2' : 'py-3'
				} backdrop-blur bg-white/80 dark:shadow-md dark:bg-transparent shadow w-full`}
			>
				<div className='flex justify-between items-center'>
					<Link href={'/'}>
						<div className='flex gap-2 items-center'>
							<Image
								src={Logo}
								width={isShrink ? 80 : 100}
								height={isShrink ? 48 : 60}
								alt='Icon'
								className='transition-all duration-300'
							/>
							<div className='flex flex-col'>
								<h1 className='dark:text-yellow-500 font-bold text-2xl leading-none'>
									Chortoq tuman hokimligi
								</h1>
								<h6 className='font-bold text-sm'>O`zbekiston Respublikasi</h6>
							</div>
						</div>
					</Link>

					<div className='flex gap-3 items-center'>
						{navbarData.map((item, index) => (
							<div
								className={`duration-200 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-md ${
									isShrink ? 'py-1 px-4' : 'py-3 px-5'
								}`}
								key={index}
							>
								<Link href={item.route} className='flex gap-2 items-center'>
									<Image src={item.icon} alt='Icon' width={20} height={20} />
									<p>{item.text}</p>
								</Link>
							</div>
						))}
						<ModeToggle />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
