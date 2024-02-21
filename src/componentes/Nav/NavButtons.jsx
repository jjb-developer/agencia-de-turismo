import NavBtn from "./NavBtn";

export default function BtnLogin() {
	return (
		<div className='flex gap-2'>
			<NavBtn name='register'/>
			<NavBtn name='login'/>
		</div>
	);
}