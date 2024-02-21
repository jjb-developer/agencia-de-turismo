import { BiUser, BiSearch } from "react-icons/bi";

export default function Search(){
	return (
		<section className='w-full h-20 flex items-center justify-between px-10 shadow'>
			<div className='relative w-2/5'>
				<span className='absolute top-[50%] -translate-y-[50%] left-3.5'><BiUser size='20'/></span>
				<input type='text' className='outline-none border-2 border-zinc-200 rounded pl-10 pr-4 h-10 text-sm w-full'/>
			</div>
			<div className='relative w-2/5'>
				<input type='date' className='outline-none border-2 text-sm border-zinc-200 rounded pl-10 pr-4 h-10 w-full'/>
			</div>
			<button className='flex items-center gap-1.5 h-10 px-6 rounded font-medium uppercase text-sm bg-sky-500 hover:bg-sky-600 hover:text-sky-50 duration-300 text-sky-900'><BiSearch size='1rem'/> Search</button>
		</section>
	)
}