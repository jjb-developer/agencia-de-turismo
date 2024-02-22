import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function NavBtnRegister() {
  
  const navigate = useNavigate();
  
  function HandleClick() {
    navigate("/register");
  }

  return (
    <button
      className="flex gap-x-2 px-7 items-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold w-full py-3 rounded-md uppercase"
      onClick={HandleClick}
    >
      <BiUser size="1rem" /> Register
    </button>
  );
}
