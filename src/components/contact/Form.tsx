import { useEffect, useRef, useState } from "react";
import Button from "../ui/Button";

export default function Form() {
  const formRef = useRef<HTMLFormElement | null>(null);
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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <form ref={formRef} action="submit" className={`w-1/2 h-max flex flex-col items-center max-sm:w-full gap-10 ${isVisible ? "appearAnimationFromLeft" : "opacity-0"
      }`}>
      <h2 className="text-2xl font-bold text-black-text text-center">Entre em Contato Conosco</h2>
      <div className="w-full flex justify-between max-sm:flex-col gap-10">
        <div className="flex flex-col gap-2.5">
          <label htmlFor="">Nome</label>
          <input type="text" name="" id="" placeholder="nome" className="bg-white p-2.5 w-60 max-sm:w-full rounded-sm border-gray-300 border outline-gray-text " />
        </div>
        <div className="flex flex-col gap-2.5">
          <label htmlFor="">Email</label>
          <input type="email" name="" id="" placeholder="email" className="bg-white p-2.5 w-90 max-sm:w-full rounded-sm border-gray-300 border outline-gray-text focus:ring-0" />
        </div>
      </div>
      <div className="w-full h-max flex flex-col gap-2.5">
        <label htmlFor="">Mensagem</label>
        <textarea
          placeholder="digite sua mensagem"
          className="w-full min-h-70 max-sm:min-h-50 resize overflow-auto p-2 text-sm leading-snug border border-gray-300 bg-white rounded focus:outline-none focus:ring-1 focus:ring-gray-text focus:border-gray-text align-top"
          style={{ resize: "both" }}
        />
      </div>
      <Button text="Enviar mensagem" filled />
    </form>
  )
}