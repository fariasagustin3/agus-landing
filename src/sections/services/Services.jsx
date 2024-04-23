import "./services.css";
import WebServices from '../../assets/services-one.gif'
import DesignServices from '../../assets/services-two.gif'

export default function Services() {
  return (
    <section id="services" className="services-container">
      <div className="services-wrapper">
        <h1 className="services-title">¿Qué hago?</h1>
        <div className="services-item">
          <div className="services-text-container">
            <h2>Diseño de experiencia de usuario (UX)</h2>
            <p>
              Mi experiencia como desarrollador Frontend y diversos
              cursos de Google me permitieron desarrollar habilidades de diseño para
              que las aplicaciones sean todavía más escalables y rentables a
              largo plazo
            </p>
          </div>
          <img src={WebServices} alt="" />
        </div>
        <div className="services-item second">
          <div className="services-text-container second">
            <h2>Desarrollo y despliegue de aplicaciones y sitios web</h2>
            <p>
              Como desarrollador web, estoy capacitado para crear una idea en un proyecto
              escalable y rentable en internet, utilizando las tecnologías necesarias para
              que tu negocio digital pueda tener éxito
            </p>
          </div>
          <img src={DesignServices} alt="" />
        </div>
      </div>
    </section>
  );
}
