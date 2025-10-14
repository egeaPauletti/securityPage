import { FaLocationDot, FaPhone } from "react-icons/fa6";
import Logo from "../icons/Logo";

export default function Header() {
  return <>
    <header className="w-screen h-max flex flex-col justify-center items-center py-2.5 mt-2.5">
      <div className="w-[80%] h-full flex flex-col justify-between items-center gap-5">
        <div className="w-full h-max flex gap-10 items-center">
          <figure className="flex gap-2.5 items-center">
            <div className="text-primary">
              <FaLocationDot />
            </div>
            <span className="text-white text-sm">Rua limeira 637, Jardim Leocadia CEP:18085-480</span>
          </figure>
          <figure className="flex gap-2.5 items-center">
            <div className="text-primary">
              <FaPhone />
            </div>
            <span className="text-white text-sm">(15) 99612-3072</span>
          </figure>
        </div>
        <div className="w-full h-max flex justify-between items-center">
          <figure className="flex items-center gap-4">
            <Logo size="32px" />
            <h1 className="text-white font-bold text-lg">TecnoControl</h1>
          </figure>
          <ul className="text-white flex gap-5 text-sm">
            <li className="hover:text-primary cursor-pointer transition-all">Home</li>
            <li className="hover:text-primary cursor-pointer transition-all">Sobre nós</li>
            <li className="hover:text-primary cursor-pointer transition-all">Serviços</li>
            <li className="hover:text-primary cursor-pointer transition-all">Contate-nos</li>
          </ul>
        </div>
      </div>
    </header>
  </>
}