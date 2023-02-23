import { useRef, useState } from "react"
import { toast } from "wc-toast"

export const useContact = () => {

    const formRef = useRef(null)
    const recaptchaRef = useRef(null)

    const [loading, setLoading] = useState(false)

    const data = {
        service_id: import.meta.env.PUBLIC_SERVICE_ID,
        template_id: import.meta.env.PUBLIC_TEMPLATE_ID,
        user_id: import.meta.env.PUBLIC_USER_KEY
    }
    const emptyTemplate = {
        name: '',
        email: '',
        subject: '',
        message: '',
        "g-recaptcha-response": ''
    }
    const [template, setTemplate] = useState(emptyTemplate)

    const handleChange = (e) => {
        setTemplate({
            ...template,
            [e.target.name]: e.target.value
        })
    }

    const captchaChange = (value) => {
        setTemplate({
            ...template,
            ["g-recaptcha-response"]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        data.template_params = template

        if(loading) return

        if(template.name == '' || template.email == '' || template.subject == '' || template.message == '') {
            return toast.error('Llena todos los campos!')
        }

        setLoading(true)

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if(!response.ok) return toast.error('Captcha Invalido')

            formRef.current.reset()
            recaptchaRef.current.reset()
            setTemplate(emptyTemplate)
            setLoading(false)
            toast.success('Enviado!')
        }).catch(() => toast.error('Algo Salio Mal'))
    }


    return { handleChange, captchaChange, handleSubmit, loading, recaptchaRef, formRef }
}