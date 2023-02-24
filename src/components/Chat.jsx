import { useRef, useState, useEffect } from "react"
import { EXAMPLES } from "../data/examples"

export function Chat() {

  const chatReference = useRef(null)

  const answers = {
    intro: 'Hola! mi nombre es Carlos Reyes, soy de Guatemala, tengo 19 años y soy Desarrollador Web, me gusta crear sitios webs rapidos y escalables, preguntame cosas relacionadas con trabajo para que te cuente que stack manejo y que otras tecnologias son mis favoritas.',
    unknown: 'Por favor haz solo preguntas relacionadas con mi persona o con asuntos laborales, reformula tu pregunta gracias.',
    trabajo: 'Actualmente estoy disponible a ofertas laborales, trabajo con tecnologias Frontend como: React, TailwindCSS, ChakraUI, git, y Astro, en Backend: NodeJS, MongoDB, y Express, si quieres hablar no dudes en contactarme! preguntale al bot por mis redes sociales o llena el formulario de contacto',
    social: 'Puedes encontrarme en github como github.com/escarcan o en LinkedIn como CarlosReyes84'
  }
  const [message, setMessage] = useState('')
  const [chat, setChat] = useState([
    {
      from: 'bot',
      text: 'Hola soy una IA entrenada por Carlos para que puedas hacer preguntas sobre temas laborales o sobre mi, no dudes en preguntarme!'
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if(message == '') return

    setChat(prev => prev.concat({ 
      from: 'user',
      text: message
    })) 

    setMessage('') 

    fetch('https://api.cohere.ai/classify', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_COHERE_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'large',
        inputs: [message],
        examples: EXAMPLES
      })
    }).then(res => res.json())
    .then(result => {
      const { classifications } = result
      const botResponse = classifications[0].prediction 
      setChat(prev => prev.concat({from: 'bot', text: answers[botResponse]}))
    })
  }

  useEffect(() => {
    chatReference.current.scrollTo(0, chatReference.current.scrollHeight)
  }, [chat])

  return (
      <div className="containerChat fixed bottom-[70px] right-5 h-[500px] w-[250px] backdrop-blur-sm bg-black/50 rounded-2xl p-4 flex flex-col gap-4 md:w-[330px] md:right-10 z-50">
          <div ref={chatReference} className="chat flex flex-col gap-4 chat flex-1 overflow-y-auto scrollbar-hide">
              {
                chat.map(({from, text}, index) => (
                  <div key={index} className={`${from == 'bot' ? 'bg-black' : 'bg-slate-600'} text-white max-w-[200px] p-2 rounded-xl ${from == 'user' ? 'self-end' : 'self-start'}`}>
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
