import Button from "../global/Button";

export default function About() {
  return (
    <div className="w-screen h-max flex flex-col items-center justify-center my-50 appearAnimation">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-black-text font-bold text-4xl">Tecno<span className="text-primary">Control</span></h1>
        <p className="w-3/5 text-center">Desde 2011, o Grupo TecnoControll atua no mercado de segurança eletrônica patrimonial e vigilância. Iniciamos como uma empresa de vendas e instalações de sistemas de segurança e, em 2018, expandimos nossos serviços, consolidando novas áreas de atuação.
          Somos um parceiro estratégico para empresas e condomínios que buscam soluções completas e integradas, feitas sob medida.
          Nossas equipes e processos simplificam sua vida, otimizam custos e garantem tranquilidade e segurança.</p>
        <Button text="Entre em contato" filled />
      </div>
    </div>
  )
}