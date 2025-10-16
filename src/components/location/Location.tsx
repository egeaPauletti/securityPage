import { useEffect, useRef, useState } from "react";
import { BiSolidContact } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Map from "./Map";

export default function Location() {
  const locationRef = useRef<HTMLDivElement | null>(null);
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

    if (locationRef.current) {
      observer.observe(locationRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-white">
      <div ref={locationRef} className={`w-full h-full flex max-sm:flex-col-reverse justify-center items-center ${isVisible ? "appearAnimationFromBottom" : "opacity-0"
        }`}>
        <div className="w-max h-max flex flex-col max-sm:items-center bg-black-bg-color gap-10 p-10 relative md:left-10 z-90 max-sm:w-5/6">
          <h1 className="text-white text-4xl text-bold">Onde nos achar?</h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col justify-center gap-2.5 text-gray-text">
              <figure className="w-max h-max flex items-center gap-2.5">
                <div className="text-2xl"><FaLocationDot /></div>
                <h2 className="text-base font-bold">Endereço</h2>
              </figure>
              <p className="w-max ">Rua limeira 637, Jardim Leocadia<br /> CEP:18085-480</p>
            </div>
            <div className="flex flex-col justify-center gap-2.5 text-gray-text">
              <figure className="w-max h-max flex items-center gap-2.5">
                <div className="text-2xl"><BiSolidContact /></div>
                <h2 className="text-lg font-bold">Contato</h2>
              </figure>
              <figure className="flex gap-2.5 items-center">
                <div>
                  <MdEmail />
                </div>
                <p className="w-max ">{"(15) 99612-3072"}</p>
              </figure>
              <figure className="flex gap-2.5 items-center">
                <div>
                  <FaPhoneAlt />
                </div>
                <p className="w-max ">ga.paulettiegea@gmail.com</p>
              </figure>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-2/3 max-sm:w-5/6 max-sm:h-1/4 z-89">
          <Map />
        </div>
      </div >
    </div >
  )
}