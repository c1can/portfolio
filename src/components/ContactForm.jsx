export default function ContactForm() {
  return (
    <div className="formCard rounded-sm max-w-[500px] bg-white p-5">
      <form action="">
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
            className="block border-2 border-black py-2 px-4 w-full outline-none"
          />
        </div>

        <div className="inputField mb-8">
          <label
            htmlFor="name"
            className="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Correo Electronico
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="block border-2 border-black py-2 px-4 w-full outline-none"
          />
        </div>

        <div className="inputField mb-8">
          <label
            htmlFor="name"
            className="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Sujeto
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Tengo una oportunidad para ti!"
            className="block border-2 border-black py-2 px-4 w-full outline-none"
          />
        </div>

        <div className="inputField">
          <label
            for="message"
            class="inline-block py-1 px-2 rounded-sm bg-black text-white text-xl font-medium"
          >
            Tu mensaje
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full text-lg text-gray-900 bg-gray-50 rounded-sm border-2 border-black"
            placeholder="Deja un comentario..."
          ></textarea>
        </div>
      </form>
    </div>
  );
}
