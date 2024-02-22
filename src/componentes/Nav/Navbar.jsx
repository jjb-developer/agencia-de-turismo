import NavButtons from "./NavButtons";

export default function Navbar() {
  return (
    <nav className="w-full h-20 flex items-center justify-between px-10 shadow">
      <div className="text-xl uppercase font-bold text-sky-600 tracking-tight">
        agencia de turismo
      </div>
      <NavButtons/>
    </nav>
  );
}
