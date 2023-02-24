import { useState } from "react"
import { Chat } from "./Chat"

export function Popup() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <button className="popup fixed bottom-0 right-0 bg-black p-4 rounded-full" onClick={() => setVisible(!visible)}>
                <img src="https://icongr.am/entypo/chat.svg?size=30&color=ffffff" alt="popupImage" />
            </button>

            {visible && (
                <Chat />
            )}
        </>
    )
}