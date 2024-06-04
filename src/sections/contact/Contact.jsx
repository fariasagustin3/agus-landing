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
      <h1 className="contact-title">Let's get in touch!</h1>
      <span className="contact-subtitle">What are you waiting for to get in touch with me and make your business take off?</span>
      <form ref={formData} onSubmit={handleSubmit} className="contact-form">
        <input required name="name" className="contact-name-input" type="text" id="name" placeholder="What's your name?" />
        <input required name="email" className="contact-email-input" type="email" id="email" placeholder="What's your email address?" />
        <textarea required name="message" className="contact-message-input" type="text" id="message" placeholder="What can I do for you?" rows={10} />
        <button className="form-button" type="submit">Send</button>
      </form>
    </section>
  )
}
