import { useState, useEffect } from "react";
import { EXAMPLES } from "../data/examples";
import { answers } from "../data/answers";

export function useChat(chatReference) {
  const [message, setMessage] = useState("")
  const [chat, setChat] = useState([
    {
      from: "bot",
      text: "Hola soy una IA entrenada por Carlos para que puedas hacer preguntas sobre temas laborales o sobre mi, no dudes en preguntarme!",
    }
  ])

  const handleSubmit = (e) => {
    e.preventDefault();

    if (message == "") return;

    setChat((prev) =>
      prev.concat({
        from: "user",
        text: message,
      })
    )

    setMessage("") 

    fetch("https://api.cohere.ai/classify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.PUBLIC_COHERE_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "large",
        inputs: [message],
        examples: EXAMPLES,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const { classifications } = result;
        const botResponse = classifications[0].prediction;
        setChat((prev) =>
          prev.concat({ from: "bot", text: answers[botResponse] })
        )
      })
  }

useEffect(() => {
    chatReference.current.scrollTo(0, chatReference.current.scrollHeight)
  }, [chat])

  return { handleSubmit, message, setMessage, chat }
}
