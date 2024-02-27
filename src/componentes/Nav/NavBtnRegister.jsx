import { BiUser } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function NavBtnRegister() {
  return (
    <Link to='/register'
      className="flex gap-x-2 px-7 items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase">
      <BiUser size="1rem"/> Register
    </Link>
  );
}
