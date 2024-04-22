import { useRef } from "react"
import emailjs from '@emailjs/browser';
import "./contact.css"

export default function Contact() {
  const formData = useRef()

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_mmdd128', 'template_vbq2k14', formData.current, {
      publicKey: "_9bWcHNhbDt8hz3KK"
    })
      .then(() => alert("Email enviado!"))
      .catch((err) => {
        alert("Error")
        console.log(err)
      })
  }

  return (
    <section id="contact" className="contact-container">
      <h1 className="contact-title">Contáctame</h1>
      <span className="contact-subtitle">¿Qué estás esperando para ponerte en contacto conmigo y hacer que tu negocio despegue?</span>
      <form ref={formData} onSubmit={handleSubmit} className="contact-form">
        <input required name="name" className="contact-name-input" type="text" id="name" placeholder="¿Cómo te llamas?" />
        <input required name="email" className="contact-email-input" type="email" id="email" placeholder="¿Cuál es tu dirección de correo electrónico?" />
        <textarea required name="message" className="contact-message-input" type="text" id="message" placeholder="¿En qué puedo ayudarte?" rows={10} />
        <button className="form-button" type="submit">Enviar</button>
      </form>
    </section>
  )
}
