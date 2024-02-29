import { BiLogoTwitter, BiLogoGithub, BiLogoFacebookCircle } from "react-icons/bi"

export default function Footer(){

	const sizeLogo = 28

	return (
		<footer className='flex flex-col items-center justify-center w-full bg-orange-500 h-64 text-center px-10'>
			<div className='flex gap-x-2'>
				<BiLogoGithub size={sizeLogo}/>
				<BiLogoTwitter size={sizeLogo}/>
				<BiLogoFacebookCircle size={sizeLogo}/>
			</div>
			<div className='mt-4'>
				<p className='text-[15px] capitalize'>&#9400; copyright - febrero 2024</p>
				<small className='mt-1.5'>Elaborado por  [ Julia Sarmiento, Sebastian Olivares, José Pereira ]</small>
			</div>
		</footer>
	)
}