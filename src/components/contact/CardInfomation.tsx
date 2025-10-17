import type { ReactNode } from "react";

interface CardInfomationProps {
  icon: ReactNode,
  title: string,
  text: string,
}
export default function CardInfomartion({ icon, title, text }: CardInfomationProps) {
  return (
    <figure className="flex items-center border border-black-bg-color/20 p-3 w-full rounded-lg gap-5">
      <div className="text-2xl bg-primary w-max h-max p-2.5 rounded-lg">{icon}</div>
      <div className="flex flex-col">
        <h3 className="font-semibold">{title}</h3>
        <p>{text}</p>
      </div>
    </figure>
  )
}