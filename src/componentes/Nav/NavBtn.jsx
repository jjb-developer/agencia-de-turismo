import { BiUser } from "react-icons/bi";

export default function NavBtn({ name }) {
  return (
    <button className="flex items-center gap-1.5 py-1.5 px-6 rounded font-medium uppercase bg-orange-500 hover:bg-orange-600 hover:text-orange-50 duration-300 text-gray-50 text-lg">
      <BiUser size="1rem" /> {name}
    </button>
  );
}
