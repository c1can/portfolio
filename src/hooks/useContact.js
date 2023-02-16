import { useState } from "react"
import { toast } from "wc-toast"

export const useContact = () => {
    const data = {
        service_id: import.meta.env.PUBLIC_SERVICE_ID,
        template_id: import.meta.env.PUBLIC_TEMPLATE_ID,
        user_id: import.meta.env.PUBLIC_USER_KEY
    }

    const [template, setTemplate] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        "g-recaptcha-response": ''
    })

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

        if(template.name == '' || template.email == '' || template.subject == '' || template.message == '') {
            return toast.error('Llena todos los campos!')
        }

        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => {
            if(!response.ok) return toast.error('Captcha Invalido')

            toast.success('Enviado!')
            setTimeout(() => {
                window.location.reload()
            }, 2000);
        }).catch(() => toast.error('Algo Salio Mal'))
    }


    return { handleChange, captchaChange, handleSubmit }
}