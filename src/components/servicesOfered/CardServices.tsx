import { useEffect, useRef, useState, type ReactNode } from "react";

interface CardServicesProps {
  text: string;
  icon: ReactNode;
  title: string;
}

export default function CardServices({ icon, title, text }: CardServicesProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className={`flex flex-col gap-5 w-max p-5 transition-opacity duration-1000 ease-in-out ${isVisible ? "appearAnimationFromLeft" : "opacity-0"
        }`}
    >
      <div className="flex flex-col gap-5">
        <figure className="w-max h-max flex relative">
          <div className="w-[50px] h-[50px] bg-primary"></div>
          <div className="text-5xl text-black-text-color absolute -bottom-2.5 -right-2.5">{icon}</div>
        </figure>
        <h2 className="text-lg text-primary">{title}</h2>
      </div>
      <p className="w-90 max-sm:w-85">{text}</p>
      {/* <span className="text-primary cursor-pointer hover:underline transition-all duration-300">
        Ver mais...
      </span> */}
    </div>
  );
}
