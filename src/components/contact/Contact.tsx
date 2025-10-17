import Form from "./Form";
import Information from "./Information";
import Map from "./Map";

export default function Contact() {

  return (
    <div className="w-screen h-max flex justify-center my-20">
      <div className="w-[80%] h-full flex flex-col items-center gap-20 max-sm:full">
        <div className="flex flex-col w-full items-center gap-10">
          <h1 className="text-3xl font-bold text-black-text">Como nos encontrar?</h1>
          <p className="w-200 max-sm:w-[95%] max-md:w-150">Estamos aqui para ajudar você! Seja para tirar dúvidas, solicitar uma proposta ou apenas enviar uma mensagem sobre como podemos contribuir com seu projeto nosso time está pronto para te atender. Preencha o formulário ao lado com suas informações e mensagem, que responderemos o mais breve possível. Se preferir, você também pode entrar em contato diretamente pelo e-mail.</p>
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

{/* <div className="w-screen h-screen flex justify-center">
      <div className=" w-[75%] h-full flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col items-center justify-center text-center gap-5">
          <h1 className="text-3xl font-bold text-black-text">Como nos encontrar?</h1>
          <p className="w-200">Estamos aqui para ajudar você! Seja para tirar dúvidas, solicitar uma proposta ou apenas enviar uma mensagem sobre como podemos contribuir com seu projeto nosso time está pronto para te atender. Preencha o formulário ao lado com suas informações e mensagem, que responderemos o mais breve possível. Se preferir, você também pode entrar em contato diretamente pelo e-mail</p>
        </div>
        <div className="w-full max-sm:w-max flex justify-between max-sm:flex-col max-sm:">
          <div className="flex flex-col items-center gap-10">
            <h2 className="text-2xl font-bold text-black-text">Entre em Contato Conosco</h2>
            <div className="flex gap-10">
              <input type="text" name="" id="" placeholder="Nome" className="bg-white p-2.5 min-w-60 rounded-sm border-gray-300 border outline-gray-text " />
              <input type="email" name="" id="" placeholder="Email" className="bg-white p-2.5 min-w-60 rounded-sm border-gray-300 border outline-gray-text focus:ring-0" />
            </div>
            <textarea
              placeholder="digite sua mensagem"
              className="w-full h-full resize overflow-auto p-2 text-sm leading-snug border border-gray-300 bg-white rounded focus:outline-none focus:ring-1 focus:ring-gray-text focus:border-gray-text align-top"
              style={{ resize: "both" }}
            />
            <Button text="Enviar mensagem" filled />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-bold text-black-text">Informações de Contato</h2>
              <p className="w-150">Estamos à disposição para tirar dúvidas, oferecer suporte ou conversar sobre como podemos ajudar você. Confira nossos dados de atendimento:</p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex justify-between">
                <figure className="flex gap-2.5 border-1 p-5 rounded-xl border-black/10">
                  <div className="text-2xl bg-primary flex justify-center items-center p-3 rounded-lg text-white">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefone</h3>
                    <p>{"(15) 99612-3072"}</p>
                  </div>
                </figure>
                <figure className="flex gap-2.5 border-1 p-5 rounded-xl border-black/10">
                  <div className="text-2xl bg-primary flex justify-center items-center p-3 rounded-lg text-white">
                    <MdEmail />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p>ga.paulettiegea@gmail.com</p>
                  </div>
                </figure>
              </div>
              <figure className="flex gap-2.5 border-1 p-5 rounded-xl border-black/10">
                <div className="text-2xl bg-primary flex justify-center items-center p-3 rounded-lg text-white">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="font-semibold">Endereço</h3>
                  <p>limeira 637, Jardim Leocadia CEP:18085-480</p>
                </div>
              </figure>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">Nossas Redes</span>
              <div className="flex gap-2.5">
                <button className="border-2 p-1.5 rounded-sm cursor-pointer"><FaLinkedin /></button>
                <button className="border-2 p-1.5 rounded-sm cursor-pointer"><FaInstagramSquare /></button>
                <button className="border-2 p-1.5 rounded-sm cursor-pointer"><FaSquareWhatsapp /></button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-sm:hidden w-full h-200">
          <Map />
        </div>
      </div>
    </div> */}