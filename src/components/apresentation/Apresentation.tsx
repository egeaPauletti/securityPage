import firstBG from '../../assets/backgrounds/firstbg.jpg';
import Button from "../ui/Button";

export default function Apresentation() {
  return (
    <div className="w-screen h-screen bg-gray-700">
      <div className="w-full h-full relative flex flex-col">
        <figure className="w-full h-full">
          <div
            className="w-full h-full absolute z-49"
            style={{ backgroundImage: `url(${firstBG})`, backgroundSize: "cover" }}
          ></div>
          <div className="w-full h-full absolute z-50 bg-black opacity-80"></div>
        </figure>
        <div className="w-full h-full flex flex-col justify-center items-center absolute z-70 gap-15 fadeInAnimation">
          <div className="flex flex-col justify-center items-center gap-5">
            <span className="text-white font-semibold text-base max-md:text-sm max-sm:text-xs">A <span className="text-primary ">segurança</span> nas tuas mãos!</span>
            <p className="text-white text-6xl max-md:text-5xl max-sm:text-4xl  text-center font-bold">Soluções Integradas<br /> para Segurança</p>
            <p className="text-white max-w-200 text-base max-md:text-sm max-sm:text-xs max-sm:max-w-60 max-sm:">A TecnoControll oferece tecnologia aliada ao melhor suporte de serviços garantindo tranquilidade e proteção para você, sua empresa ou condomínio.</p>
          </div>
          <div className="flex gap-10">
            <Button text="Sobre nós" />
            <Button text="Nossos Serviços" filled />
          </div>
        </div>
      </div>
    </div>
  )
}