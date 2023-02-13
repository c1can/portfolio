import emailjs from "@emailjs/browser"
import { toast } from "wc-toast";

export const useContact = (form) => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form.current,
        import.meta.env.PUBLIC_KEY
      )
      .then(
        (response) => {
          if (response.text == "OK") {
            toast.success('Enviado!')
            setTimeout(() => {
                return window.location.reload()
            }, 1500)
          }
        },
        (error) => {
          return toast.error("Error");
        }
      );
  };

  return { sendEmail }
};
