import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Logo from "../icons/Logo";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-10 bg-black-bg-color py-10 overflow-x-hidden">
      <Logo size="50px" />
      <ul className="flex gap-10 max-sm:gap-5 max-sm:text-xs font-semibold">
        <li className="hover:text-white cursor-pointer"><a href="#apresentation">Inicio</a></li>
        <li className="hover:text-white cursor-pointer"><a href="#about">Sobre nós</a></li>
        <li className="hover:text-white cursor-pointer"><a href="#services">Serviços</a></li>
        <li className="hover:text-white cursor-pointer"><a href="#contact">Contato</a></li>
        <li className="hover:text-white cursor-pointer"><a href="#questions">Duvidas</a></li>
      </ul>
      <div className="flex gap-5">
        <button className="cursor-pointer text-2xl"><FaLinkedin /></button>
        <button className="cursor-pointer text-2xl"><FaInstagram /></button>
        <button className="cursor-pointer text-2xl"><FaWhatsapp /></button>
      </div>
    </footer>
  )
}