import "./portfolio.css";
import Trendy from "../../assets/trendy-portfolio.png";

export default function Portfolio() {
  return (
    <section className="portfolio-container">
      <div className="portfolio-wrapper">
        <h1 className="portfolio-title">Proyectos</h1>
        <p className="portfolio-subtitle">
          La experiencia desarrollando aplicaciones a medida es mi mejor manera
          de demostrar que la calidad de mis servicios importan tanto como la
          calidad humana, ya que la comunicación eficiente con el cliente hace
          que proyectos como estos sean posibles
        </p>
        <div className="portfolio-carousel-container">
          <div className="portfolio-project-item">
            <img src={Trendy} alt="" />
            <span className="portfolio-project-description">Sitio web e-commerce dedicado a la venta de ropa tanto a nivel local como a nivel nacional</span>
            <div className="portfolio-project-texts">
              <h3>Trendy</h3>
              <span>E-Commerce</span>
            </div>
          </div>
          <div className="portfolio-project-item">
            <img src={Trendy} alt="" />
            <span className="portfolio-project-description">Sitio web e-commerce dedicado a la venta de ropa tanto a nivel local como a nivel nacional</span>
            <div className="portfolio-project-texts">
              <h3>Trendy</h3>
              <span>E-Commerce</span>
            </div>
          </div>
          <div className="portfolio-project-item">
            <img src={Trendy} alt="" />
            <span className="portfolio-project-description">Sitio web e-commerce dedicado a la venta de ropa tanto a nivel local como a nivel nacional</span>
            <div className="portfolio-project-texts">
              <h3>Trendy</h3>
              <span>E-Commerce</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
