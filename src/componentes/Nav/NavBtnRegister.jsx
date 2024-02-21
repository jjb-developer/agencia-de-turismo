import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
export default function NavBtnRegister() {
  
  const navigate = useNavigate();
  
  function HandleClick() {
    navigate("/register");
  }

  return (
    <button
      className="flex items-center gap-1.5 py-1.5 px-6 rounded font-medium uppercase bg-orange-500 hover:bg-orange-600 hover:text-orange-50 duration-300 text-gray-50 text-lg"
      onClick={HandleClick}
    >
      <BiUser size="1rem" /> Register
    </button>
  );
}
