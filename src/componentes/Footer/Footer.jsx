import {
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoFacebookCircle,
} from "react-icons/bi";

export default function Footer() {
  const sizeLogo = 28;

  return (
    <footer
      className="flex flex-col items-center justify-center w-full h-64 text-center px-10"
      style={{ background: "linear-gradient(to right, #FFA500, #FF6347)" }}
    >
      <div className="flex gap-x-4">
        <BiLogoGithub size={sizeLogo} />
        <BiLogoTwitter size={sizeLogo} />
        <BiLogoFacebookCircle size={sizeLogo} />
      </div>
      <div className="mt-4">
        <p className="text-[25px] font-bold capitalize">
          &#9400; copyright - febrero 2024
        </p>
        <small className="mt-1.5 font-semibold">
          Elaborado por [ Julia Rodriguez, Sebastian Oliveto, José Pereira ]
        </small>
      </div>
    </footer>
  );
}
