import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useContact } from "../hooks/useContact";


export default function ContactForm() {

  const { handleChange, captchaChange, handleSubmit } = useContact()  

  return (
    <div className="formCard rounded-sm max-w-[600px] bg-white py-10 px-5 md:border md:w-[600px]">
      <form onSubmit={handleSubmit}>
        <div className="inputField gap-2 mb-8">
          <label
            htmlFor="name"
            className="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Nombre
          </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            className="block border-2 border-black py-2 px-4 w-full outline-none"
          />
        </div>

        <div className="inputField mb-8">
          <label
            htmlFor="email"
            className="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={handleChange}
            className="block border-2 border-black py-2 px-4 w-full outline-none"
          />
        </div>

        <div className="inputField mb-8">
          <label
            htmlFor="subject"
            className="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Título
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            placeholder="Tengo una oportunidad para ti!"
            onChange={handleChange}
            className="block border-2 border-black py-2 px-4 w-full outline-none"
          />
        </div>

        <div className="inputField">
          <label
            htmlFor="message"
            className="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Tu mensaje
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            onChange={handleChange}
            className="mb-4 block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-sm border-2 border-black outline-none"
            placeholder="Deja tu mensaje..."
          ></textarea>
        </div>

        <ReCAPTCHA
        onChange={captchaChange}
        sitekey="6LfXfYYkAAAAAJ4BKtvTCD4WKaldATVjjw5af8Sr" 
        />

        <button
          type="submit"
          className="font-bold px-6 py-2.5 bg-black text-white text-2xl rounded mt-10 w-full"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
