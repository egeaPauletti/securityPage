import { FaRegClock } from "react-icons/fa6";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { MdOutlineDoorSliding } from "react-icons/md";
import { PiSecurityCamera } from "react-icons/pi";
import { SlWrench } from "react-icons/sl";
import CardServices from "./CardServices";

export default function Services() {
  return (
    <section id="services" className="w-screen h-max px-30 flex flex-wrap justify-center items-center gap-15 my-50 max-sm:my-30 ">
      <div className="flex flex-col gap-5 bg-black-bg-color px-10 py-15 text-white">
        <span className="text-sm">Nossos Serviços</span>
        <h1 className="text-5xl">Quais Serviços<br /> oferecemos?</h1>
      </div>
      <CardServices icon={<FaRegClock />} title="Central de Monitoramento 24h" text="Monitoramento 24 horas com recebimento imediato de alertas e vídeo verificação para pronta resposta. Equipe especializada preparada para agir rapidamente em situações emergenciais." />
      <CardServices icon={<MdOutlineDoorSliding />} title="Portaria Remota" text="Soluções tecnológicas avançadas para controle de acesso e monitoramento remoto, com equipamentos integrados de última geração. Oferecemos consultoria, instalação e manutenção especializada." />
      <CardServices icon={<PiSecurityCamera />} title="Vigilância" text="Serviço de vigilância focado na redução de riscos e proteção patrimonial e pessoal. Recrutamos e treinamos equipes qualificadas, com fiscalização e acompanhamento constante para máxima segurança." />
      <CardServices icon={<HiOutlineWrenchScrewdriver />} title="Facilities (Serviços Terceirizados)" text="Oferecemos soluções integradas em Facilities, com serviços que vão desde o atendimento na recepção até a conservação completa dos ambientes. Atuamos com limpeza e higienização rigorosa, manutenção predial, zeladoria, jardinagem e apoio em serviços gerais." />
      <CardServices icon={<SlWrench />} title="Vendas e Instalações" text="Projetos personalizados em segurança eletrônica, com instalação especializada de câmeras, alarmes, cercas elétricas e sistemas de controle de acesso, garantindo proteção sob medida para cada cliente." />
    </section>
  )
}