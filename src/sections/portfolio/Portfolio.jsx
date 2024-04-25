import "./portfolio.css";
import Pizzagus from "../../assets/delivery-pizza-project.png";
import Landing from "../../assets/landing-sparkify-project.png";
import EpicStore from "../../assets/epic-store-project.png";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio-container">
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Proyectos</h1>
        <p className="portfolio-subtitle">
          La experiencia desarrollando aplicaciones a medida es mi mejor manera
          de demostrar que la calidad de mis servicios importan tanto como la
          calidad humana, ya que la comunicación eficiente con el cliente hace
          que proyectos como estos sean posibles
        </p>
        <div className="portfolio-carousel-container">
          <a href="https://pizzagus.vercel.app/" target="_blank" className="portfolio-project-item">
            <img src={Pizzagus} alt="" />
            <span className="portfolio-project-description">Sitio web de tipo e-commerce adaptado a las necesidades de un negocio de comida rápida.</span>
            <div className="portfolio-project-texts">
              <h3>Pizzagus</h3>
              <span>Food Delivery App</span>
            </div>
          </a>
          <a href="https://sparkify-dev.vercel.app/" target="_blank" className="portfolio-project-item">
            <img src={Landing} alt="" />
            <span className="portfolio-project-description">Landing page profesional y adaptado a teléfonos móviles desarrollado con React.js y TailwindCSS</span>
            <div className="portfolio-project-texts">
              <h3>Sparkify</h3>
              <span>Landing Page</span>
            </div>
          </a>
          <a href="https://agustore.vercel.app/" target="_blank" className="portfolio-project-item">
            <img src={EpicStore} alt="" />
            <span className="portfolio-project-description">Sitio web e-commerce dedicado a la venta de productos desde ropa hasta artículos de librería</span>
            <div className="portfolio-project-texts">
              <h3>Epic Store</h3>
              <span>E-Commerce</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
