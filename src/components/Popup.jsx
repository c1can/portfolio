import { useState } from "react"

export function Popup() {

    const [visible, setVisible] = useState(false)

    return (
        <>
            <button className="popup fixed bottom-0 right-0 bg-black p-4 rounded-full" onClick={() => setVisible(!visible)}>
                <img src="https://icongr.am/entypo/chat.svg?size=35&color=ffffff" alt="popupImage" />
            </button>

            {visible && (
                <p className="fixed bottom-0 left-0 text-xl text-red-500">Hola</p>
            )}
        </>
    )
}