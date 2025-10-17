import Form from "./Form";
import Information from "./Information";
import Map from "./Map";

export default function Contact() {

  return (
    <div className="w-screen h-max flex justify-center my-20">
      <div className="w-[80%] h-full flex flex-col items-center gap-20 max-sm:full">
        <div className="flex flex-col w-full items-center gap-10">
          <h1 className="text-3xl font-bold text-black-text">Como nos encontrar?</h1>
          <p className="w-200 max-sm:w-85 max-md:w-150">Estamos aqui para ajudar você! Seja para tirar dúvidas, solicitar uma proposta ou apenas enviar uma mensagem sobre como podemos contribuir com seu projeto, nosso time está pronto para te atender. Preencha o formulário ao lado com suas informações e mensagem, que responderemos o mais breve possível. Se preferir, você também pode entrar em contato diretamente pelo e-mail.</p>
        </div>
        <div className="w-full h-max flex max-sm:flex-col gap-20">
          <Form />
          <Information />
        </div>
        <div className="w-full h-50"><Map /></div>
      </div>
    </div>
  )
}