import { useEffect, useRef, useState } from "react";
import { FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CardInfomartion from "./CardInfomation";

export default function Information() {
  const infoRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // se quiser que a animação ocorra só uma vez
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (infoRef.current) {
      observer.observe(infoRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <div ref={infoRef} className={`w-1/2 h-max max-sm:w-full flex flex-col items-center gap-15 ${isVisible ? "appearAnimationFromRight" : "opacity-0"
      }`}>
      <h2 className="text-2xl font-bold text-black-text">Informações de Contato</h2>
      <p className="w-full max-sm:w-[95%]">Estamos à disposição para tirar dúvidas, oferecer suporte ou conversar sobre como podemos ajudar você. Confira nossos dados de atendimento:</p>
      <div className="w-full h-max flex flex-col gap-10">
        <div className="flex max-sm:flex-col justify-between w-full gap-10">
          <CardInfomartion icon={<FaPhoneAlt />} title="Telefone" text={"(15) 99612-3072"} />
          <CardInfomartion icon={<MdEmail />} title="Email" text="ga.paulettiegea@gmail.com" />
        </div>
        <CardInfomartion icon={<FaLocationDot />} title="Endereço - CEP:18085-480" text="limeira 637, Jardim Leocadia" />
      </div>
      <div className="flex w-full justify-between items-center">
        <span className="font-semibold">Nossas Redes</span>
        <div className="flex gap-2.5">
          <button className="border-2 p-1.5 rounded-sm cursor-pointer"><FaLinkedin /></button>
          <button className="border-2 p-1.5 rounded-sm cursor-pointer"><FaInstagramSquare /></button>
          <button className="border-2 p-1.5 rounded-sm cursor-pointer"><FaSquareWhatsapp /></button>
        </div>
      </div>
    </div>
  )
}