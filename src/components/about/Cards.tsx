import type { ReactNode } from "react";

interface CardProps {
  text: string,
  icon: ReactNode,
  title: string
}

export default function Cards({ text, icon, title }: CardProps) {
  return (
    <div className="flex flex-col gap-10 max-w-100 max-sm:max-w-90 bg-black-bg-color text-white py-5 px-10">
      <figure className="flex flex-col justify-center items-center gap-2.5">
        <div className="text-primary text-3xl max-md:text-2xl">
          {icon}
        </div>
        <span className="text-lg max-md:text-base">
          {title}
        </span>
      </figure>
      <p className="text-center text-sm">{text}</p>
    </div>
  )
}