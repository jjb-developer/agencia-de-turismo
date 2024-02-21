import NavBtnRegister from "./NavBtnRegister";
import NavBtnLogin from "./NavBtnLogin";
export default function BtnLogin() {
	return (
		<div className='flex gap-2'>
			<NavBtnRegister/>
			<NavBtnLogin/>
		</div>
	);
}