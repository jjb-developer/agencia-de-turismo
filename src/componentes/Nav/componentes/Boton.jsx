import { BiUser } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

export default function Boton({ ruta, name }) {
  const navigate = useNavigate();
  const enlace = (r) => navigate(ruta);
	return (
		<div className="flex flex-col items-center justify-center my-auto p-1 lg:p-3">
			<button
				onClick={enlace}
				className="gap-x-2 font-bold border-2 p-1 lg:p-3
				bg-[#0000003b] border-orange-600 duration-300 hover:bg-orange-300 text-orange-500
				hover:text-slate-900 text-xl lg:text-lg mb-8 w-[150px] lg:w-full shadow-lg rounded-md sm:flex"
			>
				<div className="flex items-center justify-center">
					<BiUser size="16" className="mr-2 lg:mr-2"/>
					{name}
				</div>
			</button>
		</div>
	);
	
}
