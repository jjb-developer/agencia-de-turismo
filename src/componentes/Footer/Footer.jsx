import React, { useState } from "react";
import { FaComments } from 'react-icons/fa';

import {
  BiLogoTwitter,
  BiLogoGithub,
  BiLogoFacebookCircle,
} from "react-icons/bi";
import ContactForm from "../Pages/Home/ContactForm";

function CommentIcon() {
  return <FaComments />;
} 

export default function Footer() {
  const sizeLogo = 28;
  const mitad = 50;
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm((prevState) => !prevState);
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-80 text-center px-10 mt-12"
      style={{ background: "linear-gradient(to right, #FFA500, #FF6347)" }}
    >
      <div className="md:translate-x-[300px] md:-translate-y-12 mb-3 bg-orange-900 py-2 px-4 border-2 
      border-orande-200 hover:bg-orange-600 rounded-md">
        <button className="text-sm flex text-orange-200 font-roboto font-bold rounded-xl uppercase" onClick={toggleContactForm}>
        <span className="mr-2"><CommentIcon /></span>Comentarios 
        </button>
      </div>

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
      {showContactForm && <ContactForm />}
    </div>
  );
}
