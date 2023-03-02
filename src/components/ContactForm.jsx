import ReCAPTCHA from "react-google-recaptcha";
import { useContact } from "../hooks/useContact";


export function ContactForm() {

  const { handleChange, captchaChange, handleSubmit, loading, recaptchaRef, formRef } = useContact()  

  return (
    <div className="formCard rounded-lg max-w-[600px] bg-white py-10 px-5 md:w-[600px]">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div className="inputField gap-2 mb-8">
          <label
            htmlFor="name"
            className="inline-block py-1 px-2 rounded-t-lg bg-black text-white text-xl font-medium"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="block py-2 px-4 w-full outline-none bg-[#ced4da] rounded-r-lg"
          />
        </div>

        <div className="inputField mb-8">
          <label
            htmlFor="email"
            className="inline-block py-1 px-2 rounded-t-lg bg-black text-white text-xl font-medium"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="block rounded-r-lg py-2 px-4 w-full outline-none bg-[#ced4da]"
          />
        </div>

        <div className="inputField mb-8">
          <label
            htmlFor="subject"
            className="inline-block py-1 px-2 rounded-t-lg bg-black text-white text-xl font-medium"
          >
            Título
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Tengo una oportunidad para ti!"
            onChange={handleChange}
            className="block py-2 rounded-r-lg px-4 w-full outline-none bg-[#ced4da] placeholder-gray-500"
          />
        </div>

        <div className="inputField">
          <label
            htmlFor="message"
            className="inline-block py-1 px-2 rounded-t-lg bg-black text-white text-xl font-medium"
          >
            Tu mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            onChange={handleChange}
            className="mb-4 block p-2.5 w-full text-lg rounded-r-lg text-gray-900 bg-[#ced4da] rounded-sm outline-none placeholder-gray-500"
            placeholder="Deja tu mensaje..."
          ></textarea>
        </div>

        <ReCAPTCHA
        ref={recaptchaRef}
        onChange={captchaChange}
        sitekey="6LfXfYYkAAAAAJ4BKtvTCD4WKaldATVjjw5af8Sr" 
        />

        <button
          type="submit"
          className={`font-bold px-6 py-2.5 ${loading ? 'bg-gray-400' : 'bg-black'} text-white text-2xl rounded mt-10 w-full`}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
