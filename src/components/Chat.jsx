import { useRef } from "react"
import { useChat } from "../hooks/useChat"

export function Chat() {
  
  const chatReference = useRef(null)
  const  { handleSubmit, setMessage, message, chat } = useChat(chatReference)

  return (
      <div className="containerChat fixed bottom-[90px] border border-white right-10 h-[500px] w-[250px] backdrop-blur-sm bg-black/50 rounded-2xl p-4 flex flex-col gap-4 md:w-[330px] md:right-10 z-50">
          <div ref={chatReference} className="chat flex flex-col gap-4 chat flex-1 overflow-y-auto scrollbar-hide">
              {
                chat.map(({from, text}, index) => (
                  <div key={index} className={`${from == 'bot' ? 'bg-[#322f2f]' : 'bg-slate-600'} text-white max-w-[200px] p-2 rounded-xl ${from == 'user' ? 'self-end' : 'self-start'}`}>
                    <p>{text}</p>
                  </div>
                ))
              }
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <input type="text" className="w-full py-2 px-3 border-2 outline-none rounded-md" placeholder="Hazme tu pregunta!" onChange={(e) => setMessage(e.target.value)} value={message}/>
              <button type="submit" className="bg-white text-black py-2 px-4 rounded-md">Enviar</button>
            </div>
          </form>
      </div>
  )
}
