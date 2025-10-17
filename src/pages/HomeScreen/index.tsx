import { FiTarget } from "react-icons/fi";
import { GoShield } from "react-icons/go";
import { RiVipDiamondLine } from "react-icons/ri";
import About from "../../components/about/About";
import CardAbout from "../../components/about/CardAbout";
import Apresentation from "../../components/apresentation/Apresentation";
import Contact from "../../components/contact/Contact";
import Header from "../../components/header/Header";
import Questions from "../../components/questions/Questions";
import Services from "../../components/servicesOfered/Services";

export default function HomeScreen() {
  return <>
    <Header />
    <main>
      <Apresentation />
      {/* Mission, Vision and Values */}
      <div className="flex w-screen h-max justify-center">
        <div className="w-max h-max flex max-sm:flex-col justify-center items-center gap-10 relative -top-25 z-90 ">
          {/* retangle for background */}
          <div className="bg-primary w-full max-sm:hidden h-3/4  absolute -bottom-9 left-10 z-89"></div>
          {/* CardAbout */}
          <div className="w-max h-max flex max-sm:flex-col justify-center items-center gap-10 z-90">
            <CardAbout icon={<GoShield />} title="Nossa Missão" text="Proteger a vida e o patrimônio dos nossos clientes. Promover a excelência em soluções de segurança, de acordo com as necessidades específicas de cada cliente." />
            <CardAbout icon={<FiTarget />} title="Visão" text="Oferecer um trabalho pautado na disciplina, qualidade e comprometimento, investindo na capacitação e reciclagem de nossos colaboradores." />
            <CardAbout icon={<RiVipDiamondLine />} title="Valores e Princípios" text="Competência: Qualidade e rapidez nos resultados, com equipes treinadas e comprometidas. Compromisso: Investimento contínuo em tecnologia e excelência nos serviços prestados." />
          </div>
        </div>
      </div>
      <About />
      <Services />
      {/* <Location /> */}
      <Contact />
      <Questions />
    </main>
    <footer></footer>
  </>
}