import { useState } from "react"
import { Chat } from "./Chat"

export function Popup() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <button className="popup fixed bottom-5 right-5 bg-black p-4 rounded-full border border-white hover:scale-110 transition-all" onClick={() => setVisible(!visible)}>
                <img src="https://icongr.am/entypo/chat.svg?size=30&color=ffffff" alt="popupImage" />
            </button>

            {visible && (
                <Chat />
            )}
        </>
    )
}